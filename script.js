const root = document.documentElement;

function setMotion(x, y) {
  root.style.setProperty('--mx', x.toFixed(3));
  root.style.setProperty('--my', y.toFixed(3));
}

window.addEventListener('pointermove', (event) => {
  const x = event.clientX / window.innerWidth - 0.5;
  const y = event.clientY / window.innerHeight - 0.5;
  setMotion(x * 2, y * 2);
});

window.addEventListener('deviceorientation', (event) => {
  if (event.gamma === null || event.beta === null) {
    return;
  }

  const x = Math.max(-1, Math.min(1, event.gamma / 30));
  const y = Math.max(-1, Math.min(1, (event.beta - 45) / 45));
  setMotion(x, y);
});
