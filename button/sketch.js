var bgColor=0;

function setup() {
  createCanvas(600,600);
}

function draw() {
  background(bgColor);
  fill(255);
  ellipse(width/2,height/2, 100,100);
  var d=dist(width/2,height/2,mouseX,mouseY);
  if(d<50 && mouseIsPressed){
    bgColor=255;
  }else{
    bgColor=0;
  }
}