import css from "../style.css";
import { createSearchBar, getWeatherImage } from "./script";

const url = "http://api.openweathermap.org/data/2.5/weather?units=metric&q=toronto&appid=" + process.env.API_KEY;

async function getWeather () {

  const response = await fetch (url);
  var weatherInfo = await response.json();

  const city = document.getElementById('city');
  const conditons = document.getElementById('weather-desc');
  const maxTemp = document.getElementById('max-temp');
  const minTemp = document.getElementById('min-temp');
  
  city.textContent = weatherInfo.name + " Weather";
  conditons.textContent = weatherInfo["weather"][0]["main"];
 
  maxTemp.textContent = weatherInfo.main.temp_max;
  minTemp.textContent = weatherInfo.main.temp_min;

  getWeatherImage(weatherInfo["weather"][0]["main"]);
  

  console.log(weatherInfo);

}

createSearchBar();
getWeather();


