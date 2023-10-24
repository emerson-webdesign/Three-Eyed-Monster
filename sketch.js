function setup() {
  createCanvas(400, 400);
}

let sunsize = 0;
let ypos = 0;
let xpos = 200;
let ellipseSize = 50;




function draw() {
  background(66,135,245);
 
  
  
   //sun
  fill(255,238,0)
  ellipse(xpos,ypos+375,sunsize+90)
  ypos = ypos - 2
  sunsize = sunsize +.25
  
  fill(255);

  //main head
  ellipse(200,150,70,175);
  fill(255,45,0)
  ellipse(200,150,50,50);
  
  //body
  fill(255)
rect(130,250,150,50,10);
  fill(38,174,4)
rect(0,360,400,300);

  
  //left eye
  fill(255)
  ellipse(120,200,30,70);
  fill(255,45,0);
ellipse(120,200,25,25);

  //right eye
  fill(255);
  ellipse(280,200,30,70);
  fill(255,45,0);
  ellipse(280,200,25,25);

  
  rect(45,250,315,5);
  
  
 
  
  
  
  //left legs
  fill(0,0,0);
  ellipse(50,305,15,110);
  ellipse(100,305,15,110);
  ellipse(30,355,40,10);
  ellipse(80,355,40,10);
  
  
  //right legs
  ellipse(305,305,15,110);
  ellipse(320,355,40,10);
  
ellipse(350,305,15,110);
  ellipse(370,355,40,10); 
  
  
  

  
  
}