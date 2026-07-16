// In dev, Vite proxies /api to the Express server (see vite.config.js).
// In production, set VITE_API_URL to your deployed backend's base URL.
const API_BASE = import.meta.env.VITE_API_URL || '';

export async function sendChatMessage({ message, history }) {
  const res = await fetch(`${API_BASE}/api/chat`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ message, history }),
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(data.error || 'Failed to reach the chatbot.');
  return data;
}
