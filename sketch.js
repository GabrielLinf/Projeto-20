const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var body1, body2, ground;

function setup() {
	var options = {isStatic: true};
    var options1 = {restitution: 0.1, frictionAir: 0.3};
	var options2 = {restitution: 0.5, frictionAir: 0.9};

	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos Aqui.
    body1 = Bodies.rectangle(100, 150, 40, 40, options1);
	body2 = Bodies.rectangle(550, 150, 60, 40, options2);
	ground = Bodies.rectangle(400, 690, 800, 20, options);

    World.add(world, body1);
	World.add(world, body2);
	World.add(world, ground);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  Engine.update(engine);
  
  rect(ground.position.x, ground.position.y, 800, 20);
  rect(body1.position.x, body1.position.y, 40, 40);
  rect(body2.position.x, body2.position.y, 60, 40);
}



