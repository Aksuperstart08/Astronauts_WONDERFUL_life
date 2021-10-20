var man, bath, brush, eat, drink, move, gym, gym2, sleep;
var bg, bgImg

function preload(){

bath = loadAnimation("images/bath1.png","images/bath2.png");
brush = loadImage("images/brush.png");
eat = loadAnimation("images/eat1.png", "images/eat2.png");
drink = loadAnimation("images/drink1.png", "images/drink2.png");
gym = loadAnimation("images/gym1.png","images/gym2.png");
gym2 = loadAnimation("images/gym11.png", "images/gym12.png");
sleep = loadImage("images/sleep.png");
move = loadAnimation("images/move.png", "images/move1.png")
bgImg = loadImage("images/iss.png")

}

function setup() {
  createCanvas(470, 330);

  bg = createSprite(230,165);
  bg.addImage(bgImg);
  bg.scale = 0.1;

  man = createSprite(230,165,30,80);
  man.addAnimation("living", sleep);
  man.scale = 0.07;
}

function draw() {
  background(220);

  if(keyDown("UP_ARROW")){
    changeAnimation(brush,200,0,0)
  }

  if(keyDown("DOWN_ARROW")){
    changeAnimation(gym,200,0,0)
  }

  if(keyDown("LEFT_ARROW")){
    changeAnimation(eat,200,0,0)
  }

  if(keyDown("space") && keyDown("LEFT_ARROW")){
    changeAnimation(drink,200,0,0)
  }

  if(keyDown("space") && keyDown("DOWN_ARROW")){
    changeAnimation(gym2,200,0,0)
  }

  if(keyDown("RIGHT_ARROW")){
    changeAnimation(bath,200,0,0)
  }

  a = Math.round(random(-5,5));
  if(keyDown("m")){
    changeAnimation(move,200,a,a);
  }
  


  drawSprites();
   text("up arrow - Brushing",200,200)
}

function changeAnimation(obj1,obj2,obj3,obj4){
  
    man.addAnimation("living", obj1);
    man.y = obj2;
    man.velocityX = obj3;
    man.velocityY = obj4;
  
}
