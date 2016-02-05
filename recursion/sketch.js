var dotSize=9;
var angleOffsetA;
var angleOffsetB;

function setup() {
  createCanvas(windowHeight,windowWidth);
  noStroke();
  fill(0);
  frameRate(1);
  angleOffsetA=radians(1);
  angleOffsetB=radians(50);
}

function draw() {
  background(255);
  seed1(dotSize,radians(270),width/2,height);
  
}

function seed1(dotSize,angle,x,y){
  if(dotSize>1.0){
    //create random between 0 and 1
    var r=random(0,1.0);
    
    //98% chance
    if(r>=0.02){
      ellipse(x,y,dotSize,dotSize);
      var newx=x+cos(angle)*dotSize;
      var newy=y+sin(angle)*dotSize;
      seed1(dotSize*0.99,angle-angleOffsetA,newx,newy);
      
    }else{
      ellipse(x,y,dotSize,dotSize);
      var newx=x+cos(angle);
      var newy=y+sin(angle);
      seed2(dotSize*0.99,angle+angleOffsetA,newx,newy);
      seed1(dotSize*0.60,angle+angleOffsetB,newx,newy);
      seed1(dotSize*0.50,angle-angleOffsetB,newx,newy);
      
    }
  }
}

function seed2(dotSize,angle,x,y){
  if(dotSize>1.0){
    var r=random(0,1.0);
    if(r>=0.05){
      ellipse(x,y,dotSize,dotSize);
      var newx=x+cos(angle)*dotSize;
      var newy=y+sin(angle)*dotSize;
      seed2(dotSize*0.99,angle+angleOffsetA,newx,newy);
    }else{
      ellipse(x,y,dotSize,dotSize);
      var newx=x+cos(angle);
      var newy=y+sin(angle);
      seed1(dotSize*0.99,angle+angleOffsetA,newx,newy);
      seed2(dotSize*0.60,angle+angleOffsetB,newx,newy);
      seed1(dotSize*0.50,angle-angleOffsetB,newx,newy);
    }
    
}
  
}