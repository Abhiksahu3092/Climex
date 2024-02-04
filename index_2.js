async function get_aqi(city) {
	const url_2 = 'https://the-weather-api.p.rapidapi.com/api/weather/'+city;
	const options_2 = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': 'e2c4ccfc5dmsh9cb45b163c828b2p112bd6jsn2dd79ffd3294',
			'X-RapidAPI-Host': 'the-weather-api.p.rapidapi.com'
		}
	};

	try {
		const response = await fetch(url_2, options_2);
		const input_aqi=response.json();

		aqi.innerHTML=input_aqi.aqi;
		//const result = await response.text();
		//console.log(result);
	} catch (error) {
		console.error(error);
	}
}

input_data.addEventListener("click", (e) => {
	e.preventDefault();
	get_aqi(city.value);
	//get_aqi(city.value);
})

get_aqi("bhubaneswar");