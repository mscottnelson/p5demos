var c1, c2, c3, c4;
var circ = [];
var side = 30;

function setup() {
	frameRate(30);
	colorMode(HSB);

	createCanvas(windowWidth, windowHeight);
	c1 = createGraphics(windowWidth/2, windowHeight/2);
	c2 = createGraphics(windowWidth/2, windowHeight/2);
	c3 = createGraphics(windowWidth/2, windowHeight/2);
	c4 = createGraphics(windowWidth/2, windowHeight/2);

	noFill();
	strokeWeight(5);
	angleMode(DEGREES);
}

function draw() {
	drawc1();
	drawc2();
	drawc3();
	drawc4();

	image(c1, 0, 0);
	image(c2, windowWidth/2, 0);
	image(c3, 0, windowHeight/2);
	image(c4, windowWidth/2, windowHeight/2);

}

function drawc1() {
	c1.rect(random(0, windowWidth/4), random(0, windowHeight/4), random(0, windowWidth/4), random(0, windowHeight/4));
	c1.fill(color(random(0,255), random(0,255), random(0,255)));
}

function drawc2() {
	c2.background(0);
	c2.ellipse(mouseX,mouseY,30,30);
	for(var i=0; i<circ.length; i++){
		circ[i].display();
	 }
}

function drawc3() {
	c3.background(255, 0, 0);
}

function drawc4() {
	c4.background(0, 0, 255);
}

function mouseClicked() {
	// c2.fill(color(random(0,255),random(0,255),random(0,255)));
	// c2.ellipse(mouseX,mouseY,100,100);

	circ.push(new Circlick());
}

function Circlick() {
	this.x = mouseX;
	this.y = mouseY;
	this.R = random(0,255);
	this.B = random(0,255);
	this.G = random(0,255);

	this.display = function() {
		c2.fill(color(this.R,this.G,this.B));
		c2.ellipse(this.x, this.y, 100, 100);
	};
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
