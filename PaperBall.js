class paperBall{
  constructor(x,y,radius){
    var options = {
     isStatic:false,
     restitution:0.3,
     friction:0.5,
     density:0.3,
     
    }
    this.body = Matter.Bodies.circle(x,y,radius,options)
    this.radius = radius;
    this.image = loadImage("paper.png");
    World.add(world,this.body)
}
display(){
    var pos = this.body.position;
    push();
    translate(pos.x,pos.y)
    imageMode(CENTER);
    image(this.image, 0, 0, 60, 60);
    pop();
}
}