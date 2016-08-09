

var world;
var particles = [];
var surface = [];



function setup() {
	createCanvas(640,360);
	b2newWorld(30, createVector(0, 9.8));
	//world = createWorld();
	surface = new Surface()

}

function draw(){
	background(51);
	var timeStep = 1.0/30;
	world.step(timeStep,10,10);//2&3 locs are for velocity and pos iterators

	
	if(random(1)<0.2){
		var b = new Particle(width/2,30,random(4,8));
		particles.push(b);
	}

	surface.display()


	for(var i = particles.length-1; i>=0; i--){
		particles[i].display();
		if(particles[i].done()){
			particles.splice(i,1);
		}
	}

}

function mousePressed(){

}

