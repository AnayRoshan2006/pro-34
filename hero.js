class Hero {
    constructor(x,y,radius) {
      var options = {
         'density':1.0,
         'frictionAir':1,
          
        }
      this.body = Bodies.circle(x,y,radius,options);
      this.radius=radius
      World.add(world, this.body);
    }
    display(){
      var angle =this.body.angle;
      var pos= this.body.position;
      push()
      translate(pos.x,pos.y)
      rotate(angle)
      ellipse(0,0,this.radius)
      pop()
    }
  };
