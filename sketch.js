var cat,mouse,catImage,catStanding,mouseImage,backGround,backgroundImage,catHappy,mouseHappy;
function preload() {
 catImage=loadAnimation("tomTwo.png","tomThree.png");
 catStanding=loadImage("tomOne.png");
 catHappy=loadImage("tomFour.png");
 mouseImage=loadAnimation("jerryOne.png","jerryThree.png");
 catHappy=loadImage("tomFour.png");
 mouseHappy=loadImage("jerryFour.png");   
}

function setup(){
createCanvas(400,400);
 cat =createSprite();

}

function draw() {
background(0,0,0);
text(mouseX+","+ mouseY,10,45);

}

function isTouching(p,q){
    if (p.x - q.x < q.width/2 + p.width/2 && q.x - p.x < q.width/2 + p.width/2 && p.y - q.y < q.height/2 + p.height/2 && q.y - p.y < q.height/2 + p.height/2) {

    }
    else {

    }
  }