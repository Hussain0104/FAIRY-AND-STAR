var ball;
var canvas;
var music;
var wall1,wall2,wall3,wall4;

function preload(){
    music = loadSound("music.mp3");

}


function setup(){
    canvas = createCanvas(1000,600);
   
    //create 4 different surfaces
    wall1.shapeColor="pink";
    wall1=createSprite(100,600,200,50);
    wall2.shapeColor="yellow";
    wall2=createSprite(300,600,200,50);
    wall3.shapeColor="red";
    wall3=createSprite(500,600,200,50);
    wall4.shapeColor="blue";
    wall4=createSprite(700,600,200,50);
    create box sprite and give velocity
    ball.shapeColor="black";
    ball=createSprite(500,50,30,30);
    ball.velocityY=5;
    ball.velocityX=3;
   
}
function draw() {
    background(rgb(169,169,169));
    create edgeSprite
    createEdgeSprites();

    ball.bounce(RightEdge);
    ball.bounce(TopEdge);
    ball.bounce(BottomEdge);
    ball.bounce(LeftEdge);
    

    //add condition to check if box touching surface and make it box
    if(wall1.isTouching(ball) && box.bounceOff(wall1)){
        ball.shapeColor="pink";
    }
    if(wall2.isTouching(ball) && box.bounceOff(wall2)){
        ball.shapeColor="yellow";
        music.play();
    }
    if(wall3.isTouching(ball) && box.bounceOff(wall3)){
        ball.shapeColor="red";
    }
    if(wall1.isTouching(ball) && box.bounceOff(wall1)){
        ball.shapeColor="blue";
    }
    drawSprites();
}