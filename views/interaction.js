var circ = [];

function setup() {
	var canvas = createCanvas(windowWidth, windowHeight);
	canvas.parent('sketch-holder');

}

function draw() {
	background(0);
	ellipse(mouseX,mouseY,30,30);
	for(var i=0; i<circ.length; i++){
	 	circ[i].display();
	 }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function mouseClicked() {
	// fill(color(random(0,255),random(0,255),random(0,255)));
	// ellipse(mouseX,mouseY,100,100);

	circ.push(new Circlick());
}


function Circlick() {
	this.x = mouseX;
	this.y = mouseY;
	this.R = random(0,255);
	this.B = random(0,255);
	this.G = random(0,255);

	this.display = function() {
		fill(color(this.R,this.G,this.B));
		ellipse(this.x, this.y, 100, 100);
	};
}
