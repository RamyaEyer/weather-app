import css from "../style.css";

const url = "http://api.openweathermap.org/data/2.5/weather?q=toronto&appid=" + process.env.API_KEY;

async function getWeather () {

  const response = await fetch (url);
  var weatherInfo = await response.json();
  //document.body.textContent = weatherInfo.name;
  console.log(weatherInfo);

}


