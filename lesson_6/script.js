const context = document.querySelector('#canvas').getContext('2d');

context.beginPath();
// context.arcTo(x1,y1,x2,y2,r);
context.moveTo(100, 70); // move to this spot
context.lineTo(100, 20); // draw a vertical line
context.arcTo(150, 20, 150, 70, 50);
context.lineTo(100, 70); // draw a horizontal line

context.fill();
context.closePath();

// var i = 0;
// function loopIt() {
//   if(i++ < Math.PI*2) {
//     drawPurpleCircle(i);
//   } else {
//     i = 0;
//     context.clearRect(0, 0, 500, 500);
//     setTimeout(loopIt, 400);
//   }
// };
// loopIt();
//
//
// function drawPurpleCircle(i) {
//   context.beginPath();
//   context.arc(100, 70, 50, 0, i);
//   context.fillStyle = "rebeccaPurple";
//   context.fill();
//   context.closePath();
//   setTimeout(loopIt, 400);
// };
