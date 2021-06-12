const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var datetime,hour,time;
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
    textSize(20);
    fill("white");
    text("Time: " + time,100,50);
  
}

async function getBackgroundImg(){

    // write code to fetch time from API
  var response = await fetch("https://timezoneapi.io/api/timezone/?Asia/Kolkata&token=aJwdrLPXnzHuNdfCkmnv")
    //change the data in JSON format
  var responseJson = await response.json();
    // write code slice the datetime
datetime = responseJson.data.datetime.date_time;
    time = responseJson.data.datetime.time;
 hour = responseJson.data.datetime.hour_24_wolz;
    // add conditions to change the background images from sunrise to sunset
  if (hour>=04 && hour<=06){
     bg = "sunrise1.png";
   }else if(hour>=06 && hour<=08){
     bg = "sunrise2.png";  
   }else if(hour>=08 && hour<=10){
     bg = "sunrise3.png";  
   }else if (hour >10 && hour < 12){
     bg = "sunrise4.png"
   }else if(hour>=12 && hour<=14){
      bg = "sunrise5.png"; 
   }else if(hour>14 && hour<=16){
    bg = "sunset7.png"; 
   }else if(hour>16 && hour<=18){
    bg = "sunset8.png"; 
   }else if(hour>18 && hour<=20){
    bg = "sunset9.png";
   }else if(hour>20 && hour<=22){
     bg = "sunset10.png";
   }else if(hour>22 && hour<=24){
     bg = "sunset11.png";
   }else if(hour>0 && hour<=4){
     bg = "sunset12.png";
   }
   
    //load the image in backgroundImg variable here
    backgroundImg = loadImage(bg);
}
