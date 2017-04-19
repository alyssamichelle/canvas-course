const context = document.querySelector('#canvas').getContext('2d');
context.beginPath();

// // context.arc(centerX, centerY, radius, startAngle, endAngle, isAntiClockwise);

context.arc(50, 50 , 20, 0, Math.PI/0.5);
context.fill();
context.closePath();

// 1 radian = 57.2957795 degrees
// var radians = (Math.PI/180) * degrees;
