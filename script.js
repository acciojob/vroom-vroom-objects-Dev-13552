// Complete the js code
function Car(make, model) {
	this.make = make
	this.model = model
	this.getMakeModel = ()=>{
		return `${this.make} ${this.model}`
	}
}

function SportsCar(make, model, topSpeed) {
	Car.call(this, make, model)
	this.topSpeed = topSpeed
	this.getTopSpeed = ()=>{
		return this.topSpeed
	}
}

// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;
