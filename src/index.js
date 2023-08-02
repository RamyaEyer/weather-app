import css from "../style.css";
import { getWeatherImage, removeWeatherImage } from "./script";

const url = "http://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchInput = document.querySelector("#search-input");
const searchButton = document.querySelector("#search-button");

async function getWeather (cityName) {

  const response = await fetch (url + cityName + "&appid=" + process.env.API_KEY );
  var weatherInfo = await response.json();

  const city = document.getElementById('city');
  const conditons = document.getElementById('weather-desc');
  const mainTemp = document.getElementById('main-temp');
  const maxTemp = document.getElementById('max-temp');
  const minTemp = document.getElementById('min-temp');
  
  city.textContent = weatherInfo.name + " Weather";
  conditons.textContent = weatherInfo["weather"][0]["main"];
 
  mainTemp.textContent = weatherInfo.main.temp + "°C";
  maxTemp.textContent = "Max Temp: " + weatherInfo.main.temp_max + "°C";
  minTemp.textContent = "Min Temp: " + weatherInfo.main.temp_min + "°C";

  removeWeatherImage();
  getWeatherImage(weatherInfo["weather"][0]["main"]);
  

  console.log(weatherInfo);

}

searchButton.addEventListener("click", () => {
  
  getWeather(searchInput.value);


});



