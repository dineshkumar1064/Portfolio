import { useState } from 'react';
import { profile } from '../data/portfolioData';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null); // { type: 'error', text }

  function updateField(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus({ type: 'error', text: 'Please fill in all fields.' });
      return;
    }
    setStatus(null);

    const subject = `Portfolio inquiry from ${form.name}`;
    const body = `${form.message}\n\n— ${form.name} (${form.email})`;
    const mailtoLink = `mailto:${profile.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
  }

  async function copyText(text, e) {
    try {
      await navigator.clipboard.writeText(text);
      const btn = e.target;
      const original = btn.textContent;
      btn.textContent = 'Copied ✓';
      setTimeout(() => {
        btn.textContent = original;
      }, 1600);
    } catch (err) {
      console.error('Copy failed', err);
    }
  }

  return (
    <section id="contact">
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow">Contact</p>
          <h2>Let's build something together.</h2>
          <p>
            Open to full stack and AI engineering roles. Send a message and I'll get back to you
            soon — or reach out directly using the details on the right.
          </p>
        </div>

        <div className="contact-grid">
          <form className="contact-form-card" onSubmit={handleSubmit}>
            <div className="field">
              <label htmlFor="cName">Name</label>
              <input
                type="text"
                id="cName"
                name="name"
                placeholder="Your name"
                value={form.name}
                onChange={updateField}
              />
            </div>
            <div className="field">
              <label htmlFor="cEmail">Email</label>
              <input
                type="email"
                id="cEmail"
                name="email"
                placeholder="you@example.com"
                value={form.email}
                onChange={updateField}
              />
            </div>
            <div className="field">
              <label htmlFor="cMsg">Message</label>
              <textarea
                id="cMsg"
                name="message"
                placeholder="Tell me a bit about the role or project..."
                value={form.message}
                onChange={updateField}
              />
            </div>

            {status && (
              <p className={`form-status ${status.type}`}>{status.text}</p>
            )}

            <div className="form-actions">
              <button type="submit" className="btn btn-primary btn-block">
                Open with email
              </button>
            </div>
            <button
              className="copy-btn"
              type="button"
              onClick={(e) =>
                copyText(`From: ${form.name || '(no name)'} (${form.email || '(no email)'})\n\n${form.message || '(no message)'}`, e)
              }
            >
              Copy message
            </button>
            <p className="form-hint" style={{ marginTop: 14 }}>
              This opens your default email app with the message pre-filled.
            </p>
          </form>

          <div className="contact-cards">
            <div className="c-card">
              <h4>
                <span className="ci ic-1">✉️</span> Email - <span style={{ color: '#E2803D' }}>{profile.email}</span>
              </h4>
              <button className="copy-btn" onClick={(e) => copyText(profile.email, e)}>
                Copy email
              </button>
            </div>
            <div className="c-card">
              <h4>
                <span className="ci ic-3">📞</span> Phone - <span style={{ color: '#E2803D' }}>{profile.phone}</span>
              </h4>
              <button className="copy-btn" onClick={(e) => copyText(profile.phone, e)}>
                Copy number
              </button>
            </div>
            <div className="c-card">
              <h4>
                <span className="ci ic-2">💼</span> LinkedIn
              </h4>
              <a className="ext" href={profile.linkedin} target="_blank" rel="noopener noreferrer">
                Visit profile ↗
              </a>
            </div>
            <div className="c-card">
              <h4>
                <span className="ci ic-1">🐙</span> GitHub
              </h4>
              <a className="ext" href={profile.github} target="_blank" rel="noopener noreferrer">
                Visit profile ↗
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
