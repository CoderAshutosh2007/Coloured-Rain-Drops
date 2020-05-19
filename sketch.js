  const Engine = Matter.Engine;
  const World= Matter.World;
  const Bodies = Matter.Bodies;

  var engine, world;
  var red1,red2,red3,red4;
  var green1,green2,green3,green4;
  var blue1,blue2,blue3,blue4;

  function setup() {
  var canvas = createCanvas(1000,600);

  engine = Engine.create();
  world = engine.world;

  red1 = new Red(50,100,15,100);
  red2 = new Red(150,50,15,80);
  red3 = new Red(250,150,15,90);
  red4 = new Red(350,100,15,100);

  green1 = new Green(100,150,15,40);
  green2 = new Green(200,100,15,80);
  green3 = new Green(300,50,15,100);
  green4 = new Green(500,20,15,90);

  blue1 = new Blue(400,100,15,80);
  blue2 = new Blue(550,90,15,90);
  blue3 = new Blue(570,100,15,80);
  blue4 = new Blue(500,80,15,100);

}

  function draw() {
  background(0); 
  Engine.update(engine); 

  red1.display();
  red2.display();
  red3.display();
  red4.display();

  green1.display();
  green2.display();
  green3.display();
  green4.display();
  
  blue1.display();
  blue2.display();
  blue3.display();
  blue4.display();


  drawSprites();
}