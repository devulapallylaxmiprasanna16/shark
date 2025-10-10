// Hamburger Menu Toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('open');
});

// Stars Canvas
const canvas = document.getElementById('stars');
const ctx = canvas.getContext('2d');
let w = canvas.width = window.innerWidth;
let h = canvas.height = window.innerHeight;
const stars = [];
const starCount = 150;

for(let i=0;i<starCount;i++){
  stars.push({
    x: Math.random()*w,
    y: Math.random()*h,
    r: Math.random()*1.5 + 0.5,
    d: Math.random()*0.5
  });
}

function drawStars(){
  ctx.clearRect(0,0,w,h);
  for(let i=0;i<starCount;i++){
    let s = stars[i];
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.r, 0, Math.PI*2);
    ctx.fillStyle = `rgba(255,255,255,${Math.random()})`;
    ctx.fill();
  }
  requestAnimationFrame(drawStars);
}
drawStars();

window.addEventListener('resize', () => {
  w = canvas.width = window.innerWidth;
  h = canvas.height = window.innerHeight;
});

// Cards Animation on Scroll
const cards = document.querySelectorAll('.card');
function checkCards(){
  const triggerBottom = window.innerHeight * 0.9;
  cards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;
    if(cardTop < triggerBottom){
      card.classList.add('in-view');
    }
  });
}
window.addEventListener('scroll', checkCards);
checkCards();
