// Hamburger toggle
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navLinks.classList.toggle("open");
});

// Card scroll animation
const cards = document.querySelectorAll('.card');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('in-view');
    }
  });
}, {threshold:0.2});
cards.forEach(card => observer.observe(card));

// Stars animation
const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let stars = [];
for(let i=0;i<150;i++){
  stars.push({x:Math.random()*canvas.width, y:Math.random()*canvas.height, r:Math.random()*1.2});
}

function drawStars(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  stars.forEach(s => {
    ctx.beginPath();
    ctx.arc(s.x,s.y,s.r,0,Math.PI*2);
    ctx.fillStyle="#fff";
    ctx.fill();
  });
  requestAnimationFrame(drawStars);
}
drawStars();

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

