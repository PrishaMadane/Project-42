
var hr, mn, sc;
var hrAngle, mnAngle, scAngle;

function setup() {
  createCanvas(400,400);
  angleMode(DEGREES);
}

function draw() {
  background(0);  

  hr= hour();
  mn= minute();
  sc= second();

   translate(200,200);
   rotate(-90);

   scAngle= map(sc,0,60,0,360);
   mnAngle= map(mn,0,60,0,360);
   hrAngle= map(hr % 12,0,12,0,360);

   push();
   rotate(scAngle);
   stroke(255,0,0);
   strokeWeight(7);
   line(0,0,100,0);
   pop();

   push();
   rotate(mnAngle);
   stroke("blue");
   strokeWeight(7);
   line(0,0,100,0);
   pop();
   
   push();
   rotate(hrAngle);
   stroke("green");
   strokeWeight(7);
   line(0,0,100,0);
   pop();

   noFill();
   stroke("red");
   strokeWeight(7);
   arc(0,0,300,300,0,scAngle);

   noFill();
   stroke("blue");
   strokeWeight(7);
   arc(0,0,280,280,0,mnAngle);

   noFill();
   stroke("green");
   strokeWeight(7);
   arc(0,0,260,260,0,hrAngle);
   
  drawSprites();
}