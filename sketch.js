var arrow, arrowImage, background, backgroundImage, blue_balloon, blue_balloonImage, bow, bowImage, green_balloon, green_balloonImage, pink_balloon, pink_balloonImage, red_balloon, red_balloonImage

var score;
var redGroup, blueGroup, greenGroup, pinkGroup, arrowGroup;

function preload(){
arrowImage = loadImage("arrow0.png");
backgroundImage = loadImage("background0.png");
blue_balloonImage = loadImage("blue_balloon0.png");
bowImage = loadImage("bow0.png");
green_balloonImage = loadImage("green_balloon0.png");
pink_balloonImage = loadImage("pink_balloon0.png");
red_balloonImage = loadImage("red_balloon0.png");
 
  
}

function setup() {
  createCanvas(600, 600)
  score = 0;
  
  
  background = createSprite(0,0,0,0);
  background.addImage(backgroundImage);
  background.scale = 2.85;
  background.velocityX = -5;
  
  bow = createSprite(500,300,10,10);
  bow.addImage(bowImage);
  bow.scale = 2


  redGroup = new Group();
  blueGroup = new Group();
  greenGroup = new Group();
  pinkGroup = new Group();
  arrowGroup = new Group();


}

function draw() {
  bow.y = mouseY;
  if (background.x < 0){
    background.x = background.width/2;
    background.x = 350;

}
var x = Math.round(random(1,4));
if(frameCount % 60 === 0) {
  if(x == 1) {
    spawnBalloonBlue();
  }
if(x == 2) {
  spawnBalloonRed();
}
if(x == 3) {
  spawnBalloonGreen();
}
if(x == 4) {
  spawnBalloonPink();
}
}
  
if(keyDown("space")) {
  createArrow() ;
  
}
if (arrowGroup.isTouching(redGroup)) {
  arrowGroup.destroyEach();
  redGroup.destroyEach();
  score = score + 1;
}
  
if (arrowGroup.isTouching(blueGroup)) {
  arrowGroup.destroyEach();
  blueGroup.destroyEach();
  score = score + 1;
}
  
if (arrowGroup.isTouching(greenGroup)) {
  arrowGroup.destroyEach();
  greenGroup.destroyEach();
  score = score + 1;
}
if (arrowGroup.isTouching(pinkGroup)) {
  arrowGroup.destroyEach();
  pinkGroup.destroyEach();
  score = score + 1;
}

  drawSprites();
  text("Score: "+ score, 200,50);
}

      
function spawnBalloonBlue() {
    blue_balloon = createSprite(0,50,10,10)
    blue_balloon.y = Math.round(random(50,500));
    blue_balloon.addImage(blue_balloonImage);
    blue_balloon.scale = 0.1;
    blue_balloon.velocityX = 5;
    blueGroup.add(blue_balloon);
  blue_balloon.lifetime = 100;
    
}
function spawnBalloonRed() {
    red_balloon = createSprite(0,50,10,10)
    red_balloon.y = Math.round(random(50,500));
    red_balloon.addImage(red_balloonImage);
    red_balloon.scale = 0.1;
    red_balloon.velocityX = 5;
    redGroup.add(red_balloon);
  red_balloon.lifetime = 100;
    
}

function spawnBalloonGreen() {
    green_balloon = createSprite(0,50,10,10)
    green_balloon.y = Math.round(random(50,500));
    green_balloon.addImage(green_balloonImage);
    green_balloon.scale = 0.1;
    green_balloon.velocityX = 5;
    greenGroup.add(green_balloon);
  green_balloon.lifetime = 100;
    
}

function spawnBalloonPink() {
    pink_balloon = createSprite(0,50,10,10)
    pink_balloon.y = Math.round(random(50,500));
    pink_balloon.addImage(pink_balloonImage);
    pink_balloon.scale = 1;
    pink_balloon.velocityX = 5;
    pinkGroup.add(pink_balloon);
  pink_balloon.lifetime = 100;
    
}

function createArrow() {
  arrow = createSprite(500,mouseY,10,10);
  arrow.y = bow.y
  arrow.addImage(arrowImage);
  arrow.scale = 0.5;
  arrow.velocityX = -100;
  arrowGroup.add(arrow);
}