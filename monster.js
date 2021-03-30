class Monster{

constructor(x,y,r){
var options={
    'density':5,
    'frictionair':0,

}
this.r=r;
this.body=Bodies.circle(x,y,r/2,options)
World.add(world,this.body)


}
display(){
 var nam=this.body.position
push()
translate(nam.x,nam.y-100)
rectMode(CENTER)
fill("blue")
ellipse(0,0,this.r)
pop()
}

}