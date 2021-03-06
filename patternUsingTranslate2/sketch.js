var angle = 0.0;
var speed = 0.01;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noFill();
  strokeWeight(1);
}

function draw() {
  var l0 = map(mouseX, 0, width, 10, 300);
  var l1 = map(mouseY, 0, height, 10, 300);


  background(255);

  push();

  translate(width / 2, height / 2);
  rotate(angle);

  for (var i = 0; i < 5; i++) {
    push();
    rotate(i * TWO_PI / 5);
    translate(0, l0);
    ellipse(0, 0, 20, 20);

    rotate(angle);
    for (var j = 0; j < 5; j++) {
      push();
      rotate(j * TWO_PI / 5);
      translate(0, l1);
      ellipse(0, 0, 20, 20);
      rotate(angle);
      for (var k = 0; k < 5; k++) {
        push();
        rotate(k * TWO_PI / 5);
        translate(0, 50);
        ellipse(0, 0, 20, 20);
        pop();
      }
      pop();
    }


    pop();
  }

  pop();

  angle += speed;

}