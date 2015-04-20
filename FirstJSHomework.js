// Javascript homework assignment

// Homework : Make an airplane object, define the attributes - name, speed, isGrounded (boolean), color, and give the plane the behaviors of - takeFlight, which can only work if the plane is currently grounded, speedUp, which only works when the airplane is in the air and it uses a for loop to change its speed based on the parameter speed given. And slowDown, which uses a while loop to decrement the speed to the parameter speed. And sayCurrentCondition, which uses a for in loop to say all the airplanes key and vales.

var Airplane = {
	
	// These are the ATTRIBUTES

	myName: 'Boeing 737',
	myColor: 'Ivory',
	mySpeed: 300, //mph
	maxSpeed: 544, //mph
	stallSpeed: 168, //mph
	isGrounded: false,


	// These are the BEHAVIORS

	takeFlight: function(){
		// works only if the plane is currently grounded
		if(this.isGrounded){
			console.log('Aircraft preparing for takeoff.')
		}
		else{
			console.log('Flight currently in progress.')
		}
	},

	speedUp: function(x){
		// works only when the airplane is in the air
		// it uses a for loop to change its speed based on the parameter speed given

		if(this.isGrounded){
			console.log('The aircraft is grounded.')
		}
		else{ // let's say desired speed is 200, current speed is 155
			for(i = this.mySpeed+1; i <= x; i++){
				var newSpeed = i;
				console.log(newSpeed);
				for(; i === x; i++){
					var newSpeed = i;
					console.log('Aircraft speed has been INCREASED to ' + newSpeed + ' mph.')
				}
			}
		}
	},

	slowDown: function(x){
		// works only when the airplane is in the air
		// uses a while loop to decrement speed to the parameter speed
		// max air speed: 544 mph
		// stall speed: 168 mph

		if(this.isGrounded){
			console.log('The aircraft is grounded.')
		}
		else{ // let's say desired speed is 155, current speed is 200
			var i = this.mySpeed-1;
			while(i >= x){
				var newSpeed = i;
				i--;
				console.log(newSpeed);
				for(; i === x; i--){
					var newSpeed = i;
					console.log('Aircraft speed has been DECREASED to ' + newSpeed + ' mph.')
				}
			}
		}
	},

	sayCurrentCondition: function(){
	// uses a for in loop to say all of the airplane's keys and values
		for(var key in Airplane){
			console.log('The key is ' + key + ' and the value is ' + Airplane[key] + '.');
		}
	}

}


console.log(Airplane);

console.log(Airplane.myName);
console.log(Airplane.myColor);
console.log(Airplane.mySpeed);
console.log(Airplane.isGrounded);

Airplane.takeFlight();

Airplane.speedUp(Airplane.maxSpeed);

Airplane.slowDown(Airplane.stallSpeed);

//QUESTION: can the result of a behavior (function of the object) change a fundamental attribute of the object? e.g. speedUp function new speed output replaces the Airplane object's mySpeed attribute value defined initially?

Airplane.sayCurrentCondition();

