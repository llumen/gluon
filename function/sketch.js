function setup() {
  createCanvas(500,500);
}

function draw() {
  background(255);
  
  target(mouseX,mouseY,0.5);
}

function target(x,y,radius){
  var step
  push();
  
  translate(x,y);
  scale(radius);
  fill(255);
  ellipse(0,0,300,300);
  
  fill(0);
  ellipse(0,0,250,250);
  
  fill(255,0,0);
  ellipse(0,0,200,200);
  
  fill(0,255,0);
  ellipse(0,0,150,150);
  pop();
}