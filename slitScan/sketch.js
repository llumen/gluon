var s = 250;
var center;
var drawPositionX = 0;

var img;

function preload() {
  img = loadImage("assets/picture2.jpg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  img.loadPixels();
  background(0);
  stroke(255, 0, 0);
  center = width / 2;

}

function draw() {
  background(0);
  var mx = constrain(mouseX, center - s / 2, center + s / 2);
  var x = map(mx, center - s / 2, center + s / 2, s, 0);
  x = floor(x); //integer

  for (var y = 0; y < height; y++) {
    var c = img.get(x, y);
    set(drawPositionX, y, c);
  }
  updatePixels();

  //connect
  line(drawPositionX, s, width / 2, height / 2);

  //show thumbnail
  image(img, mx, height - s / 2);
  line(width / 2, height - s, width / 2, height);

  drawPositionX++;
  if (drawPositionX >= width) {
    drawPositionX = 0;
  }
}

