//storytelling using Type interaction

var intro;
var drink;
var large;
var end;

/*
0=intro
1=drink
2=large
3=end
*/

var state = 0;
var nextState = 0;
var counter = 0;
var typed = ""; // variable for storing text
var hasCried = false;

function preload() {
  intro = loadImage("assets/0_intro.jpg");
  drink = loadImage("assets/1_drinkB.jpg");
  large = loadImage("assets/5_large.jpg");
  end = loadImage("assets/7_swimming.jpg");
}

function setup() {
  createCanvas(600, 500);
  textFont("Helvetica");
  textSize(22);
  textAlign(CENTER);


}

function draw() {
  background(255);

  if (state == nextState) {
    if (state == 0) {
      image(intro, 10, 10);
    } else if (state == 1) {
      image(drink, 10, 10);
    } else if (state == 2) {
      image(large, 10, 10);
    } else if (state == 3) {
      image(end, 10, 10);
    }
  }else{
    counter++;
    if(counter==30){
      state=nextState;
      counter=0;
    }
    var a =map(counter,0,30,0,255);
    tint(255,a);
    if (nextState == 0) {
      image(intro, 10, 10);
    } else if (nextState == 1) {
      image(drink, 10, 10);
    } else if (nextState == 2) {
      image(large, 10, 10);
    } else if (nextState == 3) {
      image(end, 10, 10);
    }
    tint(255,255-a);
    if (state == 0) {
      image(intro, 10, 10);
    } else if (state == 1) {
      image(drink, 10, 10);
    } else if (state == 2) {
      image(large, 10, 10);
    } else if (state == 3) {
      image(end, 10, 10);
    }
  }


  text(typed, 0, 450, width, 30);
}

function keyPressed() {
  if (keyCode == BACKSPACE) {
    typed = '';
  }
}

function keyTyped() {
  if (key == '0') {
    nextState = 0;
  } else if (key == '1') {
    nextState = 1;
  } else if (key == '2') {
    nextState = 2;
  } else if (key == '3') {
    nextState = 3;
  } else if (keyCode == RETURN) {
    if (typed == 'drink') {

      typed = '';
      if (hasCried) {
        nextState = 3;
      } else {
        nextState = 1;
      }
    } else if (typed == 'eat') {
      nextState = 2;
      typed = '';
    } else if (typed == 'intro') {
      nextState = 0;
      typed = '';
    } else if (typed == 'cry' && state == 2) {
      hasCried = true;
      typed = '';
    }
  } else {
    typed += key; //append character to the variable
  }
}