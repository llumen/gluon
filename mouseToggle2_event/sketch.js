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

}

function mousePressed(){ //event wordt maar 1 keer uitgevoerd
  isBlack =!isBlack; 
}