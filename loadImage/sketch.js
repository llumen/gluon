//laden van PNG, JPG, SVG en GIF
function preload(){ // doordat javascript asynchroon is moet je zeker zijn dat je beelden eerst geladen worden.
  img= loadImage("assets/Cair.jpg");
}

function setup() {
  createCanvas(600,400);
}

function draw() {
  background(255);
  var aspect=img.height/img.width;
  var imageWidth=mouseX;
  var imageHeight=imageWidth*aspect;
  image(img,0,0,imageWidth,imageHeight);
  
}