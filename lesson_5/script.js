const context = document.querySelector('#canvas').getContext('2d');
context.beginPath();

// // context.arc(centerX, centerY, radius, startAngle, endAngle, isAntiClockwise);

context.arc(120, 20, 10, 0, Math.PI*2);
context.fillStyle = "rebeccaPurple";
context.fill();
context.closePath();

context.beginPath();
context.arc(20, 120, 10, 0, Math.PI*2);
context.lineWidth = 10;
context.strokeStyle = "pink";
context.stroke();
context.closePath();
