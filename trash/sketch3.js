
var count = 30;
var fr = 60;
var speed = 2;

var it = 10;
var size1= 5;
var size2 = 4;

function setup() {
	createCanvas(windowWidth, windowHeight);
	console.log(width);
	frameRate(fr);
}

function draw() {
	background(0,200);
	fill(255);
	noStroke();
  for(var i = 0; i<count; i++)
  {
  	//Translation
  	push();
  	translate(width/2, height/2);
  	//Polar Array
  	rotate(i*PI*2/count);
  	//Slow rotation
  	rotate(frameCount/fr/6/HALF_PI*speed);
  	

  	// Geometry here
for(var j = 0; j<it; j++){
push();
  	rotate(2*PI*0.2*j);

  	translate(0,50*j+100);

  	ellipse(0, 0, size1,size1);

  	rotate(-frameCount/fr/HALF_PI*speed);
  	ellipse(0,30,size2,size2);
  	ellipse(0,-30,size2,size2);


  	fill(0);
	rectMode(CENTER);
  	//rect(0,0,10,10);
  	pop();
}
  	pop();
  }
}