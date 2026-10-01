# MPD Dashboard

Metro Police Department internal dashboard built with React, Vite, Express, MongoDB, Discord OAuth, and Google Sheets.

## Local development

1. Copy `.env.example` to `.env`.
2. Fill in the local credentials and OAuth settings.
3. Install dependencies:

```bash
npm ci
```

4. Start the frontend and Express API:

```bash
npm run dev
```

The Vite development server runs on `http://localhost:5173` and proxies `/api` requests to the local Express server on port `3001`.

## Production / Vercel

The project is configured for Vercel:

- Vite builds the frontend to `dist`.
- `api/[...path].ts` forwards `/api/*` requests to `server/app.ts`.
- The Express app does not call `listen()` on Vercel.
- SPA routes are rewritten to `index.html`.
- MongoDB is used for persistent application data.
- Environment variables are supplied by Vercel and are not committed to Git.

### Vercel environment variables

Add the variables from `.env.example` to the Vercel project. For production, set:

```env
DISCORD_REDIRECT_URI=https://YOUR-DOMAIN/api/auth/callback
APP_ORIGIN=https://YOUR-DOMAIN
```

Replace `YOUR-DOMAIN` with the Vercel deployment domain or your custom domain.

The same production callback URL must also be registered in the Discord application's OAuth2 redirect settings.

### Build

Vercel uses:

```bash
npm run build
```

The build includes TypeScript checking for both the React frontend and the Vercel/Express backend.

## Important

Never commit `.env` or production secrets. Use `.env.example` only as the configuration template and add real values through Vercel Environment Variables.
