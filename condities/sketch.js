function setup() {
  createCanvas(900,600);
  noStroke();
  strokeWeight(1);
  fill(255,0,0,100);
}

function draw() {
  if(mouseIsPressed == true){ //conditie, enkel wanneer de muisknop is ingedrukt teken je
    line(mouseX,mouseY,pmouseX,pmouseY); 
    ellipse(mouseX,mouseY,10,10);
  }
  
}