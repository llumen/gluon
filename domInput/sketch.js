var input;

function setup() {
  createCanvas(windowWidth,windowHeight);
  input=createInput();
  input.position(20,65);
  
  var button=createButton("submit");
  button.position(160,65);
  button.mousePressed(greet);
  
  var greeting=createP("what is your name?");
  greeting.position(20,10);
  
  textAlign(CENTER);
  textSize(80);
  fill(255);
  stroke(0);
  strokeWeight(4);
  
  colorMode(HSB);
}



function greet(){
  var name=input.value();
  for(var i=0;i<800;i++){
    push();
    translate(random(width),random(height));
    rotate(random(TWO_PI));
    fill(0,0,255);
    //fill(0,255,random(0,255));
    text(name,0,0);
    pop();
  }
  input.value("");
}