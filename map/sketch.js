function setup() {
  createCanvas(900,600);
  strokeWeight(4);
}

function draw() {
  background(102);
  var grey=map(mouseX,0,width,0,255);
  fill(grey);
  ellipse(mouseX,mouseY,30,30);
}