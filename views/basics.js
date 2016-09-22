function setup() {
	frameRate(30);
	colorMode(HSB);
	var canvas = createCanvas(windowWidth, windowHeight);
	canvas.parent('sketch-holder');
	noFill();
	strokeWeight(5);
	angleMode(DEGREES);
}

function draw() {
	var side = 30;
	background(0);
	point(windowWidth/2, windowHeight/2);
	translate(windowWidth/2, windowHeight/2);
	for(i = 0; i < 100; i++){
		stroke(i + 50, 100, 100);
		triangle(-side/2, -side/(2*tan(60)), side/2, -side/(2*tan(60)), 0, sqrt(3)*side/2-side/(2*tan(60)));
		//rect(0,0,side,side);
		rotate(180+frameCount/32);
		side = side + mouseX/8;
	}
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
