// Scroll reveal
const reveals = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.1 });
reveals.forEach(el => io.observe(el));

// Sticky CTA — visible only when hero is gone AND final CTA section is not yet visible
const stickyCta = document.querySelector('.sticky-cta');
const hero = document.querySelector('.hero');
const ctaSection = document.getElementById('cta');
if (stickyCta && hero && ctaSection) {
  let heroVisible = true;
  let ctaVisible = false;

  const update = () => stickyCta.classList.toggle('visible', !heroVisible && !ctaVisible);

  new IntersectionObserver(([e]) => { heroVisible = e.isIntersecting; update(); }, { threshold: 0.1 }).observe(hero);
  new IntersectionObserver(([e]) => { ctaVisible = e.isIntersecting; update(); }, { threshold: 0.2 }).observe(ctaSection);
}

// Testimonials carousel
const track = document.querySelector('.testi-track');
if (track) {
  const dots = document.querySelectorAll('.testi-dot');
  const total = dots.length;
  let current = 0;

  function goTo(index) {
    current = (index + total) % total;
    track.style.transform = `translateX(-${current * 100}%)`;
    dots.forEach((d, i) => d.classList.toggle('active', i === current));
  }

  document.querySelector('.testi-prev').addEventListener('click', () => goTo(current - 1));
  document.querySelector('.testi-next').addEventListener('click', () => goTo(current + 1));
  dots.forEach((d, i) => d.addEventListener('click', () => goTo(i)));
}
