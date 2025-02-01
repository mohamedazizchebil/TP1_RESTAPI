const API_KEY = "38f9264b8e345e5059d64b5e08c19663";
const BASE_URL = "http://api.openweathermap.org/data/2.5/weather?appid=" + API_KEY + "&units=metric&lang=fr&q=";
function getWeatherData(city){
  const url = BASE_URL + city;
  fetch(url).then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log("Description : " + data.weather[0].description);
    console.log("Température : " + data.main.temp + "°C");
    console.log("Humidité : " + data.main.humidity + "%");
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });
    
}
getWeatherData("Sousse");
  
  
  