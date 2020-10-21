var fixedRectangle, movingRectangle;

function setup() {
  
  createCanvas(800,400);

  fixedRectangle=createSprite(400, 200, 50, 50);
  fixedRectangle.shapeColor="green";
  movingRectangle=createSprite(200,200,100,50);
  movingRectangle.shapeColor="green";
}

function draw() {
  background(255,255,255);
  movingRectangle.x=mouseX;
  movingRectangle.y=mouseY;
  console.log("movingRectangle.x: " + movingRectangle.x);
  console.log("fixedRectangle.x: " + fixedRectangle.x);
  var gap=(movingRectangle.width + fixedRectangle.width)/2;
  console.log("gap: "+ gap);
  var separatedValue=movingRectangle.x-fixedRectangle.x;
  console.log("Current gap:" + separatedValue);

  if(movingRectangle.x- fixedRectangle.x <= (movingRectangle.width + fixedRectangle.width)/2
    && fixedRectangle.x - movingRectangle.x <= (movingRectangle.width + fixedRectangle.width)/2
    && movingRectangle.y- fixedRectangle.y <= (movingRectangle.height + fixedRectangle.height)/2
    && fixedRectangle.y - movingRectangle.y <= (movingRectangle.height + fixedRectangle.height)/2
    ){
      fixedRectangle.shapeColor="red";
      movingRectangle.shapeColor="red";
    }
    else{
      fixedRectangle.shapeColor="green"
      movingRectangle.shapeColor="green";
    }

  drawSprites();
}