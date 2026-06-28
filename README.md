# RH Digital Static Production Website

Website statik tanpa Vite, dibina mengikut `RH_Digital_Master_Website_AI_Prompt.md`.

## Deploy ke Cloudflare Pages
- Framework preset: None
- Build command: kosong
- Output directory: `/`

## GitHub
Upload semua fail ke repository, kemudian sambungkan repository ke Cloudflare Pages.

## Supabase
1. Run `supabase/migrations/001_schema.sql`
2. Run `supabase/policies/rls.sql`
3. Letakkan URL dan anon key di `supabase/config.js`

## Struktur
- `index.html` halaman utama penuh
- `assets/css` modular CSS
- `assets/js` interaksi UI
- `supabase` schema, RLS dan lead form stub
- `pages`, `src`, `docs` disediakan untuk pengembangan modular
