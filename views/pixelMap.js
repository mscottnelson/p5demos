var fingers;

function setup() {
  var canvas = createCanvas(640, 480);
	canvas.parent('sketch-holder');

	capture = createCapture(VIDEO);
	capture.size(640, 480);
  capture.hide();
  noStroke();
  fill(0);
	frameRate(10);
}

function draw() {
  background(255);
  capture.loadPixels();
  var stepSize = round(constrain(mouseX / 8, 6, 32));
  for (var y=0; y<height; y+=stepSize) {
    for (var x=0; x<width; x+=stepSize) {
      var i = y * width + x;
      var darkness = (255 - capture.pixels[i*4]) / 255;
      var radius = stepSize * darkness;
      //ellipse(x, y, radius, radius);
			//line(x,y,x+radius,y+radius);
			rect(x,y,radius,radius);
			// push();
			// 	translate(x,y);
			// 	rotate(PI*frameCount/200);
			// 	rect(0,0,radius,radius);
			// pop();
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
