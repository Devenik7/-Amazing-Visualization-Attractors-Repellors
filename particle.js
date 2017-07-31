function particle (pos, vel) {
	this.pos = pos || createVector(random(width), random(height));
	this.prevpos = createVector(this.pos.x, this.pos.y);
	this.vel = vel || p5.Vector.random2D();
	this.acc = createVector();
	this.force = createVector();
	this.color = createVector(random(255), random(255), random(255));
	this.mass = 1;
	this.invmass = 1;
}

particle.prototype.update = function() {
	this.acc = this.force.mult(this.invmass);
	this.vel.add(this.acc);
	this.prevpos.x = this.pos.x;
	this.prevpos.y = this.pos.y;
	this.pos.add(this.vel);
	this.force.mult(0);
};

particle.prototype.show = function() {
	strokeWeight(2);
	stroke(0,255,255);
	line(this.pos.x, this.pos.y, this.prevpos.x, this.prevpos.y);
	//point(this.pos.x, this.pos.y);
};

particle.prototype.addForce = function(f) {
	this.force.add(f);
};