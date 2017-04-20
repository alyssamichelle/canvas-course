const canvas = document.querySelector('#canvas');
const context = canvas.getContext('2d');
const coords = document.querySelector('.display-coords');

context.fillStyle = 'pink';
context.fillRect(0, 0, canvas.width, canvas.height);

const getCoords = (event) => {
  const container = canvas.getBoundingClientRect();
  const x = (event.clientX - container.left) - container.width/2;
  const y = (event.clientY - container.top) - container.height/2;

  coords.textContent = `${x}, ${y}`;
};

canvas.addEventListener('click', getCoords);
