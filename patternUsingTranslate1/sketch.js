var angle = 0.0;
var speed = 0.01;

function setup() {
  createCanvas(windowWidth, windowHeight);
  fill(0);
  strokeWeight(20);
}

function draw() {
  var l0 = map(mouseX, 0, width, 10, 100);
  var l1 = map(mouseY, 0, height, 10, 300);
  
  background(255);
  push();
  
  translate(width / 2, height / 2);
  rotate(angle);
  line(0, 0, 0, l0);
  
  translate(0, l0);
  rotate(angle);
  line(0, 0, 0, l1);
  
  translate(0, l1);
  rotate(angle);
  line(0, 0, 0, 50);
  
  pop();

  angle += speed;

}