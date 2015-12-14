var player;
var ball;
var goal;
var goal2;
var field;

function setup() {
  createCanvas (781, 495);
  
  field = createSprite(391, 247, 0, 0);
  var fieldImage = loadImage("https://upload.wikimedia.org/wikipedia/commons/4/48/Soccer_field_-_empty1.png");
  field.addImage(fieldImage);
  player = createSprite(480, 247.5, 50, 50);
  ball = createSprite(390.5, 247.5, 25, 25);
  goal = createSprite(32, 247.5, 10, 55);
  goal2 = createSprite(750, 247.5, 10, 55);

  
}

function draw () {
  background (20, 240, 20);
  
  if (keyDown(LEFT_ARROW)) {
    player.position.x = player.position.x - 5;
  }
  if (keyDown(RIGHT_ARROW)) {
    player.position.x = player.position.x + 5;
  }
   if (keyDown(DOWN_ARROW)) {
    player.position.y = player.position.y + 5;
  }
  if (keyDown(UP_ARROW)) {
    player.position.y = player.position.y - 5;
  }
  
  drawSprites();

  
  ball.bounce(player);
  
  if(ball.overlap(goal)){
    ball.remove();
  }
    
}
