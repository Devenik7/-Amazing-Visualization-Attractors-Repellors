function Scene () {
	this.attractors = [];
	this.particles = [];

	for (var i = 0; i < 2; i++) {
		this.attractors.push(new attractor(createVector(width/2 - 350 + (i * 700), height/2)));	
	}

	for (var i = 0; i < 250; i++) {
		this.particles.push(new particle(createVector(width/2 - 150, height/2)));
	}
}

Scene.prototype.update = function() {
	for (var i = 0; i < this.attractors.length; i++) {
		this.attractors[i].update();
		for (var j = 0; j < this.particles.length; j++) {
			this.attractors[i].attract(this.particles[j]);
		}
	}
	for (var i = 0; i < this.particles.length; i++) {
		this.particles[i].update();
	}
};

Scene.prototype.show = function() {
	for (var i = 0; i < this.attractors.length; i++) {
		this.attractors[i].show();
	}
	for (var i = 0; i < this.particles.length; i++) {
		this.particles[i].show();
	}
	for (var i = 1; i < this.particles.length; i++) {
		strokeWeight(1);
		stroke(0,200,255,25);
		line(this.particles[i-1].pos.x, this.particles[i-1].pos.y, this.particles[i].pos.x, this.particles[i].pos.y);
	}
};

Scene.prototype.addAttractor = function(pos) {
	this.attractors.push(new attractor(pos));
};