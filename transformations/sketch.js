// stepping away from a fixed coordinate system
var angle= 0;
function setup() {
  createCanvas(500,500);
  fill(0);
}

function draw() {
  background(255);
  push();
  translate(mouseX,mouseY);
  rotate(radians(angle));
  line(-50,-50,50,50);
  line(50,-50,-50,+50);
  pop();
  angle++;
}