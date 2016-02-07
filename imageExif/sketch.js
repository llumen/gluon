var img;
var data;
function setup() {
  createCanvas(500,500);
  img=loadImage("assets/DSC_5971.JPG");
}

function draw() {
  background(255);
  image(img,0,0,500,400);
  data= EXIF.getData(img);
  text(data,0,400);
  
}