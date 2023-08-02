import Clear from "./images/clear.png";
import Clouds from "./images/clouds.png";
import Drizzle from "./images/drizzle.png";
import Mist from "./images/mist.png";
import Rain from "./images/rain.png";
import Snow from "./images/snow.png";
import Search from "./images/search.png";


const chooseWeatherImage = (weatherCondition) => {

    if(weatherCondition === "Clear"){

        return Clear;

    }

    else if(weatherCondition === "Clouds"){

        return Clouds;

    }

    else if(weatherCondition === "Drizzle"){

        return Drizzle;

    }

    else if(weatherCondition === "Mist"){

        return Mist;

    }

    else if(weatherCondition === "Rain"){

        return Rain;

    }

    else if(weatherCondition === "Snow"){

        return Snow;

    }

};

const getWeatherImage = (weatherCondition) => {

    
    const weatherDiv = document.getElementById('weather');
    const weatherImg = new Image();
    weatherImg.src = chooseWeatherImage(weatherCondition);
    weatherImg.setAttribute('id', 'weather-img');
    weatherDiv.appendChild(weatherImg);


};

const removeWeatherImage = () =>{

    const weatherDiv = document.getElementById('weather');
    const weatherImg = document.getElementById('weather-img');
    
    if(weatherDiv.contains(weatherImg)){

        weatherImg.removeChild(weatherImg);

    }
        
}

export {getWeatherImage, removeWeatherImage};