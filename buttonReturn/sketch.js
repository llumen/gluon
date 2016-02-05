function setup() {
  createCanvas(600,600);
}

function draw() {
  
  fill(0);
  var x=200;
  var y=200;
  var w=300;
  var h=300;
  
  if(button(x,y,x+w,y+h)){
    background(255,0,0);
  }else{
    background(255);
  }
  
  
  rect(x,y,w,h);
  
}

function button(left,top,right,bottom){
  return(mouseX>left && mouseX<right &&mouseY>top && mouseY<bottom);
}