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

    weatherDiv.appendChild(weatherImg);


};

const createSearchBar = () =>{

    const searchDiv = document.getElementById("search-bar");
    const searchBar = document.createElement("form");

    const bar = document.createElement("input");
    bar.setAttribute("type", "text");
    bar.setAttribute("id", "bar");

    let search = document.createElement('input');
    search.setAttribute('type', 'submit');
    search.setAttribute('value', 'Search City');
    
    search.addEventListener('submit', (event) => {
     
        event.preventDefault(); 

    });
    
    searchBar.appendChild(bar);
    searchBar.appendChild(search);
    searchDiv.appendChild(searchBar);

};


export {createSearchBar, getWeatherImage};