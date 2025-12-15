// Enhanced script: theme toggle, intersection animations, parallax, skills animation, mobile menu (if needed)
document.addEventListener('DOMContentLoaded', function(){
  // Theme toggle (persist)
  const toggle = document.getElementById('themeToggle');
  const stored = localStorage.getItem('loki_theme');
  if(stored === 'dark') document.body.classList.add('dark');
  toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    localStorage.setItem('loki_theme', document.body.classList.contains('dark') ? 'dark' : 'light');
    toggle.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
  });
  toggle.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';

  // IntersectionObserver for scroll-triggered animations
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add('in-view');
        io.unobserve(entry.target);

        // skills bars animation inside observed element
        entry.target.querySelectorAll && entry.target.querySelectorAll('.progress-bar').forEach(bar => {
          const val = bar.getAttribute('data-value') || '0%';
          setTimeout(()=> bar.style.width = val, 120);
        });
      }
    });
  }, {threshold: 0.12});

  document.querySelectorAll('[data-animate]').forEach(el => {
    el.classList.add('will-animate');
    io.observe(el);
  });

  // Parallax effect on hero image
  const heroImg = document.querySelector('.hero-img');
  if(heroImg){
    window.addEventListener('mousemove', (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 10;
      const y = (e.clientY / window.innerHeight - 0.5) * 6;
      heroImg.style.transform = `translate(${x}px, ${y}px) scale(1.02)`;
    });
    window.addEventListener('mouseleave', ()=> heroImg.style.transform = '');
  }

  // Simple form submit (client-side)
  const form = document.getElementById('contactForm');
  if(form){
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = form.querySelector('button[type=submit]');
      btn.textContent = 'Sending...';
      btn.disabled = true;
      // fake async
      setTimeout(() => {
        btn.textContent = 'Sent — Thanks!';
        form.reset();
        setTimeout(() => { btn.textContent = 'Send Message'; btn.disabled = false }, 2200);
      }, 900);
    });
  }

  // Skills meter init (in case not triggered by IO)
  document.querySelectorAll('.progress-bar').forEach(bar => {
    if(bar.style.width === '') bar.style.width = '0%';
  });

  // Smooth anchor scroll
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function(e){
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if(target) target.scrollIntoView({behavior:'smooth', block:'start'});
    });
  });
});
