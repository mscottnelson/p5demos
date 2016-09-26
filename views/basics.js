function setup() {
	var canvas = createCanvas(windowWidth, windowHeight);
	canvas.parent('sketch-holder');
	// frameRate(5);
}

function draw() {
	rect(30, 30, 300, 300);
	// //
	// // rect(random(0, windowWidth), random(0, windowHeight), random(0, windowWidth), random(0, windowHeight));
	// // fill(color(random(0,255), random(0,255), random(0,255)));
	//
	// rotate(random(0,2*PI));
	// rect(random(0, windowWidth), random(0, windowHeight), random(0, windowWidth), random(0, windowHeight));
	// fill(color(random(0,255), random(0,255), random(0,255)));


}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
