
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var cube,cubeheart;
var g,g2,g3,g4,g5,g6,g7,g8;
var spike,spike2,spike3;
var w1,w1;
var edges;
var stone1,stone2,stone3,stone4;
var sImg,s2Img;
var o1,o2,o3,o4,o5;
var p;
var oneblack,twoblack,allblack,allstar;
var star1,star2,star3;
var sImg,s2Img;
var starRating;
var s1,s2,s3,s4,s5,s6,t1,t2,t3,t4,t5,t6;
var slide,slide2;
var gun,gun2;
var gunImg,gun2Img;
var Boss1,bossheart;
var h1,h2,h3,h4,h5,h6,h7,h8,hImg;
var blur1,blur2,blur3;
var bImg;
function preload(){
  sImg=loadImage("rock.png");
  s2Img=loadImage("rock3.png");
  oneblack=loadAnimation("one_black.png");
  twoblack=loadAnimation("two_black.png");
  allblack=loadAnimation("black_all.png");
  allstar=loadAnimation("all_star.png");
  sImg=loadImage("star.png");
  s2Img=loadImage("star_r.png"); 
  gunImg=loadImage("gunOne.png");
  gun2Img=loadImage("gunTwo.png");
  bImg=loadImage("blur.png");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  engine = Engine.create();
  world = engine.world;
  edges=createEdgeSprites();
  cube = Bodies.rectangle(60, 50, 45,45,{restitution:0.3,density:1.2,stiffness:1});
	World.add(world, cube);
  
  g=new Ground(50,110,130,30);
  g2=new Ground(200,190,130,30);
  g3=new Ground(350,290,130,30);
  g4=new Ground(550,390,130,30);
  g5=new Ground(950,390,1000,30);
  g6=new Ground(650,360,150,30);
  g7=new Ground(950,360,150,30);
  g8=new Ground(1250,360,150,30);
  
  w1=new Ground(1810,60,600,30);
  w2=new Ground(1810,390,600,30);
  
  p=new Ground(2200,510,100,10);

  spike=Bodies.circle(640,110,50,{isStatic:true});
  World.add(world,spike);

  //spike2=Bodies.circle(640,110,50,50,{isStatic:true});
  //World.add(world,spike2);
  
  o1=createSprite(1540,110,20,20);
  o1.velocityY=4;
  o2=createSprite(1680,110,20,20);
  o2.velocityY=-4;
  o3=createSprite(1820,110,20,20);
  o3.velocityY=4;
  o4=createSprite(1960,110,20,20);
  o4.velocityY=-4;
  o5=createSprite(2100,110,20,20);
  o5.velocityY=4;

  starRating=createSprite(1155,30,30,30);
  starRating.addAnimation("oneblack",oneblack);
  starRating.addAnimation("twoblack",twoblack);
  starRating.addAnimation("starRating",allblack);
  starRating.addAnimation("allstar",allstar);
  starRating.changeAnimation("starRating",allblack);
  starRating.scale=0.1;

  star1=createSprite(2200,440,50,50);
  star1.addImage("star1",sImg);
  star1.scale=0.2;

  star2=createSprite(600,700,50,50);
  star2.addImage("star2",sImg);
  star2.scale=0.2;

  star3=createSprite(1900,1000,50,50);
  star3.addImage("star3",s2Img);
  star3.scale=0.4;
  
  s1=new Ground(2140,555,50,20);
  t1=new Ground(2160,540,20,50);
  s2=new Ground(2090,585,50,20);
  t2=new Ground(2105,570,20,50);
  s3=new Ground(2055,620,50,20)
  t3=new Ground(2070,600,20,50);
  s4=new Ground(2020,665,50,20);
  t4=new Ground(2040,650,20,50);
  s5=new Ground(1990,705,50,20);
  t5=new Ground(2005,690,20,50);
  s6=new Ground(1960,750,50,20);
  t6=new Ground(1975,730,20,50);

  slide=new Ground(1085,785,1800,50);
  slide2=new Ground(1100,1100,2500,50);

  gun=createSprite(1700,740,50,50);
  gun.addImage("gun",gunImg);
  gun.scale=0.1;
  
  Engine.run(engine);
}

function draw() 
{
  rectMode(CENTER);
  background("#fdb9c8");
  ellipse(cube.position.x, cube.position.y, 45);
  ellipse(spike.position.x,spike.position.y,50);
  g.show();
  g2.show();
  g3.show();
  g4.show();
  g5.show();
  g6.show();
  fill("#D30000");
  g7.show();
  fill("#D30000");
  g8.show();
  fill("#D30000");
  p.show();
  w1.show();
  w2.show();
  s1.show();
  t1.show();
  s2.show();
  t2.show();
  s3.show();
  t3.show();
  s4.show();
  t4.show();
  s5.show();
  t5.show();
  s6.show();
  t6.show();
  slide.show();
  slide2.show();

  if(cube.position.x>=spike.position.x){
    Matter.Body.setStatic(spike,false);
  }

  if(o1.position.y>=385){
    o1.velocityY=-4;
  }
  if(o1.position.y<=70){
    o1.velocityY=4;
  }
  if(o2.position.y>=385){
    o2.velocityY=-4;
  }
  if(o2.position.y<=70){
    o2.velocityY=4;
  }
  if(o3.position.y>=385){
    o3.velocityY=-4;
  }
  if(o3.position.y<=70){
    o3.velocityY=4;
  }
  if(o4.position.y>=385){
    o4.velocityY=-4;
  }
  if(o4.position.y<=70){
    o4.velocityY=4;
  }
  if(o5.position.y>=385){
    o5.velocityY=-4;
  }
  if(o5.position.y<=70){
    o5.velocityY=4;
  }

  if(collide(cube,star1)==true)
  {
   star1.visible=false;
   starRating.changeAnimation("oneblack");
  } 

  if(collide(cube,star2)==true)
  {
   star2.visible=false;
   starRating.changeAnimation("twoblack");
  } 

  if(collide(cube,star3)==true)
  {
   star3.visible=false;
   starRating.changeAnimation("allstar");
  } 

  if(collide(cube,gun)==true)
  {
   gun.visible=false;
   
   textSize(50);
   textFont("Orator10 BT")
   text("BOSS BATTLE", 1190,440);
  } 

  Engine.update(engine);
  drawSprites();
}

function keyPressed()
{
  if(keyCode==UP_ARROW)
    {
      Matter.Body.applyForce(cube,{x:0,y:0},{x:0,y:5});
    }
    if(keyCode==LEFT_ARROW)
    {
      Matter.Body.applyForce(cube,{x:0,y:0},{x:-6,y:-0});
    }
    if(keyCode==RIGHT_ARROW)
    {
      Matter.Body.applyForce(cube,{x:0,y:0},{x:6,y:0});
    }
}

function collide(body,sprite)
{
  if(body!=null)
        {
         var d = dist(body.position.x,body.position.y,sprite.position.x,sprite.position.y);
          if(d<=80)
            {
               return true;
            }
            else{
              return false;
            }
         }
}

function boss(){
  
}