var isBlack = false;

function setup() {
  createCanvas(900,600);
}

function draw() {
  if(isBlack){
    background(0);
  }else{
    background(255,0,0);
  }
  if(mouseIsPressed){
    isBlack =!isBlack;
  }
}