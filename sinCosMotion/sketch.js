var angle=0;
var offset=150;
var scalar=80;
var speed=0.15;
function setup() {
  createCanvas(500,500);
  fill(0);
}

function draw() {
  background(255);
  
  var y1=offset+sin(angle)*scalar;
  var y2=offset+sin(angle* 0.4)*scalar;
  var y3=offset+sin(angle* 0.8)*scalar;
  
  ellipse(50,y1,100,100);
  ellipse(150,y2,100,100);
  ellipse(250,y3,100,100);
  
  angle += speed;
}