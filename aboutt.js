// Stars Canvas
const canvas=document.getElementById('stars');
const ctx=canvas.getContext('2d');
let stars=[];

function resizeCanvas(){
  canvas.width=window.innerWidth;
  canvas.height=window.innerHeight;
}
function createStars(){
  const num=200;
  stars=[];
  for(let i=0;i<num;i++){
    stars.push({x:Math.random()*canvas.width,y:Math.random()*canvas.height,r:Math.random()*1.5,d:Math.random()*0.5+0.2});
  }
}
function drawStars(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.fillStyle='rgba(0,225,255,0.8)';
  stars.forEach(s=>{
    ctx.beginPath();
    ctx.arc(s.x,s.y,s.r,0,Math.PI*2);
    ctx.fill();
  });
}
function animateStars(){
  stars.forEach(s=>{
    s.y-=s.d;
    if(s.y<0){s.y=canvas.height;}
  });
  drawStars();
  requestAnimationFrame(animateStars);
}
resizeCanvas(); createStars(); animateStars();
window.addEventListener('resize',()=>{resizeCanvas(); createStars();});

// Hamburger Menu
const hamburger=document.getElementById('hamburger');
const nav=document.getElementById('nav-links');
hamburger.addEventListener('click',()=>{
  hamburger.classList.toggle('active');
  nav.classList.toggle('open');
});

// Fade-in Cards
const cards=document.querySelectorAll('.card');
const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('in-view');
      observer.unobserve(entry.target);
    }
  });
},{threshold:0.2});
cards.forEach(card=>observer.observe(card));

// Parallax Stars on scroll
window.addEventListener('scroll',()=>{
  let scrollY=window.scrollY;
  canvas.style.transform=`translateY(${scrollY*0.2}px)`;
});
