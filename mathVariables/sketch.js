var x=10;
var d=6;
function setup() {
  createCanvas(600,600);
  strokeWeight(2);
  
}

function draw() {
  background(255);
  x=width*0.5;
  line(x,0,x,height);
  x+=d; //zelfde als x=x+d
  line(x,0,x,height);
  x=x+d;
  line(x,0,x,height);
  x=x+d;
  line(x,0,x,height);
  
}