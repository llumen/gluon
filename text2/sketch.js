//load Webfonts from https://www.google.com/fonts
/*kopieer hiervoor de link van de site, bijv. <link href='https://fonts.googleapis.com/css?family=Tangerine' rel='stylesheet' type='text/css'>
Je moet de link dan toevoegen in de html file die bij je project hoort. Hiervoor open je de sidebar door rechts bovenaan op het tandwieltje te klikken*/
function setup() {
  createCanvas(600,400);
  textFont("Tangerine");
  textSize(20)
  
}

function draw() {
  background(255);
  text("Hello World, Welcome to The Gluon Winter Lab",mouseX+10,mouseY+10,200,100); //textbox

  
}