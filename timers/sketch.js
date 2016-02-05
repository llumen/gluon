var timer = 100;
var bgColor=0;
var nextTime=500;

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(bgColor);
  if (millis() > nextTime) {
   bgColor+=20;
   nextTime=millis()+timer;
  }

}