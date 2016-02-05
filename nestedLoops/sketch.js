
function setup() {
  createCanvas(600,600);
  strokeWeight(1);
  noFill();
}

function draw() {
  background(255);
  for(var i=50;i<width;i+=50){
    for(var j=0;j<height;j+=50){
    ellipse(i,j,20,20);
    }
  }
}