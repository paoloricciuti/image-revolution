function Led(x, y, a, r, num, img){
  this.x=x;
  this.y=y;
  this.prevX=x;
  this.prevY=y;
  this.a=a;
  this.r=r;
  this.numLed=num;
  this.img=img;
}

Led.prototype.show = function () {
  stroke(255);
  strokeWeight(10);
  //fill(255);
  var x2=cos(this.a*PI/180)*this.r/this.numLed;
  var y2=sin(this.a*PI/180)*this.r/this.numLed;
  this.prevX=this.x;
  this.prevY=this.y;
  for(var i=0; i<this.numLed; i++){
    this.img.loadPixels();
    var index=this.img.width*this.prevY+this.prevX;
    stroke(this.img.get(this.prevX, this.prevY));
    line(this.prevX, this.prevY,this.prevX+x2,this.prevY-y2);
    this.prevX=this.prevX+x2;
    this.prevY=this.prevY-y2;
  }
  this.a+=1;
};
