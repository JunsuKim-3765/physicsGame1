class Boss 
{
  constructor(x, y, w,h) 
  {
    let options = {
     isStatic:true
    };
    
    this.body = Bodies.rectangle(x, y, w, h, options);
    this.w = w;
    this.h = h;
    this.image=loadImage("boss_green.png");
    World.add(world, this.body);
  }

  show() {
    let pos = this.body.position;
    push();
    rectMode(CENTER);
    noStroke();
    fill("#ed2939");
    rect(pos.x,pos.y, this.w, this.h);
    image(this.image,pos.x,pos.y,this.w,this.h);
    pop();
  }

  hurt(){

  }

  dead(){

  }
}
