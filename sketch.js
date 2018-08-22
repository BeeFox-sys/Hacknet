var hearts = [];
var loadTime;

function setup() {
  createCanvas(windowWidth,windowHeight,WEBGL)
  background(0)
  loadTime = 4;
}

function draw() {
  background(0)
  translate(0,height/-50)
  rotateX(-0.65)
  rotateY(0.785)
  if(millis() < loadTime*1000){
    if(frameCount % 2 == 0 && hearts.length < 40){
      hearts.push(new HeartPeice(50+(hearts.length*10),100+(hearts.length*10),50 +(hearts.length*10),0.01))
    }
  }

  if(millis() > loadTime*1000){
  hearts.forEach(function(heart, index) {
    if(millis() >= (index*250)+2000+(loadTime*1000) && !heart.rotate){
      heart.rotate = true
    }
    if(millis() >= (-(index-hearts.length-1)*6000)+(hearts.length/5)*1000+loadTime*1000 && !heart.dead){
      heart.kill()
    }
  })
}
hearts.forEach(function(heart) {
  heart.draw()
})

}

function windowResized() {
  resizeCanvas(windowWidth,windowHeight)
}
