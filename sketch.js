var canvas;
var block1,block2,block3,block4;
var ball, edges;
var music;

function preload()
{
    music = loadSound("music.mp3");
}


function setup()
{
    //canvas
    canvas = createCanvas(800,600);

    //block 1
    block1 = createSprite(0,580,360,30);
    //blue
    block1.shapeColor = rgb(0,0,255);

    //block 2
    block2 = createSprite(295,580,200,30);
    //yellow
    block2.shapeColor = rgb(255,108,0);

    //block 3
    block3 = createSprite(515,580,200,30);
    //magenda
    block3.shapeColor = rgb(153,0,76);

    //block 4
    block4 = createSprite(740,580,220,30);
    //green
    block4.shapeColor = rgb(0,100,0);

    //ball
    ball = createSprite(random(20,750),100, 40,40);
    //white
    ball.shapeColor = rgb(255,255,255);
    ball.velocityX = 4;
    ball.velocityY = 9;

}

function draw()
{
    //background
    background(rgb(169,169,169));
    //edges
    edges=createEdgeSprites();
    ball.bounceOff(edges);

    if(block1.isTouching(ball) && ball.bounceOff(block1))
    {
        ball.shapeColor = rgb(0,0,255);
        music.play();
    }

    if(block2.isTouching(ball))
    {
        ball.shapeColor = rgb(255,128,0);
        ball.velocityX = 0;
        ball.velocityY = 0;
        music.stop();
    }

    if(block3.isTouching(ball) && ball.bounceOff(block3))
    {
        ball.shapeColor = rgb(153,0,76);
    }

    if(block4.isTouching(ball) && ball.bounceOff(block4))
    {
        ball.shapeColor = rgb(0,100,0);
    }

    drawSprites();
}
