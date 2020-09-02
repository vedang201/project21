var bullet,wall,thickness;
var weight,speed;
var damage;

function setup() {

  createCanvas(1600,400);
  thickness = random(22,83);
  bullet = createSprite(50,200,50,50);
  wall = createSprite(600, 200,thickness,70);
  weight = random(30,52);
  speed = random(223,321);
  
}

function draw() {
  background(255,255,255);  

  bullet.velocityX=speed;
  if(isTouching(wall,bullet)){

     damage = (0.5 * weight * speed * speed)/thickness*thickness*thickness;

     if(damage<10){

      wall.shapeColor="green";
      stop();
     }
     if(damage>10){

       wall.shapeColor="red";
      stop();
     }
     
    
  }
  drawSprites();
}
function isTouching(fixed,moving){


  if (moving.x - fixed.x < fixed.width/2 + moving.width/2
    && fixed.x - moving.x < fixed.width/2 + moving.width/2
    && moving.y - fixed.y < fixed.height/2 + moving.height/2
    && fixed.y - moving.y < fixed.height/2 + moving.height/2) {
  return true;
}
else {
  return false;
}




}
function stop(){

   bullet.velocityX=0;

}