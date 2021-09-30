const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(200,390,400,20)
    pen = new Box(200,90,84,50)
    pencil = new Box(205,63,34,83)
    
   
    console.log(ground);
}

function draw(){
    background(0);

    Engine.update(engine);
    
    ground.display()
    pen.display()
    pencil.display()
    

    
}