var scene;
var G = 50;

function setup () {
	createCanvas(1366,768);
	scene = new Scene();
	background(25);
}

function draw () {
	background(25,25,25,25);
	//background(25);
	scene.update();
	scene.show();
}

function mousePressed () {
	scene.addAttractor(createVector(mouseX, mouseY));
}
