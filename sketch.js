var movingRect, fixedRect;
var gameObject1, gameObject2, gameObject3, gameObject4;

function setup() {
  createCanvas(600, 600);

  movingRect = createSprite(100, 100, 80, 60);
  movingRect.shapeColor = "red";
  movingRect.debug = true;

  fixedRect = createSprite(300, 300, 40, 100);
  fixedRect.shapeColor = "red";
  fixedRect.debug = true;

  gameObject1 = createSprite(50,100,50,80);
  gameObject1.shapeColor = "orange";
  gameObject2 = createSprite(200,100,50,80);
  gameObject2.shapeColor = "orange";
  gameObject3 = createSprite(350,100,50,80);
  gameObject3.shapeColor = "orange";
  gameObject4 = createSprite(500,100,50,80);
  gameObject4.shapeColor = "orange";
}

function draw() {
  background(0);

  movingRect.x = mouseX;
  movingRect.y = mouseY;

  if(isTouching(movingRect, gameObject1)){
    movingRect.shapeColor = "green";
    gameObject1.shapeColor = "green";
  }

  else{
    movingRect.shapeColor = "red";
    gameObject1.shapeColor = "orange";
  }

  drawSprites();
}

