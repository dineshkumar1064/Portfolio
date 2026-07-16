# Dinesh Kumar S — Portfolio (MERN Stack)

A full-stack conversion of the original single-file HTML portfolio into a proper
**MERN**-style project: React (Vite) frontend + Node/Express backend. The backend
now only powers the AI chatbot — the contact form opens the visitor's email
client directly, no server or database required for that part.

```
mern-portfolio/
├── client/          React (Vite) frontend
│   ├── public/images/home-bg.jpeg   ← desktop hero background
│   ├── public/images/mobile-bg.jpg  ← mobile hero background
│   └── src/
│       ├── components/              one component per section
│       ├── data/portfolioData.js    all resume content lives here
│       ├── api.js                   fetch helper for the chatbot backend
│       └── App.jsx
├── server/          Express backend
│   ├── routes/       /api/chat
│   ├── controllers/  request handlers
│   └── server.js
└── package.json      root scripts to run both together
```

## Why a backend at all?

The original file called the Groq AI API **directly from the browser**, which means
anyone could open dev tools and steal the API key you pasted into settings. This
version fixes that: the client calls **your own** `/api/chat` endpoint, and the
server holds the Groq key in an environment variable that's never sent to the
browser.

## 1. Install

```bash
cd mern-portfolio
npm run install:all
```

## 2. Configure environment variables

```bash
cp server/.env.example server/.env
cp client/.env.example client/.env
```

Edit `server/.env`:
- `GROQ_API_KEY` — get a free key at [console.groq.com](https://console.groq.com). Optional — if left blank, the chatbot uses built-in canned answers instead of calling an LLM.

`client/.env` only matters in production (see below) — leave `VITE_API_URL` blank for local dev, since Vite proxies `/api` to the Express server automatically.

## 3. Run locally

```bash
npm run dev
```

This starts the Express API on `http://localhost:5000` and the React app on
`http://localhost:5173` at the same time.

## 4. Changing the background photos

- Desktop hero background: `client/public/images/home-bg.jpeg`
- Mobile hero background: `client/public/images/mobile-bg.jpg`

Both are referenced from `client/src/index.css` under `.hero` (desktop) and the
`@media(max-width:980px)` block (mobile). Swap the files (keep the same names)
to change them, or update the paths in `index.css` if you rename them.

## Deployment

This is a two-part deploy: a static frontend build + a Node backend.

### Option A — Frontend + Backend on separate hosts (recommended, free tiers available)

**Backend (Render, Railway, Fly.io, etc.):**
1. Push this repo to GitHub.
2. Create a new Web Service pointing at the `server/` folder (or set the root
   directory to `server` if the host asks).
3. Build command: `npm install` — Start command: `npm start`.
4. Add the same environment variables from `server/.env` in the host's dashboard.
5. Set `CLIENT_URL` to your deployed frontend's URL (for CORS).
6. Note the backend's public URL, e.g. `https://your-api.onrender.com`.

**Frontend (Vercel, Netlify, etc.):**
1. Create a new project pointing at the `client/` folder.
2. Build command: `npm run build` — Output directory: `dist`.
3. Add an environment variable `VITE_API_URL` set to your backend URL from above.
4. Deploy.

### Option B — Single host serving both (Render/Railway "web service")

The Express server already has production static-file serving built in
(`server.js` serves `client/dist` when `NODE_ENV=production`). To deploy as one
service:
1. Build command: `npm run build --prefix client && npm install --prefix server`
2. Start command: `npm start --prefix server` (set `NODE_ENV=production` in env vars)
3. Set all the `server/.env` variables in the host's dashboard.
4. You won't need `VITE_API_URL` since the frontend and API share an origin.

## API Reference

| Method | Route          | Body                              | Description                          |
|--------|----------------|------------------------------------|---------------------------------------|
| GET    | `/api/health`  | —                                   | Health check                          |
| POST   | `/api/chat`    | `{ message, history }`             | AI chatbot reply (Groq or fallback)   |

The chat route is rate-limited to reduce spam/abuse.
