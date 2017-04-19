var canvas = document.querySelector('#canvas');
canvas.width = canvas.height = 500;

var context = canvas.getContext('2d');
context.fillRect(0, 0, 50, 50);

// Lesson 3
// # Specifying height and width of your base canvas element
// Let's take a look at some bugs you can run across, by not specifying height and width of your HTML Canvas element. We will look at giving the canvas height/width inline and in the JS.
// Show skewed square and skewed circle


// Now what happens when we try to make our rectangle any other size, other than the canvas width and height?
// context.fillRect(0, 0, canvas.width, canvas.height);
// context.fillRect(0, 0, 50, 50);

// We end up with something that is NOT 50x50, but rather rectangle shaped. What is going on here?

// This is happening bc we have not given our canvas a set width and height. (Specifying in CSS does not count for this issue). If we simply specify the width and height inline, like so:

//     <canvas id="canvas" width="500" height="500"></canvas>

// remember, no units are given here to the canvas element, then we refresh and see now that our rectangle is obeying the width and height we provided in the `fillRect()` method.

// If we wanted, we could also do this in the JS, instead of inline:
// canvas.width = canvas.height = 500;

// I prefer to set it inline in my html and forget about it, but either will work!
