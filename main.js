import anime from 'animejs';

anime({
  targets: '.square',
  rotate: 360,
  scale: [1, 2, 1],
  duration: 2000,
  loop: true,
  easing: 'easeInOutQuad'
});