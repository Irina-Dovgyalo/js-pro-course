//let div = document.getElementById("search");
let elem = document.getElementById("get-weather");
elem.addEventListener('click', get);

function get(){
		fetch ("http://api.apixu.com/v1/current.json?key=39e2192ab5be4805b4c190756181912&q=" + document.getElementById('weatherSearch').value)
		.then(response => response.json())
		.then(data => setDataToTable(data), data => console.log(data))
		.catch(error => console.error(error))
}

function setDataToTable(data){
	let table = document.getElementById('table');
	let tr = document.createElement('tr');
	let tdCountry = document.createElement('td');
	let tdCity = document.createElement('td');
	let tdTemp = document.createElement('td');

	// tdCountry.classList.add('new-table');
	// tdCity.classList.add('new-table');
	// tdTemp.classList.add('new-table');

	tdCountry.innerText = data.location.country;
	tdCity.innerText = data.location.name;
	tdTemp.innerText = data.current.temp_c;
	tr.appendChild(tdCountry);
	tr.appendChild(tdCity);
	tr.appendChild(tdTemp);
	table.appendChild(tr);
}











	

