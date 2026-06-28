create extension if not exists pgcrypto;

create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  email text not null,
  phone text not null,
  business_type text,
  budget text,
  message text,
  source text default 'website',
  status text not null default 'new' check (status in ('new','contacted','qualified','won','lost'))
);

create table if not exists public.projects (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  title text not null,
  category text not null,
  description text,
  image_url text,
  is_featured boolean default false,
  published boolean default true
);

create table if not exists public.blog_posts (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  title text not null,
  slug text unique not null,
  excerpt text,
  content text,
  published boolean default false
);

alter table public.leads enable row level security;
alter table public.projects enable row level security;
alter table public.blog_posts enable row level security;

create policy "Anyone can submit leads" on public.leads for insert to anon, authenticated with check (true);
create policy "Authenticated can read leads" on public.leads for select to authenticated using (true);
create policy "Authenticated can update leads" on public.leads for update to authenticated using (true) with check (true);

create policy "Anyone can read published projects" on public.projects for select to anon, authenticated using (published = true);
create policy "Authenticated manage projects" on public.projects for all to authenticated using (true) with check (true);

create policy "Anyone can read published posts" on public.blog_posts for select to anon, authenticated using (published = true);
create policy "Authenticated manage posts" on public.blog_posts for all to authenticated using (true) with check (true);

insert into storage.buckets (id, name, public) values ('website-assets','website-assets',true) on conflict (id) do nothing;
create policy "Public read website assets" on storage.objects for select using (bucket_id = 'website-assets');
create policy "Authenticated upload website assets" on storage.objects for insert to authenticated with check (bucket_id = 'website-assets');
