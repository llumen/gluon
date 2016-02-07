var p5random = [];
var humanrandom = [];

function preload() {
  humanrandom = loadStrings("assets/dataset.txt");
}

function setup() {
  createCanvas(1000, 900);
  for (var i = 0; i < humanrandom.length; i++) {
    p5random[i] = round(random(0, 100));
  }
}

function draw() {
  background(0);
  noStroke();
  push()
  translate(5, 0);

  for (var i = 0; i < p5random.length; i++) {
    var rnd = p5random[i];
    var x = rnd * 10;
    fill(255, 50);
    ellipse(x, height / 2, 10, 10);
    
    rnd=humanrandom[i]; //make list with students
    x=rnd*10;
    ellipse(x, height / 2+10, 10, 10);
    

  }
  
  


  pop();
}