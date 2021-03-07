var fixedrect,movingrect,obj1,obj2,obj3,obj4;
function setup() {
  createCanvas(1200,800);
  fixedrect=createSprite(200, 200, 50, 50);
  obj1=createSprite(100,100,50,50);
  obj2=createSprite(200,100,50,50);
  obj3=createSprite(300,100,50,50);
  obj4=createSprite(400,100,50,50);
  movingrect=createSprite(400,200,80,30);
  fixedrect.shapeColor="cyan";
  movingrect.shapeColor="red";
  
}

function draw() {
  background(255,255,255);  
 movingrect.x=World.mouseX;
   movingrect.y=World.mouseY;
 console.log(movingrect.x);
  if(isTouching(obj2,movingrect)){
    obj2.shapeColor="green";
    movingrect.shapeColor="orange";
  }
  else{
    obj2.shapeColor="orange";
    movingrect.shapeColor="green";
  }

  drawSprites();
}
