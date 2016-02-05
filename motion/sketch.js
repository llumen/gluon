var x = 0;
var y = 0;

function setup() {
  createCanvas(900, 600);
}

function draw() {
  background(255);
  //line(x, 0, x, height);
  ellipse(x, y, 40, 40);
  x += 5; //snelheid speed
  // om beweging vloeiender te maken
  var easing = 0.1;
  var diffX = mouseX - x;
  var diffY = mouseY - y;
  x += diffX * easing;
  y += diffY * easing;
}