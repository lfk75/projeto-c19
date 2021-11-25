
var galaga;
var galagaimg;
var fundo;
var espaço;
var alien, alienimg;
var invasores, naveMal;
var bilu, biluimg;

var score;
var grupo1;
var grupo2;
var grupo3;


const PLAY = 1;
const END = 0;

var gameState = PLAY;


function preload(){

galagaimg = loadImage("naveEspacial.png");

fundo = loadImage("rend.png");

alienimg = loadImage("alien.png");

naveMal = loadImage("alienigenas.png");

biluimg = loadImage("corredor.png");
}

function setup()  {
 createCanvas(600,600);


 espaço = createSprite(300,200,10,10);
espaço.addImage("planofundo", fundo);
espaço.scale = 2

galaga = createSprite(300,500,10,10);
galaga.addImage("nave", galagaimg);
galaga.scale = 0.1

score = 0;

grupo1 = new Group();
grupo2 = new Group();
grupo3 = new Group();
}

function draw() {
  background(0)
 textSize(30)
text("GAME OVER", 200,300)


  if (gameState === PLAY) {
  score = score + Math.round(frameRate()/60);

 espaço.velocityY = 3

 if (espaço.y > 590) {
  espaço.y = 200
 }

 galaga.x = World.mouseX;
 galaga.y = World.mouseY;

 aliens();
 armada();
 corredores();

 if (galaga.isTouching(grupo1) || galaga.isTouching(grupo2) || galaga.isTouching(grupo3))
 gameState = END
  }

  if (gameState === END) {

  galaga.visible = false;
  espaço.visible = false;

  grupo1.destroyEach();
  grupo2.destroyEach();
  grupo3.destroyEach();



  }


 drawSprites()
 textSize(15)
 text("Pontuação: " + score,480,40);



}


 function aliens() {
 if (frameCount % 50 === 0) {
 alien = createSprite(300,-30,10,10);
 alien.addImage("marcianos", alienimg);
 alien.scale = 0.1
 alien.velocityY = 3
 alien.x = Math.round(random(30,560));
 alien.lifetime = 200
 grupo1.add(alien);

}
}



function armada() {
 if (frameCount % 180 === 0) {
 invasores = createSprite(300,-30,10,10);
 invasores.addImage("navemae", naveMal);
 invasores.scale = 0.05
 invasores.velocityY = 4
 invasores.velocityX = 2
 invasores.x = Math.round(random(10,300));
 invasores.lifetime =150
 grupo2.add(invasores);

}
}

function corredores() {
 if (frameCount % 200 === 0) {
 bilu = createSprite(300,-30,10,10)
 bilu.addImage("et", biluimg);
 bilu.scale = 0.05
 bilu.velocityY = 8
 bilu.x = Math.round(random(10,300));
 bilu.lifetime = 75
 grupo3.add(bilu);



 }
}

 
 