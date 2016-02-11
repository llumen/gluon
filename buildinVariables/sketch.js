/*P5.js heeft een groot aantal ingebouwde variabelen:
-	width			  //de breedte van de schets
-	height		  //de hoogte van de schets
-	mouseX		  //de x positie van de muis
-	mouseY		  //de y positie van de muis
-	windowWidth	//de breedte van het venster
-	windowHeight//de hoogte van het venster
- PI          // het getal Pi
- TWO_PI      // 2x het getal PI

een volledige lijst vind je op: http://p5js.org/reference/
*/
function setup() {
  createCanvas(200,600);
}

function draw() {
  background(255);
  /* je gebruikt hier de breedte(wirdth) en hoogte(height) van je canvas 
  om een kruis te tekenen.
  Wanneer je het canvas vergroot of verkleint zie je dat het kruis mee beweegt.
  Om dit te bekomen hebben we de functie windowResized() nodig.
  */
  line(0,0,width,height); 
  line(width,0,0,height);
}


/*function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}*/