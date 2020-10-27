
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



var ground

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color("yellow")
	//Create the Bodies Here.
	//ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	dustBin = new DustBin(400,660,200,30)
	ball = new Ball()
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  dustBin.display()
  background(0);
  
  drawSprites();
 
}



