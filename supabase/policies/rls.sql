alter table public.leads enable row level security;
alter table public.projects enable row level security;
alter table public.posts enable row level security;
create policy "allow public insert leads" on public.leads for insert to anon with check (true);
create policy "allow authenticated read leads" on public.leads for select to authenticated using (true);
create policy "allow public read featured projects" on public.projects for select to anon using (true);
create policy "allow public read published posts" on public.posts for select to anon using (published = true);
