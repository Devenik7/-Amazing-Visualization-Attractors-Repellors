function attractor (pos) {
	this.pos = pos || createVector(random(width), random(height));
	this.color = createVector(255,255,255);
}

attractor.prototype.update = function() {
	
};

attractor.prototype.show = function() {
	strokeWeight(2);
	stroke(this.color.x, this.color.y, this.color.z);
	point(this.pos.x, this.pos.y);
};

attractor.prototype.attract = function(obj) {
	var direction = p5.Vector.sub(this.pos, obj.pos);
	var dist = direction.magSq();
	dist = constrain(dist, 5*5, 25*25);
	var force = p5.Vector.mult(direction.normalize(), G / dist);
	if (dist < 15*15)
		obj.addForce(force.mult(-5));
	else
		obj.addForce(force);
};