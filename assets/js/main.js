(function(){
  const header = document.querySelector('.site-header');
  window.addEventListener('scroll', () => header?.classList.toggle('is-scrolled', window.scrollY > 12), { passive: true });

  const observer = 'IntersectionObserver' in window ? new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 }) : null;
  document.querySelectorAll('[data-animate]').forEach((el) => observer ? observer.observe(el) : el.classList.add('is-visible'));

  const menuBtn = document.querySelector('[data-menu-btn]');
  const nav = document.querySelector('[data-nav]');
  menuBtn?.addEventListener('click', () => nav?.classList.toggle('is-open'));

  const config = window.RH_CONFIG || {};
  const wa = document.querySelector('[data-whatsapp]');
  if (wa && config.WHATSAPP_NUMBER) wa.href = `https://wa.me/${config.WHATSAPP_NUMBER}`;

  const form = document.querySelector('[data-lead-form]');
  const status = document.querySelector('[data-form-status]');
  form?.addEventListener('submit', async (event) => {
    event.preventDefault();
    const payload = Object.fromEntries(new FormData(form).entries());
    status.textContent = 'Sedang dihantar...';

    if (!config.SUPABASE_URL || !config.SUPABASE_ANON_KEY) {
      status.textContent = 'Demo: borang sudah diterima. Sila isi SUPABASE_URL dan SUPABASE_ANON_KEY dalam assets/js/config.js untuk simpan lead.';
      form.reset();
      return;
    }

    try {
      const response = await fetch(`${config.SUPABASE_URL}/rest/v1/leads`, {
        method: 'POST',
        headers: {
          apikey: config.SUPABASE_ANON_KEY,
          Authorization: `Bearer ${config.SUPABASE_ANON_KEY}`,
          'Content-Type': 'application/json',
          Prefer: 'return=minimal'
        },
        body: JSON.stringify({ ...payload, source: 'website' })
      });
      if (!response.ok) throw new Error('Supabase insert failed');
      status.textContent = 'Terima kasih. Kami akan hubungi anda secepat mungkin.';
      form.reset();
    } catch (error) {
      console.error(error);
      status.textContent = 'Maaf, borang gagal dihantar. Sila hubungi kami melalui WhatsApp.';
    }
  });
})();
