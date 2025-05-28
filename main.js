import anime from 'animejs';

// Create grid of dots
const dotsWrapper = document.querySelector('.dots');
const gridSize = 25;
for (let i = 0; i < gridSize; i++) {
  const dot = document.createElement('div');
  dot.classList.add('dot');
  dotsWrapper.appendChild(dot);
}

// Dots animation
anime({
  targets: '.dot',
  scale: [
    { value: .1, duration: 500, easing: 'easeOutSine' },
    { value: 1, duration: 1200, easing: 'easeInOutQuad' }
  ],
  delay: anime.stagger(200, { grid: [5, 5], from: 'center' }),
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
    translateX: 270,
    rotate: 180,
    scale: 2
  })
  .add({
    targets: '.circle',
    translateX: [{ value: 270, duration: 1000 }],
    translateY: [
      { value: -50, duration: 500 },
      { value: 50, duration: 500 }
    ],
    rotate: 360
  }, '-=1800')
  .add({
    targets: '.triangle',
    translateX: 270,
    rotate: 180,
    scale: 1.5
  }, '-=1800');

// Path animation
const pathEl = document.querySelector('.path');
const pathLength = pathEl.getTotalLength();
pathEl.setAttribute('stroke-dasharray', pathLength);

anime({
  targets: '.path',
  strokeDashoffset: [pathLength, 0],
  duration: 3000,
  loop: true,
  easing: 'easeInOutSine',
  direction: 'alternate'
});