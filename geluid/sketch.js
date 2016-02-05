// geluid laden zoals mp3 of ogg
// Dit wordt gedaan aan de hand van dp5.sound.js bibliotheek
var sound;

function preload(){
  sound=loadSound("assets/BD.ogg");
  
}

function setup() {
  createCanvas(600,900);
  sound.setVolume(0.1);
  //sound.loop();
}

function draw() {
  background(255);
}
function mousePressed(){
  sound.setVolume(map(mouseY,height,0,0,1));
  sound.play();
}