var div = document.getElementById("search");
var elem = document.getElementById("button");
elem.addEventListener('click', get);

function get(){
		fetch ("http://api.apixu.com/v1/current.json?key=39e2192ab5be4805b4c190756181912&q=" + document.getElementById('weatherSearch').value)
		.then(response => response.json())
		.then(data => div.innerHTML = data.location.country + ', ' + data.location.name + ": " + data.current.temp_c + " °C", data => console.log(data))
		.catch(error => console.error(error))
}

var input = document.getElementById('weatherSearch');


//clear div
input.oninput = function () {
	if ( this.value == '' ) {
  		div.innerHTML = '';
  }
};







	

