var car,wall;
var speed, weight;
var deformation=0;

function setup() {
  createCanvas(1600,400);
 car = createSprite(50, 200, 50, 50);
 car.shapeColor="cyan";
 wall = createSprite(1500,200,60,height/2);
 wall.shapeColor=color(80,80,80);
  speed = random(55,90);
  weight = random(400,1500);
  deformation=(0.5*speed*speed*weight)/22500;
}

function draw() {
  background(255,255,255);  
  drawSprites();
  if(keyDown("space")){
    car.velocityX=speed;

  }
if(car.isTouching(wall) && deformation<100){
  car.shapeColor=color(0,255,0);
  car.velocityX=0;
}
if(car.isTouching(wall) && deformation>100 && deformation<180){
  car.shapeColor="yellow";
  car.velocityX=0;
}
if(car.isTouching(wall) && deformation>180){
  car.shapeColor="red";
  car.velocityX=0;
}
}