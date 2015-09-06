// Base class definition
var Car = function(loc) {
	// this = Object.create(Car.prototype); // (new)
	this.loc = loc;	
	// return this; // (new)
};

// Base class .move() f-ction
Car.prototype.move = function() {
	this.loc++;
};

// Invokes the Car f-ction in the context of the Van function by passing 'this'
// Van.prototype now delegates to object.prototype
var Van = function(loc){
	Car.call(this, loc);
}

// Van.prototype lookups now delegate to Car.prototype so move() is available on Van
Van.prototype = Object.create(Car.prototype);

// Constructor lookups now properly point to Van
Van.prototype.constructor = Van;

// .grab() is available to all Van instances
Van.prototype.grab = function() {
	// (...)
};