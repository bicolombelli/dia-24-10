function setup() {
  createCanvas(200,200);
}

function draw(){
  background(20,0,25);
  stroke(0)
  fill('rgb(211,101,101)')
  rect(0,0,200,100)
  fill(255)
  rect(0,100,200,100)
  fill(0,0,255,100)
  ellipse(100,100,100,50)
  
  fill("green")
  stroke("white")
  triangle(0,100,50,0,100,100)
  
  stroke("green")
  triangle(0,100,50,0,100,100)
  
  line(200,0,0,200)
  console.log("mouseX+","+mouseY")
}
