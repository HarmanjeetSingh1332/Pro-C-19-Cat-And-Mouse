var bgImg;
var tom, tomImg1, tomImg2, tomImg3;
var jerry, jerryImg1, jerryImg2, jerryImg3;

function preload() {
    //load the images here
    bgImg = loadImage("images/garden.png");
    tomImg1 = loadAnimation("images/cat1.png");
    tomImg2 = loadAnimation("images/cat2.png", "images/cat3.png");
    tomImg3 = loadAnimation("images/cat4.png");
    jerryImg1 = loadAnimation("images/mouse1.png");
    jerryImg2 = loadAnimation("images/mouse2.png", "images/mouse3.png");
    jerryImg3 = loadAnimation("images/mouse4.png");
 
}

function setup(){
    createCanvas(1035,800);
   
    //create tom and jerry sprites here
    tom = createSprite(900,700);
    tom.addAnimation("tomSitting",tomImg1);
    tom.scale = 0.2;
  
    jerry = createSprite(200,700);
    jerry.addAnimation("jerryStanding",jerryImg1);
    jerry.scale = 0.15;
}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide
    if(tom.x - jerry.x < (tom.width - jerry.width)/2){
       tom.velocity = 0;
       tom.addAnimation("tomLastImg", tomImg3);
       tom.x = 300;
       tom.scale = 0.2;
       tom.changeAnimation("tomLastImg",tomImg3);

       jerry.addAnimation("jerryLastImg",jerryImg3);
       jerry.scale = 0.15;
       jerry.changeAnimation("jerryLastImg",jerryImg3);
    }

    keyPressed();
    
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyDown("LEFT_ARROW")){
    tom.velocityX = -5;  
    tom.scale = 0.25;
    tom.addAnimation("tomMoving", tomImg2);
    tom.changeAnimation("tomMoving", tomImg2);

    jerry.addAnimation("jerryDancing", jerryImg2);
    jerry.changeAnimation("jerryDancing", jerryImg2);

  }

}

