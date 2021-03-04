
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;
var paper1;

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
	paper1 = new paper(300,600,70,70)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 
  if(paper1.body.position.x > 1600){
	paper1.body.position.x = 300
	paper1.body.position.y = 600
	paper1.body.position.velocityX = 0;
	paper1.body.position.velocityY = 0;
  }
  groundObject.display();
  paper1.display();
  dustbinObj.display();
}


function keyPressed(){
	if(keyCode === UP_ARROW){
		paper1.body.position.x = paper1.body.position.x + 15
		
	}

	if(keyCode === UP_ARROW){
		paper1.body.position.y = paper1.body.position.y + -20
		
	}
}
