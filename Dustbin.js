class Dustbin{
  constructor(x,y,width,height){
      var options = {
       isStatic:true,
       friction:0.5,
       density:1
      }
      this.body = Matter.Bodies.rectangle(x,y,width,height,options)
      this.width = width;
      this.height = height;
      this.image = loadImage("dustbingreen.png");
      World.add(world,this.body)
  }
 
  display(){
      var pos = this.body.position;
      push();
      translate(pos.x,pos.y)
      imageMode(CENTER);
      image(this.image, 0, 0, 150, 150);
      pop();
  }
}