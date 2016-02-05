// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

// Example 1-1: stroke and fill

function setup() {
  createCanvas(600, 400);
  stroke(255,0,0); 
  fill(150);
  strokeWeight(5);
}

function draw() {
  background(100);
  fill(0,255,0);
  rect(50,50,75,100);
  fill(0,0,255);
  ellipse(50,50,75,75);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}