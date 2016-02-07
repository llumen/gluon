var scaler = 200;
var n = 2; 
var n1 = 18;
var n2 = 1;
var n3 = 1;
var rot=0;

function setup() {
  createCanvas(1200, 600);
  noFill();
  stroke(255, 128);

}

function draw() {
  background(0);
  push();
  translate(width / 2, height / 2);
  rotate(radians(rot));
  drawShape(0,0);
  pop()
  rot+=0.5;
  
}

function drawShape(x, y) {
  push();
  translate(x, y);
  var newscaler = scaler;
  for (var s = 16; s > 0; s--) {
    beginShape();
    var nn = n + s;
    var nn1 = n1 + s;
    var nn2 = n2 + s;
    var nn3 = n3 + s;
    newscaler = newscaler * 0.98;
    var sscaler = newscaler;

    var points = superformula(nn, nn1, nn2, nn3);
    curveVertex(points[points.length - 1].x * sscaler, points[points.length - 1].y * sscaler);
    for (var i = 0; i < points.length; i++) {
      curveVertex(points[i].x * sscaler, points[i].y * sscaler);
    }
    curveVertex(points[0].x * sscaler, points[0].y * sscaler);
    endShape();
  }
  pop();
}

function superformula(n, n1, n2, n3) {
  var numPoints = 360;
  var phi = TWO_PI / numPoints;
  var points = [] // create an array
  for (var i = 0; i < numPoints; i++) {
    points[i] = superformulaPoint(n, n1, n2, n3, phi * i);
  }
  return points;
}

function superformulaPoint(n, n1, n2, n3, phi) {
  var r;
  var t1, t2;
  var a = 1,
    b = 1;
  var x = 0;
  var y = 0;

  t1 = cos(n * phi / 4) / a;
  t1 = abs(t1);
  t1 = pow(t1, n2);

  t2 = sin(n * phi / 4) / b;
  t2 = abs(t2);
  t2 = pow(t2, n3);
  
  r=pow(t1+t2,1/n1);
  if(abs(r)==0){
    x=0;
    y=0;
  }else{
    r=1/r;
    x=r*cos(phi);
    y=r*sin(phi);
  }
  return new p5.Vector(x,y);

}