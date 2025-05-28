import anime from 'animejs';

// Create grid
const grid = document.querySelector('.staggering-grid');
const gridSize = 196; // 14x14 grid
for (let i = 0; i < gridSize; i++) {
  const gridItem = document.createElement('div');
  gridItem.classList.add('grid-item');
  const el = document.createElement('div');
  el.classList.add('el');
  gridItem.appendChild(el);
  grid.appendChild(gridItem);
}

// Grid animation
anime({
  targets: '.el',
  scale: [
    { value: .1, easing: 'easeOutSine', duration: 500 },
    { value: 1, easing: 'easeInOutQuad', duration: 1200 }
  ],
  delay: anime.stagger(200, { grid: [14, 14], from: 'center' }),
  loop: true
});

// Shapes animation
const shapesTimeline = anime.timeline({
  duration: 2000,
  loop: true,
  direction: 'alternate',
  easing: 'easeInOutExpo'
});

shapesTimeline
  .add({
    targets: '.square',
    translateX: 100,
    rotate: 180,
    scale: 1.5,
  })
  .add({
    targets: '.circle',
    translateX: [{ value: -100 }],
    translateY: [
      { value: -50, duration: 500 },
      { value: 50, duration: 500 }
    ],
    rotate: 360
  }, '-=2000')
  .add({
    targets: '.triangle',
    translateY: -100,
    rotate: 180,
    scale: 1.5
  }, '-=2000');

// Path animation
const path = document.querySelector('.infinity-path');
const pathLength = path.getTotalLength();
path.setAttribute('stroke-dasharray', pathLength);

anime({
  targets: '.infinity-path',
  strokeDashoffset: [pathLength, 0],
  duration: 3000,
  loop: true,
  direction: 'alternate',
  easing: 'easeInOutSine'
});

// Text animation
const text = document.querySelector('.letters');
text.innerHTML = text.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime({
  targets: '.letter',
  opacity: [0, 1],
  translateY: [-50, 0],
  rotate: [-40, 0],
  duration: 4000,
  delay: anime.stagger(100),
  loop: true,
  direction: 'alternate',
  easing: 'easeOutElastic(1, .6)'
});