function setup() {
  createCanvas(500,500);
  fly=new Bug(width/2,height/2);
}

function draw() {
  background(255);
  ellipse(fly.x,fly.y,50,50);
}

//making a constructor for objects Capitalize
function Bug(startX,startY){
  this.x=startX; //this means that the properties and methods will be local to this object
  this.y=startY;
}