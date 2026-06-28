# RH Digital Static Production Website

Versi ini **tanpa Vite** dan boleh dibuka terus melalui `index.html`.

## Struktur

```txt
index.html
assets/css/style.css
assets/js/config.js
assets/js/main.js
images/
logos/
mockups/
supabase/
docs/
```

## Preview lokal

Cara paling mudah:

```bash
python -m http.server 8080
```

Buka:

```txt
http://localhost:8080
```

Nota: boleh juga klik `index.html` terus, tetapi preview melalui local server lebih tepat untuk path `/images`, `/assets`, dan `/logos`.

## Deploy ke GitHub + Cloudflare Pages

1. Upload semua fail dalam folder ini ke GitHub repository.
2. Cloudflare Pages → Create project → Connect GitHub repo.
3. Build command: kosongkan / None.
4. Output directory: `/` atau kosongkan jika Cloudflare benarkan.
5. Deploy.

## Supabase Lead Form

1. Buat project Supabase.
2. Buka SQL Editor.
3. Jalankan fail:

```txt
supabase/migrations/001_initial_schema.sql
```

4. Copy Project URL dan anon public key.
5. Edit:

```txt
assets/js/config.js
```

Isi:

```js
window.RH_CONFIG = {
  SUPABASE_URL: 'https://your-project.supabase.co',
  SUPABASE_ANON_KEY: 'your-anon-key',
  WHATSAPP_NUMBER: '601112345678'
};
```

Selepas itu form akan simpan lead ke table `public.leads`.
