class Box{
constructor(x,y,width,height){
var options={
    restitution:1,
    density:10,
    friction:0.2
}
  this.body=Bodies.rectangle(x,y,width,height,options) 
  this.width=width;
  this.height=height;

  World.add(world,this.body)  
}
display(){
    var pos = this.body.position
    var angle=this.body.angle
    push()
    rectMode(CENTER);
    translate(pos.x,pos.y)
    fill("lime")
    rotate(angle)
    rect(0,0,this.width,this.height)

    pop()
}
}


