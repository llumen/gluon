var video;
var button;
var playing;
function setup() {
  video=createVideo("elephants-dream.webm");
  button=createButton("play");
  button.mousePressed(toggle);
  playing=false;
}

function draw() {
  
}

function toggle(){
  if(playing){
    video.pause();
    button.html("play");
  }else{
    video.loop();
    button.html("pause");
  }
  playing=!playing;
}