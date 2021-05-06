var hr
var min
var sec

function setup() {
  createCanvas(800,400);
 
  angleMode (DEGREES)
}

function draw() {
  background("black");
  translate(200,200)  
  hr = hour()
  min = minute()
  sec = second()

  secAngle=map(sec,0,60,0,360)
  minAngle=map(min,0,60,0,360)
  hrAngle=map(hr%12,0,12,0,360)

  push()
rotate(secAngle)
  stroke("yellow")
  strokeWeight(7)
line(0,0,100,10)
pop()
push()
rotate(minAngle)
  stroke("red")
  strokeWeight(7)
line(0,0,75,10)
pop()
push()
rotate(hrAngle)
  stroke("green")
  strokeWeight(7)
line(0,0,50,10)
pop()

noFill()
stroke("yellow")
strokeWeight(10)
arc(0,0,300,300,0,secAngle)

noFill()
stroke("red")
arc(0,0,280,280,0,minAngle)

noFill()
stroke("green")
arc(0,0,240,240,0,hrAngle)
  drawSprites();
}