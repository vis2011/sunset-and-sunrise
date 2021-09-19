const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var hour;
var datetime;

var bg = "sunrise.png";
time();
function preload() {
    
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

async function time(){

    // write code to fetch time from API
    var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
 
    //change the data in JSON format and store it in variable responseJSON
     var responseJSON = await response.json();
     console.log(responseJSON);

    
    //fetch datetime from responseJSON
     var datetime = responseJSON.datetime;
    

    // slice the datetime to extract hour
     hour = datetime.slice(11,13);
     console.log(hour);
    
    if(hour>=0 && hour<18 ){
        bg = "sunrise.png";
        
    text("time :" + hour,50,100);
    }
    else{
        bg="sunset.png";
    }
    
    backgroundImg = loadImage(bg);
    
}

function draw(){
    if(backgroundImg)
        background(backgroundImg);

    Engine.update(engine);

    fill("black");
    textSize(30);

    text("time :" + hour +"AM",50,100);
    text("time :" + hour +"AM",50,100);

}