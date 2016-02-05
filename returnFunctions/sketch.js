var cointoss=false;

function setup() {
  createCanvas(500, 500);
  noStroke();
}

function draw() {
 background(255);
 if(cointoss){
   fill(255,0,0);
 }else{
   fill(0);
 }
 
 ellipse(width/2,height/2, 50,50);
 
}

function coin(){
  return (random(0,100)<50); //retuns a boolean
}

function mousePressed(){
  cointoss=coin();
}