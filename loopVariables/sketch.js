var x=10;
var d=6;
function setup() {
  createCanvas(600,600);
  strokeWeight(2);
  
}

function draw() {
  background(255);
  x=width*0.5;
  for(var i=0;i<20;i++){
  line(x+i*d,0,x+i*d,height);
  }
}