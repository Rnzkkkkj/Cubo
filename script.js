const cube = document.querySelector('.cube');
let startX, startY, rotationX = -30, rotationY = -45;
let isDragging = false;

document.addEventListener('mousedown', (e) => {
  isDragging = true;
  startX = e.clientX;
  startY = e.clientY;
});

document.addEventListener('mousemove', (e) => {
  if (!isDragging) return;
  const deltaX = e.clientX - startX;
  const deltaY = e.clientY - startY;
  rotationY += deltaX * 0.5;
  rotationX -= deltaY * 0.5;
  cube.style.transform = `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;
  startX = e.clientX;
  startY = e.clientY;
});

document.addEventListener('mouseup', () => {
  isDragging = false;
});

document.addEventListener('mouseleave', () => {
  isDragging = false;
});
