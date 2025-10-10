// Hamburger toggle
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navLinks.classList.toggle("open");
});

// Stars Canvas
const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let stars = [];
for (let i = 0; i < 200; i++) {
  stars.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 1.2,
    d: Math.random() * 0.5
  });
}

function drawStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "white";
  ctx.shadowColor = "#00e1ff";
  ctx.shadowBlur = 5;

  stars.forEach(s => {
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
    ctx.fill();
    s.y += s.d;
    if (s.y > canvas.height) {
      s.y = 0;
      s.x = Math.random() * canvas.width;
    }
  });
  requestAnimationFrame(drawStars);
}
drawStars();
window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

// Counters Animation
function animateCounter(id, target, duration) {
  const el = document.getElementById(id);
  let start = 0;
  const step = target / (duration / 16); // ~60fps

  function update() {
    start += step;
    if (start >= target) {
      el.textContent = target;
    } else {
      el.textContent = Math.floor(start);
      requestAnimationFrame(update);
    }
  }
  update();
}
animateCounter("speciesCount", 100, 2000);
animateCounter("biodiversity", 80, 2000);

// Tooltip for nodes
document.querySelectorAll('.node').forEach(node => {
  node.addEventListener('mouseenter', () => {
    const info = node.getAttribute('data-info');
    const tooltip = document.createElement('span');
    tooltip.className = 'tooltip';
    tooltip.textContent = info;
    node.appendChild(tooltip);
  });
  node.addEventListener('mouseleave', () => {
    node.querySelector('.tooltip')?.remove();
  });
});

// Ecosystem Circle Positioning
const webCircle = document.getElementById('webCircle');
const nodes = webCircle.querySelectorAll('.node');

function positionNodes() {
  const centerX = webCircle.offsetWidth / 2;
  const centerY = webCircle.offsetHeight / 2;
  const radius = webCircle.offsetWidth / 2 - 50;

  nodes.forEach((node, i) => {
    const angle = (i / nodes.length) * (2 * Math.PI);
    const x = centerX + radius * Math.cos(angle) - node.offsetWidth / 2;
    const y = centerY + radius * Math.sin(angle) - node.offsetHeight / 2;
    node.style.left = `${x}px`;
    node.style.top = `${y}px`;
  });
}
positionNodes();
window.addEventListener('resize', positionNodes);

// Carousel Swipe (mobile + desktop)
const carouselWrapper = document.querySelector('.carousel-wrapper');
let isDown = false;
let startX;
let scrollLeft;

carouselWrapper.addEventListener('mousedown', (e) => {
  isDown = true;
  carouselWrapper.classList.add('active');
  startX = e.pageX - carouselWrapper.offsetLeft;
  scrollLeft = carouselWrapper.scrollLeft;
});
carouselWrapper.addEventListener('mouseleave', () => { isDown = false; carouselWrapper.classList.remove('active'); });
carouselWrapper.addEventListener('mouseup', () => { isDown = false; carouselWrapper.classList.remove('active'); });
carouselWrapper.addEventListener('mousemove', (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - carouselWrapper.offsetLeft;
  const walk = (x - startX) * 2; // scroll speed
  carouselWrapper.scrollLeft = scrollLeft - walk;
});

// Touch support
carouselWrapper.addEventListener('touchstart', (e) => {
  startX = e.touches[0].pageX - carouselWrapper.offsetLeft;
  scrollLeft = carouselWrapper.scrollLeft;
});
carouselWrapper.addEventListener('touchmove', (e) => {
  const x = e.touches[0].pageX - carouselWrapper.offsetLeft;
  const walk = (x - startX) * 2;
  carouselWrapper.scrollLeft = scrollLeft - walk;
});
