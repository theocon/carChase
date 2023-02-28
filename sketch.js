var car1 
var city
var car2, car3
var road
var cityImage
var carImage
var car2Image, car3Image
var roadImage
var carsGroup,car3,car2

function preload(){
  carImage = loadImage("car1.png");
  car2Image =loadImage("car2.png");
  car3Image = loadImage("car3.png");
  cityImage = loadImage("city.png");
  roadImage = loadImage("road.png");

  carsGroup = new Group();


}

function setup() 
{
  createCanvas(windowWidth,windowHeight);

  
  city = createSprite(width/2,height-400,300,700);
  city.addImage(cityImage);
  city.scale = 0.5;
  road = createSprite(width/2,height-100,100,100 );
  road.addImage(roadImage);
  road.scale = 0.7;
  car1 = createSprite(100,height-180,100,450);
  car1.addImage(carImage);
  car1.scale = 0.4;
  
  
  
  
}

function draw() 
{
  background(51);

  carsGroup.setLifetimeEach(-1);
  carsGroup.setVelocityYEach(0);
 
  
    
   spawnCars();
   drawSprites();
}

function spawnCars(){
  if(frameCount % 300 === 0){
    car2 = createSprite(width,height/2,100,450);
    Xposition = [height-50,height-180]
    car2.y = Math.round(random(Xposition));
    car2.addImage(car2Image);
    car2.velocityX = -3;
    car2.scale = 0.2;

    carsGroup.add(car2);
    
  }

 

  
   
  
}