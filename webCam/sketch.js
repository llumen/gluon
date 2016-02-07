var capture;
var mic;

function setup() {
  capture = createCapture();
  capture.hide();
  capture.volume(0);
  noStroke();
  fill(0);


  createCanvas(640, 480);
  
  mic=new p5.AudioIn();
  mic.start();

}

function draw() {
  background(0);
  capture.loadPixels();
  
  var stepSize = round(map(mic.getLevel(),0,0.5,5,50));
  for (var y = 0; y < capture.height; y += stepSize) {
    for (var x = 0; x < capture.width; x += stepSize) {
      var i = y * capture.width + x;
      var darkness = (255 - capture.pixels[i * 4]) / 255;
      var radius = stepSize * darkness;
      ellipse(x, y, radius, radius);
    }
  }

}