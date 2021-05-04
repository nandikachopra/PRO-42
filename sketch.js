
function setup() {
  createCanvas(800,800);
  angleMode(DEGREES);
  
}

function draw() {
  background(0);  
  translate(200,200);
  rotate(-90);
  
  hr = hour();
  mn = minute();
  sc = second();

  scAngle = map(sc,0,60,0,360);
  mnAngle = map(mn,0,60,0,360);
  hrAngle = map(hr%12,0,12,0,360);

  push();
  rotate(scAngle);
  stroke("blue");
  strokeWeight(7);
  line(0,0,150,0);
  pop();
 
  push();
  rotate(mnAngle);
  stroke("red");
  strokeWeight(7);
  line(0,0,100,0);
  pop();

  push();
  rotate(hrAngle);
  stroke("yellow");
  strokeWeight(7);
  line(0,0,75,0);
  pop();
  
  //arc(x, y, w, h, start, stop);
  strokeWeight(7);
  stroke("blue");
  noFill();
  arc(0,0,300,300,0,scAngle);

  strokeWeight(7);
  stroke("red");
  noFill();
  arc(0,0,280,280,0,mnAngle);

  strokeWeight(7);
  stroke("yellow");
  noFill();
  arc(0,0,260,260,0,hrAngle);
  
}