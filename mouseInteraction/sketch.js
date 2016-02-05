function setup() {
  createCanvas(900,600);
  strokeWeight(4);
  stroke(255,0,0);
}

function draw() {
  line(mouseX,mouseY,pmouseX,pmouseY);
  //ellipse(mouseX,mouseY,10,10);
  
}