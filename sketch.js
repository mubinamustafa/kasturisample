
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Mouse=Matter.Mouse;
const MouseConstraint = Matter.MouseConstraint;
var dustbinObj, paperObject,groundObject	
var world;

var GreenTop;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	paperObject=new Objects(200,450,70);
	chickenObject = new Objects(100,450,70)

	groundObject=new ground(width/2,670,width,20);
	RightWallObject=new ground(0,550,20,height*2);



	green=new GreenDustbin(1200,650);

	blue = new BlueDustbin(1025,650)

	

	var render = Render.create({
	  element: document.body,
	  engine: engine,
	  options: {
	    width: 1600,
	    height: 700,
	    wireframes: false
	  }
	});

	//Engine.run(engine);
	//Render.run(render);

	const mouse = Mouse.create(canvas.render);
const options = {
    mouse: mouse
  };

  mConstraint = MouseConstraint.create(engine, options);
  World.add(world, mConstraint);

 
  
}


function draw() {
  rectMode(CENTER);
  background(255);
 Engine.update(engine)
text(mouseX + "," + mouseY, mouseX,mouseY )

 //blueTop = createSprite(1015,450,185,10);
 //blueTop.visible=false;

// GreenTop = createSprite(1204,450,185,10);
 //GreenTop.visible=false;


 
  
 chickenObject.display1();
paperObject.display();
  groundObject.display();
  RightWallObject.display();


  green.display();
blue.display();



	
if (paperObject.body.position.y>500){

	if (paperObject.body.position.x > 1097 && paperObject.body.position.x < 1299 ) {
		paperObject.back()// back function is the objects.js which will bring the paper back to its original position
		
	
   }
	}





fill("white")
textSize(22)
text("Organic",1170,600);
  
fill("white")
textSize(22)
text("Paper",985,600);


 // drawSprites();
 
}




