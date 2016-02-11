
function setup() {
  createCanvas(600,600);
  strokeWeight(2);
  
}

function draw() {
  background(255);
  for(var i=0;
      i<width;
      i+=5){
    stroke(0,i/width*255,0); //we zetten de kleur van onze lijn op een grijswaarde tussen 0 en 255
    line(i,0,i,height); //we tekenen een lijn over de hele hoogte van ons canvas
  }
}

/*
een for loop maakt het makkelijk om je code efficiënt en compact te houden
je maakt een for loop ALTIJD op dezelfde manier en bevat steeds 3 verschillende fasen:
- initialisatie:  var i=0; // je maakt hier een variabel i aan en wijst de waarde 0 toe
- conditie:       i<width; // zolang i kleiner is dan de breedte (width) wordt de loop uitgevoerd
- opvolgactie:    nadat de body van de functie, dat wat tussen {} staat is uitgevoerd
                  wordt deze actie uitgevoerd, i++ //we tellen dus 1 op bij i
*/