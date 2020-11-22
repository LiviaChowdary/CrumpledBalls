var paper;
var bin;
var ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
function preload()
{

}

function setup() {
	createCanvas(1500, 700);


	engine = Engine.create();
	world = engine.world;

	paper = new Paper(200,100,20); 

	//Create a Ground
	ground = new Ground(750,600,1600,20); 


	bin = new Bin(40,50);
	
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);
 
  paper.display();
  bin.display();
 
  ground.display();
  drawSprites();

}

function keyPressed(pos, xpos, ypos){
	
	  var boject= this.body;
	  var xpos=xpos;
	  var ypos=ypos;
	 
  
  
	  
	  if(keyCode === UP_ARROW){
		
	 
			 Matter.Body.applyForce( paper.body,paper.position,{x:85,y:-85});
		 }
	 }
	 
