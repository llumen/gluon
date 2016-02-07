var fly;
var fly2;

function setup() {
  createCanvas(500,500);
  fly=new Bug(width/2,height/2,50,50);
  fly2=new Bug(100,100,50,50);
  fly.setDiameter(random(10,100));
  fly2.setDiameter(random(10,100));
}

function draw() {
  //background(255);
  fly.update();
  fly.draw();
  fly2.update();
  fly2.draw();
}

//making a constructor for objects Capitalize
function Bug(startX,startY,sizeX,sizeY){
  //adding properties
  this.x=startX; //'this' means that the properties and methods will be local to this object
  this.y=startY;
  this.w=sizeY;
  this.h=sizeY;
  this.speed=random(2,10);
  //adding methods
  
  this.draw=function(){
    fill(0);
    ellipse(this.x,this.y,this.w,this.h);
  }
  
  this.update=function(){
    this.x+=random(-this.speed,this.speed);
    this.y+=random(-this.speed,this.speed);
  }
  this.setDiameter=function(d){
    this.w=d;
    this.h=d;
  }
  
}