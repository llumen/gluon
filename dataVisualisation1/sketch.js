//using arrays to hold multiple datapoints
//gebruik van array om verschillende datapunten in op te slaan

var numbers = [
  46,
  450,
  700
];

var clickPoints=[];
var mouseXpositions=[];
var current=0;
var total=10;

function setup() {
createCanvas(900,600);
}

function draw() {
  background(0);
  stroke(255);
  
  for(var i=0;i<mouseXpositions.length;i++){
    line(mouseXpositions[i],0,mouseXpositions[i],height);
  }
  stroke(255,0,0);
  line(mouseX,0,mouseX,height);

  mouseXpositions[current]=mouseX;
  current++;
  if(current>total){
    current=0;
  }

}