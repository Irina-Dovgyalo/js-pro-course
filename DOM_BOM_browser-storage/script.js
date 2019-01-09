const elem = document.getElementById("get-weather");
elem.addEventListener('click', getWeather);

const input = document.getElementById('weatherSearch');
const tbody = document.getElementById('table-body');
const clearButton = document.getElementById('clear');
clearButton.addEventListener('click', clearDataTable);

const myLocation = document.getElementById('my-weather');
myLocation.addEventListener('click', getWeatherByLocation);

function getWeather(value){
		fetch ("http://api.apixu.com/v1/current.json?key=39e2192ab5be4805b4c190756181912&q=" + `${input.value || value}`)
		.then(response => response.json())
		.then(data => setDataToTable(data), data => console.log(data))
		.catch(error => console.error(error))
}

function clearDataTable(){
	tbody.innerHTML = '';
}

function setDataToTable(data){
	let tableBody = document.getElementById('table-body');
	let tr = document.createElement('tr');
	let tdCountry = document.createElement('td');
	let tdCity = document.createElement('td');
	let tdTemp = document.createElement('td');

	tdCountry.innerText = data.location.country;
	tdCity.innerText = data.location.name;
	tdTemp.innerText = data.current.temp_c;
	tr.appendChild(tdCountry);
	tr.appendChild(tdCity);
	tr.appendChild(tdTemp);
	tableBody.appendChild(tr);
}


function getWeatherByLocation(){
	navigator.geolocation.getCurrentPosition(({coords}) => getWeather(`${coords.latitude}, ${coords.longitude}`));
		// var lat = coords.latitude;
		// var long = coords.longitude;
		// console.log(lat.toFixed(2) + ' ' + long.toFixed(2));
}













	

