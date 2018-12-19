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

Car.prototype.changeColor = function(color){
	if (this.color == 'red') {
		alert('The color of your car is already red');
	} else {
		var newColor = 'green';
		this.color = newColor;
		alert('Now your car is ' + newColor + ' color');
	}
}

function calculateWay (){
//взять 2 параметра: километры и топливо;
//проверить, если топливо <10, показать сообщение о заправке;
//рассчитать время, необходимое для достижения пункта назначения, показать сообщение об этом;
//проверьте, если вам нужно заправиться на дороге и показать сообщение (сколько раз вам нужно заправиться)
}


function FabricCarToyota (model, year, color, maxSpeed, fuelCapacity, fuelConsumption){
	Car.apply(this, arguments);
}

FabricCarToyota.prototype = Car.prototype;

var carToyotaBrevis = new FabricCarToyota('BREVIS', 'Toyota', 1998, 'red', 150, 50);
var carToyotaVitz = new FabricCarToyota('VITZ', 'Toyota', 2008, 'grey');

//FabricCarToyota.prototype = Object.create(Car.prototype);
//
//FabricCarToyota.prototype.constructor = FabricCarToyota;
//
//function FabricCarHonda (model, year, color, maxSpeed, fuelCapacity, fuelConsumption){
//	Car.apply(this, arguments);
//}

//Mitsubishi Debonair   - обходительность и вежливость
//Mitsubishi Dignity - чувство собственного достоинства
//Nissan Fairlady - прекрасная леди
//Nissan Flying Feather - летящее перо
//Toyota VITZ - яркий, остроумный, талантливый
//Toyota BREVIS - мужественный, отважный, смелый, храбрый
//Subaru DIAS - ежедневный, на каждый день
//Subaru SAMBAR TRY