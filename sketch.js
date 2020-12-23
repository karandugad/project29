const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var ground,box,slingshot;
var block1;


function setup (){
ground= new Ground(200,200,20,20);
box=new box(200,200,20,20);
 block1=new Block(330,235,30,40)
 block2=new Block(360,235,30,40)
 block3=new Block(390,235,30,40)
 block4=new Block(420,235,30,40)
 block5=new Block(450,235,0,40)
 block6=new Block(360,195,30,40)
 block7=new Block(390,195,30,40)
 block8=new Block(420,195,30,40)
 block9=new Block(360,155,30,40)
 polygon=bodies.circle(50,200,20);
 World.add(world,polygon);
slingshot=new SlingShot(this.polygon,{x:100,y:100});
ImageBitmapRenderingContext(CENTER)
Image(polygon_img,polygon.position.x,polygon.position.y,40,40);


function draw (){
ground.display();
box.display();
block1.display();
block2.display();
block3.display();
block4.display();
block5.display();
block6.display();
block7.display();
block8.display();
block9.display();
slingshot.display()




}
 function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}



}