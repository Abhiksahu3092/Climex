async function get_data(city) {
	const url_1 = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city;
	const options_1 = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': 'e2c4ccfc5dmsh9cb45b163c828b2p112bd6jsn2dd79ffd3294',
			'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
		}
	};

	city_name.innerHTML = city;
	try {
		const response_1 = await fetch(url_1, options_1);
		const data_1 = await response_1.json();

		/*const response_2 = await fetch(url_2, options_2);
		const data_2 = await response_2.json();*/


		cloud_pct.innerHTML = data_1.cloud_pct;
		temp.innerHTML = data_1.temp + "°C";
		feels_like.innerHTML="Feels like: "+data_1.feels_like+ " °C";
		humidity.innerHTML = data_1.humidity + "%";
		min_temp.innerHTML="Min. temp: "+data_1.min_temp+" °C";
		max_temp.innerHTML="Max. temp: "+data_1.max_temp+" °C";
		wind_speed.innerHTML = data_1.wind_speed;
		wind_degrees.innerHTML="Wind degrees: "+data_1.wind_degrees+" °";
		sunrise.innerHTML = "Sunrise: " + data_1.sunrise;
		sunset.innerHTML = "Sunset: " + data_1.sunset;

		//console.log(response);
		//console.log(city);
	} catch (error) {
		console.error(error);
	}

}



input_data.addEventListener("click", (e) => {
	e.preventDefault();
	get_data(city.value);
	//get_aqi(city.value);
})

get_data("delhi");
//get_aqi("bhubaneswar");