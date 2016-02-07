var button;
var canvas;


var x=0; 
var y=0;
function setup() {
  canvas=createCanvas(640,480);
  canvas.position(0,0);
  button=createButton("change");
  button.position(20,20);
  button.mousePressed(change);
  colorMode(HSB);
  noLoop();
}

function draw() {
  background(200);
  change();
}

function change(){
  background(random(255),255,255);
  fill(random(255),255,255);
  ellipse(width/2,height/2,100,100);
  x+=random(-3,10);
  y+=random(-3,10);
  canvas.position(x,y);
}