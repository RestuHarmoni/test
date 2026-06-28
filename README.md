# RH Digital Production Website

Premium conversion-focused website for RH Digital / Restu Harmoni.

## Stack
- Vite + HTML/CSS/JavaScript ES Modules
- Supabase for leads, content-ready database, storage policies and RLS
- Cloudflare Pages deployment
- GitHub source control

## Quick Start
```bash
npm install
cp .env.example .env
npm run dev
```

## Production Build
```bash
npm run build
npm run preview
```

## Cloudflare Pages
Build command: `npm run build`
Output directory: `dist`

## Supabase
Run `supabase/migrations/001_initial_schema.sql` in Supabase SQL Editor. Add the generated Supabase URL and anon key to your environment variables.

## Structure
Business content lives in `src/data/siteData.js`. UI is split across components, sections, forms, utilities and styles. Supabase configuration is isolated in `src/lib/supabaseClient.js` and `/supabase`.
