const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var datetime,hour;
var bg ;

function preload() {
    // create getBackgroundImg( ) here
    
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;
    getBackgroundImg();
}

function draw(){

    // add condition to check if any background image is there to add
    if(backgroundImg){
        background(backgroundImg);
    }
   
    Engine.update(engine);
  
}

async function getBackgroundImg(){

    // write code to fetch time from API
  var response = await fetch("https://timezoneapi.io/api/timezone/?Asia/Kolkata&token=aJwdrLPXnzHuNdfCkmnv")
    //change the data in JSON format
  var responseJson = await response.json();
    // write code slice the datetime
datetime = responseJson.data.datetime.date_time;
  hour=datetime.slice(11,13);
    // add conditions to change the background images from sunrise to sunset
   if (hour>=04 && hour<=06){
     bg = "sunrise1.png";
   }else if(hour>=06 && hour<=08){
     bg = "sunrise2.png";  
   }else if(hour>=08 && hour<=12){
     bg = "sunrise3.png";  
   }else if(hour>=12 && hour<=06){
      bg = "sunset8.png"; 
   }else {
       bg = "sunset12.png";
   }
    //load the image in backgroundImg variable here
    backgroundImg = loadImage(bg);
}
