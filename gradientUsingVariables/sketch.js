
function setup() {
  createCanvas(600,600);
  strokeWeight(2);
  
}

function draw() {
  background(255);
  for(var i=0;i<width;i++){
    stroke(i/width*255); //map color range
    line(i,0,i,height);
  }
}