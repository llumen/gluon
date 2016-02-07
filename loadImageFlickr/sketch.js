//laden van PNG, JPG, SVG en GIF

var imagesData = [];
var images = [];
var loaded = false;

function preload(){ // doordat javascript asynchroon is moet je zeker zijn dat je beelden eerst geladen worden.

  queryFlickr(function(imgs){
    console.log('>>> got photos ! :', JSON.stringify(imgs, null, '\t'));

    imgs.forEach(function(img, i){
    /*img: {
      "id": "24764365331",
		  "url": "https://farm2.staticflickr.com/1481/24764365331_351e00dfdb_m.jpg",
		  "date": "2016:02:06 14:43:05",
		  "lat": "50 deg 51' 0.34\" N",
		  "lon": "4 deg 20' 59.51\" E"
    }*/
      imagesData.push(img);
      images.push(loadImage(img.url));
    });
    loaded = true;
    console.log('loaded!');
  });
}

function setup() {
  createCanvas(1000,800);
}

function draw() {
  background(255);
  
  //only after loaded has completed, draw stuff
  if(loaded){
    images.forEach(function(img, i){
      
      // draw this img
      fill(255);
      image(img, img.width*i, 0, img.width, img.height);
      
      // draw img data
      fill(0);
      text("id: "+imagesData[i].id, img.width*i, img.height+15 );
      text("date: "+imagesData[i].date, img.width*i+5, img.height+30 );
      if(imagesData[i].lat){ //did we find lat/lon ?
        text("lat: "+imagesData[i].lat, img.width*i+5, img.height+45 );
        text("lon: "+imagesData[i].lon, img.width*i+5, img.height+60 );
      }
    });
  }
}