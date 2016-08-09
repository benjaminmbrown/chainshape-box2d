var b2Vec2 = Box2D.Common.Math.b2Vec2,
    b2BodyDef = Box2D.Dynamics.b2BodyDef,
    b2Body = Box2D.Dynamics.b2Body,
    b2FixtureDef = Box2D.Dynamics.b2FixtureDef,
    b2Fixture = Box2D.Dynamics.b2Fixture,
    b2World = Box2D.Dynamics.b2World,
    b2MassData = Box2D.Collision.Shapes.b2MassData,
    b2PolygonShape = Box2D.Collision.Shapes.b2PolygonShape,
    b2CircleShape = Box2D.Collision.Shapes.b2CircleShape,
    b2DebugDraw = Box2D.Dynamics.b2DebugDraw;

var world;
var particles = [];
var surface = [];



function setup() {
	createCanvas(640,360);
	world = createWorld();
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

