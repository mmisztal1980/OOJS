var Car = function(loc) {
	// this = Object.create(Car.prototype);	// when using 'new'
	this.loc = loc;
	// return this; // when using 'new'
};

Car.prototype.move = function() {
	this.loc++;
}

var amy = new Car(1);
amy.move();

var ben = new Car(9);
ben.move();