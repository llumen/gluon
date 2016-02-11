var x=10; // je maakt een variabele voor x
var d=6;  // je maakt een variabele voor d, dit wordt de afstand (distance) tussen twee lijnen
function setup() {
  createCanvas(600,600);
  strokeWeight(2); // dikte van de lijn
  
}

function draw() {
  background(255);
  x=width*0.5; //je start je patroon in het midden van het scherm, hier wwordt x 300
  line(x,0,x,height);
  x+=d; // je telt 5 pixels bij x: x wordt dus 300 + 5, x=305
  line(x,0,x,height);
  x=x+d;// je telt 5 pixels bij x: x wordt dus 305 + 5, x=315
  line(x,0,x,height);
  x=x+d;// je telt 5 pixels bij x: x wordt dus 310 + 5, x=315
  line(x,0,x,height);
  
}

/*
x+=d; is hetzelfde als x=x+d;
x++; betekent één bijtellen bij x en is dus hetzelfde als x=x+1; of x+=1;
x--; betekent één aftrekken van x en is dus hetzelfde als x=x-1; of x-=1;
*/