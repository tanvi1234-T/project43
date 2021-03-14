var chocobar,donut1, donut2, cookie, icecream,croissant,
cupcake,carrot, beet, broccoli, cabbage, cucumber,avacodo,germ1,germ2,germ3

var chocobarImg, donut1Img, donut2Img, cookieImg, icecreamImg,croissantImg,
cupcakeImg,carrotImg, beetImg, broccoliImg, cabbageImg, cucumberImg,avacodoImg,germ1Img,germ2Img,germ3Img



function preload(){
  chocobarImg = loadImage("images/chocobar.png");
  donut1Img = loadImage("images/donut.png");
  donut2Img = loadImage("images/donut2.png");
  cookieImg = loadImage("images/cookie.png");
  icecreamImg = loadImage("images/face_cone.png");
  croissantImg = loadImage("images/face_croissant.png");
  cupcakeImg = loadImage("images/cupcake.png");
  carrotImg = loadImage("images/carrot_1.png");
  beetImg = loadImage("images/beet.png");
  broccoliImg = loadImage("images/broccoli.png");
  cabbageImg = loadImage("images/cabbage.png");
  cucumberImg = loadImage("images/cucumber.png");
  avacodoImg = loadImage("images/avacodo.png");
  germ1Img = loadImage("images/germ1.png");
  germ2Img = loadImage("images/germ2.png");
  germ3Img = loadImage("images/germ3.png");
  
}
function setup() {
  createCanvas(1800,520);
  chocobar = createSprite(400, 200, 50, 50);
  chocobar.addImage(chocobarImg);
  chocobar.scale = 0.2;

}

function draw() {
  background("beige");  
  drawSprites();
}