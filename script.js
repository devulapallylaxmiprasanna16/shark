// Hamburger Toggle
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  nav.classList.toggle('open');
});

// Close menu on link click
document.querySelectorAll('#nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    hamburger.classList.remove('active');
  });
});
