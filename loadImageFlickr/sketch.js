//laden van PNG, JPG, SVG en GIF

var images = [];
var loaded = false;

function preload(){ // doordat javascript asynchroon is moet je zeker zijn dat je beelden eerst geladen worden.

  queryFlickr(function(imgs){
    console.log('>>> got photos ! :', JSON.stringify(imgs, null, '\t'));

    imgs.forEach(function(img, i){
      images.push(loadImage(img.url));
    });
    loaded = true;
    console.log('loaded!');
  });
  // img= loadImage("assets/Cair.jpg");
}

function setup() {
  createCanvas(600,400);
}

function draw() {
  background(255);
  if(loaded){
    console.log('GOING');
    // for(var i=0; i<images.length; i++){
    //   console.log(images[i].width);
    // }
    images.forEach(function(img, i){
      console.log(img.width);
      image(img, img.width*i, img.height*i, img.width, img.height);
    });
  }
}