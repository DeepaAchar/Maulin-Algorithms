var fixedRect, movingRect;

var rect1, rect2, rect3, rect4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 600, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  fixedRect.velocityX=-3;

  movingRect = createSprite(700,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  rect1 = createSprite(400, 200, 50, 80);
  rect1.shapeColor = "green";
  rect1.debug=true;
  rect1.velocityY=4;

  rect2 = createSprite(400, 400, 50, 80);
  rect2.shapeColor = "green";
  rect2.velocityY=-3;
  rect2.debug=true;

  rect3 = createSprite(400, 600, 50, 80);
  rect3.shapeColor = "green";
  rect3.velocityX=2;
  rect2.debug=true;

  rect4 = createSprite(400, 800, 50, 80);
  rect4.shapeColor = "green";
  rect4.debug=true;
  rect4.debug=true;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;


  if (isTouching(movingRect, rect1) || 
      isTouching(movingRect, rect2) || 
      isTouching(movingRect, rect3) || 
      isTouching(movingRect, rect4) ||
      isTouching(movingRect, fixedRect)) {
    movingRect.shapeColor = "purple";
  }
  else {
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
  }

  bounceOff(fixedRect, rect3);
  bounceOff(rect1,rect2);

  drawSprites();
}

