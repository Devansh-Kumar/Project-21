var wall,thickness;
var bullet,speed,weight;


function setup() {
  createCanvas(1600,400);
  
  bullet = createSprite(50, 200, 80, 5);
  bullet.shapeColor = ("white");
  wall = createSprite(1200, 200, thickness, height/2);
  wall.shapeColor =color(80,80,80);

  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);

  bullet.velocityX = speed;
}

function draw() {
  background("black");
  
  //algorithm for changing color of wall at collision with bullet at different speeds 
if (hasCollided(bullet,wall)){
  bullet.velocityX = 0;
var damage = 0.5 * weight *speed * speed/(thickness * thickness *thickness);
if (damage >10 ){
wall.shapeColor = color(255,0,0);
}
if (damage<10 ){
  wall.shapeColor = color(0,255,0);
}
  }

  bullet.collide(wall);
  drawSprites();
}

function hasCollided(b1,w1){
bulletRightEdge=b1.x+b1.width;
wallLeftEdge=w1.x;
if (bulletRightEdge>=wallLeftEdge){
return true;  
}
return false;
}