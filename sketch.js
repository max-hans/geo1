

var count_min = 4;
var count_max = 40;

var counter_add = 0.1;
var count = count_min;
var count_2 = 7;
var fr = 30;
var speed = 1;

var radius_1;
var radius_2;

var it = 10;
var size1= 5;
var size2 = 4;

var shape_array;

function setup() {

	createCanvas(windowWidth, windowHeight, WEBGL);
	frameRate(fr);
	if(height>width){
	    radius_1 = canvas.width*0.2;
	}
	else{
	    radius_1 = canvas.height*0.2;
	}

	radius_2 = radius_1*0.2;

	button1 = createButton('+');
	button1.position(19, 19);
	button1.mousePressed(increase);
	button1.class("button");

	button2 = createButton('-');
	button2.position(59, 19);
	button2.mousePressed(decrease);
	button2.class('button');

	button1 = createButton('+');
	button1.position(19, 59);
	button1.mousePressed(increase_2);
	button1.class("button");

	button2 = createButton('-');
	button2.position(59, 59);
	button2.mousePressed(decrease_2);
	button2.class('button');

}

function draw() {
	//rotateY(frameCount*2*PI/96);
	background(0);
	//ambientLight(200);
	pointLight(255, 255, 255, 0, 0,10000);
	noStroke();
	fill(0);
	// strokeWeight(0.5);
  for(var i = 0; i<count; i++)
  {
		push();
		rotateX(PI/2);
		rotateY(2*PI/count*i);
				// translate(-300, 200);
		//rotateX(-0.9);
		rotateZ(frameCount*2*PI/96/3);
		ambientMaterial(255,0,0);
		box(200);
		pop();
		}

		count += counter_add;
		if(count>count_max) count=count_min;

}



function increase(){
	count++;
}


function decrease(){
	count--;
}

function increase_2(){
	count_2++;
}


function decrease_2(){
	count_2--;
}
