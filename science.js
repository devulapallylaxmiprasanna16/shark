// Hamburger Menu
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('open');
});

// Stars Animation
const canvas = document.getElementById('stars');
const ctx = canvas.getContext('2d');
let w = canvas.width = window.innerWidth;
let h = canvas.height = window.innerHeight;
let stars = [];

function initStars(){
  stars = [];
  for(let i=0;i<150;i++){
    stars.push({
      x: Math.random()*w,
      y: Math.random()*h,
      r: Math.random()*1.5+0.5,
      dx: Math.random()*0.2-0.1,
      dy: Math.random()*0.2-0.1
    });
  }
}
function animateStars(){
  ctx.clearRect(0,0,w,h);
  for(let s of stars){
    ctx.beginPath();
    ctx.arc(s.x,s.y,s.r,0,Math.PI*2);
    ctx.fillStyle = 'rgba(255,255,255,0.8)';
    ctx.fill();
    s.x += s.dx;
    s.y += s.dy;
    if(s.x<0) s.x=w;
    if(s.x>w) s.x=0;
    if(s.y<0) s.y=h;
    if(s.y>h) s.y=0;
  }
  requestAnimationFrame(animateStars);
}
window.addEventListener('resize',()=>{
  w=canvas.width=window.innerWidth;
  h=canvas.height=window.innerHeight;
  initStars();
});
initStars();
animateStars();

// Facts Carousel
const factItems = document.querySelectorAll('.fact-item');
let currentFact = 0;
document.getElementById('next').addEventListener('click', ()=>{
  factItems[currentFact].classList.remove('active');
  currentFact = (currentFact+1)%factItems.length;
  factItems[currentFact].classList.add('active');
});
document.getElementById('prev').addEventListener('click', ()=>{
  factItems[currentFact].classList.remove('active');
  currentFact = (currentFact-1+factItems.length)%factItems.length;
  factItems[currentFact].classList.add('active');
});
