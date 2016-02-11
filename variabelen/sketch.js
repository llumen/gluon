/* je gebruikt het woordje 'var' om aan te geven dat je een variabele gaat maken
vervolgens geef je de variabele een naam en wijs je hem een waarde toe met '=' */
var x=100; 
var y=100;

function setup() {
  createCanvas(500,400);
  var bgcolor=255; //locale variabele bgcolor enkel zichtbaar in setup
  
}

function draw() {
  var bgcolor=255; //locale variabele bgcolor enkel zichtbaar in draw
  background(255);
  ellipse(x,y,20,20); //je kan de variable vervolgens gebruiken in je code
}

/*LET OP!
---Variabelen die je helemaal bovenaan de schets plaatst noemen we globale variabelen,
---ze blijven zichtbaar, en dus bruikbaar, voor alle functies zolang het programma loopt.
---variabelen die je aanmaakt in een functie zijn enkel bruikbaar binnen de functie 
---en slechts zolang de functie loopt. Eens de functie is afgerond wordt de variabele vernietigd.
*/