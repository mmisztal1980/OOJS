var Car = function(loc) {
	var obj = {loc: loc};
	
	extend(obj, Car.methods);
	
	return obj;
}

// Car methods moved out of global scope and 
// hidden as a property of Car
Car.methods = {
	move : function() {
		this.loc++;
	}
};

var amy = Car(1);
amy.move();

var ben = Car(9);
ben.move();