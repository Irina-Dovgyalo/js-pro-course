function Car(name, model, year, color, maxSpeed, fuelCapacity, fuelConsumption){
	this.name = name;
	this.model = model;
	this.year = year;
	this.color = color;
	this.maxSpeed = maxSpeed;
	this.fuelCapacity = fuelCapacity || 60;
	this.fuelConsumption = fuelConsumption || 10;
}

Car.prototype.getFullName = function(name, model){
	console.log(this.model + ' ' + this.name);
}

Car.prototype.getAge = function(){
var date = new Date;
var year = date.getFullYear();
return year - this.year
}

Car.prototype.changeColor = function(newColor){
	if (newColor == this.color) {
		console.log('The color of your car is already red');
	} else {
		this.color = newColor;
		console.log('Now your car is ' + newColor + ' color');
	}
}

Car.prototype.calculateWay = function(kilometers, fuel){
	if (fuel < 10){
		console.log('You need to refuel');
	};
		var speed = this.maxSpeed;
		var time = kilometers / speed;
		console.log ('Your path will takes ' + time.toFixed(1) + ' hour');

//	var fuelCapacityOnAllWay = (kilometers * this.fuelConsumption) / 100;
//	var qualityCapacity = fuelCapacityOnAllWay / this.fuelCapacity;
//	if 	(qualityCapacity > 1) {
//			console.log('You need to refuel ' + qualityCapacity + ' times');	
//	};
}


function FabricCarToyota (model, year, color, maxSpeed, fuelCapacity, fuelConsumption){
	Car.apply(this, arguments);
}

FabricCarToyota.prototype = Car.prototype;

var carToyotaBrevis = new FabricCarToyota('BREVIS', 'Toyota', 1998, 'red', 90, 75, 15);
var carToyotaVitz = new FabricCarToyota('VITZ', 'Toyota', 2008, 'grey', 80);

//FabricCarToyota.prototype = Object.create(Car.prototype);
//
//FabricCarToyota.prototype.constructor = FabricCarToyota;
//
//function FabricCarHonda (model, year, color, maxSpeed, fuelCapacity, fuelConsumption){
//	Car.apply(this, arguments);
//}

//Mitsubishi Debonair
//Mitsubishi Dignity
//Nissan Fairlady
//Nissan Flying Feather
//Toyota VITZ
//Toyota BREVIS
//Subaru DIAS
//Subaru SAMBAR TRY