let counter = 0;
let coin;
let farbe;
function setup() {
  let blubd = createCanvas(innerWidth, innerHeight);
	textSize(120);
	farbe = color(random(255),random(255),random(255));
	textFont("Comic Sans MS");
  
   //true fullscreen! canvas only
  blubd.canvas.style.display = 'block';
}



function windowResized() {
  resizeCanvas(innerWidth, innerHeight);
}

function draw() {
  background(200);
	push();
	fill(255,0,0);
	textSize(30);
	text("Sven's kleiner Zähler",width/2-textWidth("Sven's kleiner Zähler")/2,35);
	pop();
	coin = counter.toString();
	text(counter,width/2-textWidth(coin)/2,height/2+textSize()/4);
}

function mousePressed() {
  if (mouseButton === RIGHT) {
		counter--;
		caller();
	}
	if (mouseButton === LEFT) {
		counter++;
		caller();
	}
}

function caller() {
	
	fill(farbe = color(random(255),random(255),random(255)));
	
}