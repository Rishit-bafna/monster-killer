const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var block1,block2,block3,block4,block5,block6,block7;
var hero1,ground1,ground2,ground3,ground4,ground5,ground6,ground7,sky1;
var ground8;
var box10,box1,box2,box3,box4,box5,box6,box7,box8,box9;
var audio1;
function preload(){
sky1 = loadImage("sky.png");
audio1 = loadSound("audio.mp3")
}
function setup(){

engine = Engine.create();
world = engine.world;

createCanvas(2000,800);

hero1 = new hero(50,200,30,30);
rope1 = new rope(hero1.body,{x:150,y:300});
ground1 = new ground(1400,650,80,10);
ground2 = new ground(1500,650,80,10);
ground3 = new ground(1600,650,80,10);
ground4 = new ground(1700,650,80,10);
ground5 = new ground(1500,450,80,10);
ground6 = new ground(1600,450,80,10);
ground7 = new ground(1550,250,80,10);

ground8 = new ground(800,550,500,10)

block1 = new monster(1400,640,50,50);
block2 = new monster(1500,640,50,50);
block3 = new monster(1600,640,50,50);
block4 = new monster(1700,640,50,50);
block5 = new monster(1500,440,50,50);
block6 = new monster(1600,440,50,50);
block7 = new monster(1550,240,50,50);

box10 = new box(650,530,50,50);
box1 = new box(650,490,50,50);
box2 = new box(650,440,50,50);
box3 = new box(650,390,50,50);
box4 = new box(650,340,50,50);
box5 = new box(650,290,50,50);
box6 = new box(650,240,50,50);
box7 = new box(850,530,50,50);
box8 = new box(850,490,50,50);
box9 = new box(850,440,50,50);


}
function draw(){

background(sky1);

Engine.update(engine);

textSize(32);
text("throw the monsters out, into void",10,50)
text("press 'space' to get another chance",10,100);

audio1.loop();

rope1.display();
hero1.display();

ground1.display();
ground2.display();
ground3.display();
ground4.display();
ground5.display();
ground6.display();
ground7.display();
ground8.display();

block1.display();
block2.display();
block3.display();
block4.display();
block5.display();
block6.display();
block7.display();

box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
box7.display();
box8.display();
box9.display();
box10.display();


}
function mouseDragged(){
    Matter.Body.setPosition(hero1.body, {x: mouseX , y: mouseY});
}
function mouseReleased(){
    rope1.fly();
}
function keyPressed(){
    if(keyCode === 32){
        rope1.attach();
        Matter.Body.setPosition(hero1.body,{x:100,y:300})

    }
}