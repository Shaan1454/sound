song="";
function preload(){
    song=loadSound("music.mp3")
}
function setup(){
    canvas=createCanvas(600, 475);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
}
function draw(){
    image(video, 0, 0, 600, 475);
}
function play(){
    song.play();
}