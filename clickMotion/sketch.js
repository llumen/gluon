var x = 100;
var y = 100;
var targetX= 0;
var targetY= 0;

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
  var diffX = targetX - x;
  var diffY = targetY - y;
  x += diffX * easing;
  y += diffY * easing;
}

function mousePressed(){
  targetX=mouseX;
  targetY=mouseY;
}
  