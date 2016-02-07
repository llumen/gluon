var cities

function preload(){
  cities=loadTable("assets/Worldcities.csv","header");
}
  

function setup() {
  createCanvas(960,480);
  fill(255,150);
  noStroke();
  //scale(2.5);
  
}

function draw() {
  background(0);
  for(var i=0;i<cities.getRowCount();i++){
    var lattitude=cities.getNum(i,"lat");
    var longitude=cities.getNum(i,"lng");
    setXY(lattitude,longitude);
  }
  
}

function setXY(lat, lng){
  var x=map(lng,-180,180,0,width);
  var y=map(lat,90,-90,0,height);
  //ellipse(x,y,0.25,0.25);
  ellipse(x,y,1,1);
}