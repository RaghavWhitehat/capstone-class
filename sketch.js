const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
const Constraint=Matter.Constraint

var engine;
 var world;
 
 function setup() {
   
  createCanvas(1000,800);
  engine=Engine.create()
  world=engine.world
  

  ground=new Ground(400,600,1000,20)
  box1=new Box(600,200)
  box2=new Box(600,200)
  box3=new Box(600,200)
  box4=new Box(600,200)
  box5=new Box(600,200)
  box6=new Box(600,200)
  box7=new Box(600,200)
  box8=new Box(600,200)
  ball=new Ball(400,400)
rope=new Rope(ball.body,{x:400,y:100})


}

function draw() {
  background(255,255,255); 
Engine.update(engine)
ground.display()
box1.display()
  box2.display()
  box3.display()
  box4.display()
  box5.display()
  box6.display()
  box7.display()
  box8.display()
  ball.display()
}

function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
}

