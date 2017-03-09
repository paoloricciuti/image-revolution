var ledline;
var img;

function preload(){
  img=loadImage("images/train.bmp");
}

function setup() {
  createCanvas(400, 400);
  ledline=new Led(width/2, height/2, 0, width/2, 30, img);
}

function draw() {
    background(51);
    ledline.show();
}
