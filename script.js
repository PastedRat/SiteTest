const root = document.documentElement;
const target = { x: 0, y: 0 };
const current = { x: 0, y: 0 };

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function setTarget(x, y) {
  target.x = clamp(x, -1, 1);
  target.y = clamp(y, -1, 1);
}

function animateMotion() {
  current.x += (target.x - current.x) * 0.08;
  current.y += (target.y - current.y) * 0.08;

  root.style.setProperty('--mx', current.x.toFixed(3));
  root.style.setProperty('--my', current.y.toFixed(3));
  root.style.setProperty('--spot-x', `${58 + current.x * 12}%`);
  root.style.setProperty('--spot-y', `${45 + current.y * 10}%`);

  requestAnimationFrame(animateMotion);
}

window.addEventListener('pointermove', (event) => {
  const x = event.clientX / window.innerWidth - 0.5;
  const y = event.clientY / window.innerHeight - 0.5;
  setTarget(x * 2, y * 2);
});

window.addEventListener('pointerleave', () => {
  setTarget(0, 0);
});

window.addEventListener('deviceorientation', (event) => {
  if (event.gamma === null || event.beta === null) {
    return;
  }

  setTarget(event.gamma / 28, (event.beta - 45) / 42);
});

animateMotion();
