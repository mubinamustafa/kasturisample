class Objects
{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
			restitution:0.1,
			friction:0.5,
			density:5
	}
		this.x=x;
		this.y=y;
		this.r=r

		this.image1=loadImage("paper.png");
		this.image2=loadImage("Chickenleg.png");

		this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options)
	 
		this.visibility=255
		World.add(world, this.body);
	

	}
	display()
	{
			
			var paperpos=this.body.position;	
					
			push()
			translate(paperpos.x, paperpos.y);
			rectMode(CENTER)
			//strokeWeight(4);
			fill(255,0,255)
			imageMode(CENTER);
			image(this.image1, 0,0,this.r, this.r)
			//ellipse(0,0,this.r, this.r);
			pop()

			

	}
back(){


	Matter.Body.setPosition(this.body,{x:200,y:450})
	
}
	display1(){
	
		var chickenlegpos=this.body.position;

		push()
		translate(chickenlegpos.x, chickenlegpos.y);
		rectMode(CENTER)
		//strokeWeight(4);
		fill(255,0,255)
		imageMode(CENTER);
		image(this.image2, 0,0,this.r, this.r)
		//ellipse(0,0,this.r, this.r);
		pop()
	}

}