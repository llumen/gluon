var video;

function setup() {
  video=createVideo("elephants-dream.webm");
  video.loop();
  video.hide();
  
  createCanvas(640,480);

}

function draw() {
  background(200);
  image(video, 30,30);
  filter('INVERT');
  image(video, 80,80);
  
}

