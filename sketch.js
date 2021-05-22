const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;

function setup() {
  createCanvas(480, 800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(240,800,700,20);

   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }

   for (var j = 75; j <=width; j=j+50) {
      plinkos.push(new Plinko(j,75));
   }

   for (var j = 50; j <=width-10; j=j+50) {
      plinkos.push(new Plinko(j,175));
   }

    for (var j = 75; j <=width; j=j+50) {
      plinkos.push(new Plinko(j,275));
   }

    for (var j = 50; j <=width-10; j=j+50) {
      plinkos.push(new Plinko(j,375));
   }

    
}
 
function draw() {
  rectMode(CENTER)
  background("grey");

  Engine.update(engine);
   

  for (var k = 0; k < divisions.length; k++) {
     divisions[k].display();  
  }

  if(frameCount %60 === 0){
    particles.push(new Particle(random(width/2-10, width/2+10),10,10));
  }

  for (var h = 0; h<particles.length; h++){
    particles[h].display();
  }

  for (var j = 0; j<particles.length; j++){
    particles[j].display();
  }
  
  ground.display();
}