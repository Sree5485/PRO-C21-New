const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var userEngine, userWorld;
var ball, groundObj, leftside, rightSide;

function preload() {}

function setup() {
  createCanvas(800, 700);

  userEngine = Engine.create();
  userWorld = userEngine.world;

  groundObj = new Ground(width / 2, 670, width, 20);
  leftSide = new Ground(1100, 600, 20, 120);
  rightSide = new Ground(1200, 600, 20, 20);

  //Create the body of the ball Here.
  var ball_options = {
    isStatic: true,
    restitution: 0.3,
    friction: 0,
    density: 1.2,
  };

  ball = Matter.Bodies.circle(100, 100, 2, ball_options);
  World.add(userWorld, ball);
}

function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(userEngine);

  groundObj.display();
  drawSprites();
}

function keyPressed() { 
  
  if (keyCode === UP_ARROW) {
    Matter.Body.applyForce(ball,ball.position,{x:85,y:-85});
   } 
};
