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
var boundaries = [];
var boxes = [];



function setup() {
	createCanvas(640,360);
	//var world = new box2d.b2World();
	world = new b2World(new b2Vec2(0, 10),true);
	//var world = new b2World( new b2Vec2(0.0, -10.0) );
	//var world = createWorld();
	var b = new Box(width/2,30);

}

function draw(){
	background(51);
	var timeStep = 1.0/30;
	world.step(timeStep,10,10);//2&3 locs are for velocity and pos iterators

	//boxes get randomly generated
	if(random(1)<0.2){
		var b = new Box(width/2,30);
		boxes.push(b);
	}

	for(var i = boxex.length-1; i>=0; i--){
		boxes[i].display();
		if(boxes[i].done()){
			boxes.splice(i,1);
		}
	}

}

function mousePressed(){

}

