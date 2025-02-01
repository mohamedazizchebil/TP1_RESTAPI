const axios = require('axios');
const API_KEY = "38f9264b8e345e5059d64b5e08c19663";
const BASE_URL = "http://api.openweathermap.org/data/2.5/weather?appid=" + API_KEY + "&units=metric&lang=fr&q=";
async function getWeatherData(city){
  try{
    const url = BASE_URL + city;
    const res = await axios.get(url);
    const response = res.data;
    console.log("Description : " + response.weather[0].description);
    console.log("Température : " + response.main.temp + "°C");
    console.log("Humidité : " + response.main.humidity + "%");

  }
  catch (error) {
    console.error(error);
  }
  
  
}
getWeatherData("Sousse");