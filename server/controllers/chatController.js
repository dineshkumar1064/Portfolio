const { RESUME_CONTEXT, localAnswer } = require('../data/resumeContext');

// POST /api/chat
// body: { message: string, history: [{role, content}, ...] }
async function handleChat(req, res) {
  const { message, history = [] } = req.body;

  if (!message || typeof message !== 'string' || !message.trim()) {
    return res.status(400).json({ error: 'A "message" string is required.' });
  }

  const GROQ_KEY = process.env.GROQ_API_KEY;
  const GROQ_MODEL = process.env.GROQ_MODEL || 'llama-3.3-70b-versatile';

  // No key configured -> use the built-in fallback so the site still works.
  if (!GROQ_KEY) {
    return res.json({ reply: localAnswer(message), source: 'local' });
  }

  try {
    const messages = [
      { role: 'system', content: RESUME_CONTEXT },
      ...history.slice(-12),
      { role: 'user', content: message },
    ];

    const groqRes = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${GROQ_KEY}`,
      },
      body: JSON.stringify({
        model: GROQ_MODEL,
        messages,
        temperature: 0.6,
        max_tokens: 350,
      }),
    });

    if (!groqRes.ok) throw new Error(`Groq request failed: ${groqRes.status}`);

    const data = await groqRes.json();
    const reply = data.choices?.[0]?.message?.content?.trim() || localAnswer(message);

    return res.json({ reply, source: 'groq' });
  } catch (err) {
    console.error('Groq call failed:', err.message);
    return res.json({
      reply: localAnswer(message),
      source: 'local',
      note: 'Live AI call failed — showing a built-in answer instead.',
    });
  }
}

module.exports = { handleChat };
