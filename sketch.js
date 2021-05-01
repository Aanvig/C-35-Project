var dog, happyDog, dogImg, happyDogImg;
var database, data;
var food, foodStock, foodAmount, Food;

function preload()
{
	dogImg = loadImage("images/dogImg.png")
  happyDogImg = loadImage("images/dogImg1.png")
}

function setup() {
	createCanvas(500, 500);
  database=firebase.database()

  dog=createSprite(300,300,50,50)
  dog.addImage(dogImg)
  dog.scale=0.2


  foodStock=database.ref('Food')
  foodStock.on("value", readStock)
  
}


function draw() {  
background(46,139.87);


if(keyWentDown(UP_ARROW)) {
  foodAmount = database.ref('Food').on("value",
   readStock, writeStock)
  writeStock(Food);
  dog.addImage(happyDogImg)
}




textSize(20)
  fill('red')
  text("Food:" + foodStock, 70, 100)

  drawSprites();
  //add styles here

}

function readStock(data) {
  food=data.val()
}

function writeStock(x) {

  if(x<=0) {
    x=0
  } else {
    x=x-1
  }

  database.ref('/').update({
    food:x
  })
}

