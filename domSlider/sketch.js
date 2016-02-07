var rslider;
var gslider;
var bslider;

function setup() {
  createCanvas(640,480);
  
  rslider=createSlider(0,255,100);
  gslider=createSlider(0,255,100);
  bslider=createSlider(0,255,100);
}

function draw() {
  var r=rslider.value();
  var g=gslider.value();
  var b=bslider.value();
  background(r,g,b);
  
}