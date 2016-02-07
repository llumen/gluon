var p5random = [];
var humanrandom=[];

function preload(){
  humanrandom=loadStrings("assets/dataset.txt");
}

function setup() {
  createCanvas(1000, 900);
  for (var i = 0; i < 100; i++) {
    p5random[i] = random(0, 100);
  }
}

function draw() {
  background(0);
  noStroke();
  push()
  translate(5, 0);

  for (var i = 0; i < 100; i ++) {
    
    var a = map(p5random[i], 0, 100, 0, 255);
    fill(255, a);
    ellipse(i*10, height / 2, 10, 10);

  }
  
  for (var i = 0; i < humanrandom.length; i ++) {
    
    var a = map(humanrandom[i], 0, 100, 0, 255);
    fill(255, a);
    ellipse(i*10, height / 2+20, 10, 10);

  }
  pop();
}