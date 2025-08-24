
// Mobile nav toggle
const toggle = document.getElementById('nav-toggle');
const nav = document.getElementById('primary-nav');
toggle?.addEventListener('click', () => nav.classList.toggle('show'));

// Close nav on click (mobile)
nav?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => nav.classList.remove('show')));

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e){
    const target = document.querySelector(this.getAttribute('href'));
    if(target){
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Open only one FAQ at a time
document.querySelectorAll('.faq details').forEach(d => {
  d.addEventListener('toggle', () => {
    if(d.open){
      document.querySelectorAll('.faq details').forEach(o => { if(o!==d) o.open = false; });
    }
  });
});
