var player, playerImg;
var alien, alien1Img, alien2Img, alien3Img;
var bgImg, bg;
var laser, laserImg;
var alienG, laserG;

function preload() {
playerImg = loadImage("images/fp2.png");
alien1Img = loadImage("images/alien1.png");
alien2Img = loadImage("images/alien2.png");
alien3Img = loadImage("images/alien3.png");
bgImg = loadImage("images/bg1.gif");
laserImg = loadImage("images/ls.png")
}

function setup() {
  createCanvas (displayWidth, displayHeight );
  alienG = createGroup();
  laserG = createGroup();

  bg = createSprite(displayWidth/2,100,displayWidth-200,displayHeight-200);
  player= createSprite(displayWidth/2, displayHeight-250);
  player.addImage(playerImg);
  player.scale=0.5;
  alien= createSprite(displayWidth/2, 100);
  alien.addImage(alien1Img);
  alienG.add(alien);

 
 
  bg.addImage("background",bgImg);
  bg.velocityY = 2;
  bg.scale = 5;

}

function draw() {
  background("grey");

if (keyWentDown (RIGHT_ARROW)) {
  player.velocityX = 6;
}

if (keyWentDown (LEFT_ARROW)) {
  player.velocityX = -6;
}

if (keyWentUp (RIGHT_ARROW)) {
  player.velocityX = 0;
}

if (keyWentUp (LEFT_ARROW)) {
  player.velocityX = 0;
}

if (keyWentDown (DOWN_ARROW)) {
  player.velocityY = 6;
}

if (keyWentDown (UP_ARROW)) {
  player.velocityY = -6;
}

if (keyWentUp (UP_ARROW)) {
  player.velocityY = 0;
}

if (keyWentUp (DOWN_ARROW)) {
  player.velocityY = 0;
}

if(bg.y>600){
  bg.y=bg.width/2;
    
  }

alien.velocityY =2;
alien.velocityX = random(-3,3);

if (keyDown("space")) {
  createLaser();
  laser.addImage(laserImg);
  laser.y = player.y;
  laser.x = player.x;
}

  drawSprites();

  spawnAlien();
  
  if (laserG.isTouching(alienG)) {
    laserG.destroyEach();
alienG.destroyEach();
  }

}

function createLaser() {
  laser = createSprite(displayWidth/2, displayHeight-250,0,0);
  laser.velocityY = -6;
  //laser.scale = 0.3;
  //laser.lifetime = 60;
  laserG.add(laser);
 // return arrow;
  
}

function spawnAlien(){
  if (frameCount % 60 === 0){
    alien= createSprite(random(50,displayWidth-50), 100);
    
     //generate random obstacles
     var rand = Math.round(random(1,3));
     switch(rand) {
       case 1: 
       alien.addImage(alien1Img);
               break;
       case 2: 
       alien.addImage(alien2Img);
               break;
       case 3:
          alien.addImage(alien3Img);
               break;
      // case 4: obstacle.addImage(obstacle4);
             //  break;
       //case 5: obstacle.addImage(obstacle5);
              // break;
       //case 6: obstacle.addImage(obstacle6);
         //      break;
       default: break;
     }
    
    }
  }