class HeartPeice {
  constructor(w,h,l,s) {
    this.width = w;
    this.height = h;
    this.length = l;
    this.speed = s;
    this.rotation = 0;
    this.rotate = false;
    this.colour = [255,255,255,255];
    this.dead = false;
  }

  draw(){
    noFill()
    strokeWeight(1.5)
    stroke(this.colour)
    rotateY(this.rotation)
    box(this.width,this.height,this.length)
    rotateY(-this.rotation)
    if(this.rotate){this.rotation += this.speed}
    if(this.dead){this.colour[3]-=3}
  }

  kill(){
    this.dead = true
    this.colour = [255,0,0,255]
  }


}
