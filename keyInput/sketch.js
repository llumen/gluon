var circleX=450;
var circleY=300;

function setup() {
  createCanvas(900,600);
}

function draw() {
  background(255);
  ellipse(circleX,circleY,100,100);
  if(keyIsPressed){
    if(keyCode== UP_ARROW){
      circleY -= 5;
    }else if(keyCode==DOWN_ARROW){
      circleY += 5;
    }else if(keyCode==LEFT_ARROW){
      circleX -= 5;
    }else if(keyCode==RIGHT_ARROW){
      circleX += 5;
    }
  }
}