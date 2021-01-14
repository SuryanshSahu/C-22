const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine , world;
var ball;
var ground;




function setup() {
  createCanvas(1200,800);
  engine = Engine.create();
  world = engine.world;

  var ball_options ={ restitution: 1.0 }
  ball=Bodies.circle(200,100,20,ball_options);

  World.add(world,ball);
  
  var ground_options={ isStatic : true}
  ground=Bodies.rectangle(200,390,200,20,ground_options);
}

function draw() {
  background(255,255,255);  
  
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);

  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y, 20, 20);

}