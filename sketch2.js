var movingRect, fixedRect;

function setup() {
  createCanvas(600, 600);

  movingRect = createSprite(100, 100, 80, 60);
  movingRect.shapeColor = "red";
  movingRect.debug = true;
  movingRect.velocityX = 5;

  fixedRect = createSprite(500, 100, 40, 100);
  fixedRect.shapeColor = "red";
  fixedRect.debug = true;
  fixedRect.velocityX = -5;
}

function draw() {
  background(0);

  
bounce (movingRect,fixedRect);
  

  drawSprites();
}

