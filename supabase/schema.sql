create extension if not exists pgcrypto;

create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  phone text,
  project_type text,
  message text,
  status text not null default 'new',
  created_at timestamptz not null default now()
);

alter table public.leads enable row level security;

create policy "Allow public lead insert"
on public.leads for insert
to anon
with check (true);

create policy "Allow authenticated read leads"
on public.leads for select
to authenticated
using (true);

create policy "Allow authenticated update leads"
on public.leads for update
to authenticated
using (true)
with check (true);
