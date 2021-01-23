//Create variables here
var dog,dogImg, happyDog, database, foodS, foodStock
function preload(){
 dogImg=loadImage("images/dogImg1.png")
 happyDog=loadImage("images/dogImg.png")


}

  
	//load images here


function setup() {
	createCanvas(500, 500);
  dog=createSprite(250,400,10,10)
  dog.addImage(dogImg)
  dog.scale=.3
  database=firebase.database()
  var ref = database.ref('food');
  ref.on("value",readStock)
}


function draw() {  
  background(46, 139, 87)
  drawSprites();
  textSize(20)
  text("press up arrow key to feed the dog",130,20)
  //add styles here

  if(keyWentDown(UP_ARROW)) {
    writeStock(foodS);
    dog.addImage(happyDog);
  }
}
function readStock(data){
  foodS=data.val();
}

function writeStock(x) {
if(x<0){
  x=0;
}else{
  x=x-1;
}

  database.ref('/').update({
    food:x
  })
}

