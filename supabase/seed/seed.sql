insert into public.projects (title, category, description, image_url, is_featured) values
('Syarikat Pembinaan','Website Korporat','Website korporat untuk meningkatkan kredibiliti syarikat.','/images/portfolio-construction.svg',true),
('Kedai Online','E-Commerce','Katalog produk dan aliran pembelian ringkas.','/images/portfolio-ecommerce.svg',true)
on conflict do nothing;
