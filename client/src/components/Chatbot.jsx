import { useState, useRef, useEffect } from 'react';
import { chatSuggestions, profile } from '../data/portfolioData';
import { sendChatMessage } from '../api';

const WELCOME = "Hey! I'm an AI trained on Dinesh's resume 👋 Ask me about his experience, projects, skills, or how to get in touch.";

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([{ role: 'bot', text: WELCOME }]);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);
  const historyRef = useRef([]); // {role: 'user'|'assistant', content}
  const bodyRef = useRef(null);
  const panelRef = useRef(null);
  const fabRef = useRef(null);

  useEffect(() => {
    if (bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
  }, [messages, typing]);

  // Let other components (e.g. the Hero "Chat with AI" button) open the widget.
  useEffect(() => {
    function handleOpenChat() {
      setOpen(true);
    }
    window.addEventListener('open-chat', handleOpenChat);
    return () => window.removeEventListener('open-chat', handleOpenChat);
  }, []);

  // Close the panel when clicking/tapping outside of it.
  useEffect(() => {
    if (!open) return;

    function handleClickOutside(e) {
      if (
        panelRef.current &&
        !panelRef.current.contains(e.target) &&
        fabRef.current &&
        !fabRef.current.contains(e.target)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [open]);

  async function submitMessage(text) {
    const trimmed = text.trim();
    if (!trimmed) return;
    setMessages((m) => [...m, { role: 'user', text: trimmed }]);
    setInput('');
    setTyping(true);
    try {
      const { reply, note } = await sendChatMessage({
        message: trimmed,
        history: historyRef.current,
      });
      historyRef.current = [
        ...historyRef.current,
        { role: 'user', content: trimmed },
        { role: 'assistant', content: reply },
      ].slice(-12);
      setMessages((m) => [...m, { role: 'bot', text: note ? `${reply}\n\n(${note})` : reply }]);
    } catch (err) {
      setMessages((m) => [
        ...m,
        {
          role: 'bot',
          text: `Sorry, I couldn't reach the server just now. You can email Dinesh directly at ${profile.email}.`,
        },
      ]);
    } finally {
      setTyping(false);
    }
  }

  function handleSend(e) {
    e.preventDefault();
    submitMessage(input);
  }

  return (
    <>
      <button
        className="chat-fab"
        aria-label="Open chat"
        ref={fabRef}
        onClick={() => setOpen((o) => !o)}
      >
        💬<span className="ping"></span>
      </button>

      <div className={`chat-panel ${open ? 'open' : ''}`} ref={panelRef}>
        <div className="chat-head">
          <div className="avatar">{profile.initials}</div>
          <div className="titles">
            <b>Ask Dinesh's AI</b>
            <small>Trained on My resume</small>
          </div>
        </div>

        <div className="chat-body" ref={bodyRef}>
          {messages.map((m, i) => (
            <div className={`msg ${m.role}`} key={i}>
              {m.text}
            </div>
          ))}
          {typing && (
            <div className="msg bot typing">
              <span></span>
              <span></span>
              <span></span>
            </div>
          )}
        </div>

        <div className="chat-suggest">
          {chatSuggestions.map((s) => (
            <button key={s.q} onClick={() => submitMessage(s.q)}>
              {s.label}
            </button>
          ))}
        </div>

        <form className="chat-input" onSubmit={handleSend}>
          <input
            type="text"
            placeholder="Type a message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button type="submit">↑</button>
        </form>
      </div>
    </>
  );
}
