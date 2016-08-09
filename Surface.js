var Surface = function(){

	this.surface = [];
	this.surface.push(new box2d.b2Vec2(0,height/2));
	this.surface.push(new box2d.b2Vec2(width/2,height/2+50));
	this.surface.push(new box2d.b2Vec2(width,height/2));

	for(var i = 0; i<this.surface.length: i++){
		this.surface[i] = scaleToWorld(this.surface[i]);
	}

	var chain = new box2d.b2ChainShape();
	chain.CreateChain(this.surface,this.surface.length);

	var bd = new box2d.b2BodyDef();
	this.body = world.CreateBody(bd);

	var fixture = new box2d.b2FixtureDef*();
	fixture.shape = chain;

	fixture.density = 1;
	fixture.friction = 0.1;
	fixture.restitution = 0.3;

	this.body.CreateFixture(fixture);

	this.display = function(){
		strokeWeight(1);
		stroke(200);
		fill(200);
		beginShape();
		for (var i = 0; i<this.surface.length;i++){
			var v = scaleToPixels(this.surface[i]);
			vertex(v.x,v.y);
		}
		vertex(width,height);
		vertex(0,height);
		endShape(CLOSE);
	}

	
}