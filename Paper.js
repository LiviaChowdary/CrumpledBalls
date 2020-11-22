class Paper{
    constructor(x,y,diameter){
        var options={
            restitution:0.3,
            isStatic:false,
            friction:0.5,
            density:1.2,
        }

        this.body = Bodies.circle(200,100, diameter, options);
        this.diameter = diameter;
        this.image = loadImage("sprites/paper.png");
        
       World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        fill("purple");  
        image(this.image,200,100,this.diameter);
       

    }

}

