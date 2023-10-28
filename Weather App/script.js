const inputBox = document.querySelector('.input-box');
const searchBtn = document.getElementById('searchBtn');
const weather_img = document.querySelector('.weather-img');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const humidity = document.getElementById('humidity');
const wind_speed = document.getElementById('wind-speed');

const location_not_found = document.querySelector('.location-not-found');

const weather_body = document.querySelector('.weather-body');

// location_not_found(default css style is none)
// weather_body(default css style is flex (as show on page in the starting))
// we will change the style.display of location_not_found and weather_body according to the city name from none to flex and vice versa
// style.display=flex  means the default style as given in the style.css 

async function checkWeather(city){
    const api_key = "1a2dcc4fd94437d462a623bed60a98bc";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    const weather_data = await fetch(`${url}`).then(response => response.json());   // storing all the weather data in this variable(like temp , wind speed, humidity)

    // if entered wrong city name
    if(weather_data.cod === `404`){
        location_not_found.style.display = "flex";   // in css display is none when we enter wrong city it will change the display from none to flex
        weather_body.style.display = "none";        // it will make the display none  of previously showing result or (of the default img of sun and cloud) 
        console.log("error");
        inputBox.value="";
        return;
        
    }

    // if entered right city name
    console.log("run");
    location_not_found.style.display = "none";   // when the city is right it will make display none of any previous not found img 
    weather_body.style.display = "flex";     // it will chang the display from none -> flex of weather_body(because previously due to wrong city the display of weather_body changed to none )

    temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;
    description.innerHTML = `${weather_data.weather[0].description}`;
    humidity.innerHTML = `${weather_data.main.humidity}%`;
    wind_speed.innerHTML = `${weather_data.wind.speed}Km/H`;


    // it will change the img through the DOM manipulation
    switch(weather_data.weather[0].main){
        case 'Clouds':
            weather_img.src = "/assets/cloud.png";
            break;
        case 'Clear':
            weather_img.src = "/assets/clear.png";
            break;
        case 'Rain':
            weather_img.src = "/assets/rain.png";
            break;
        case 'Mist':
            weather_img.src = "/assets/mist.png";
            break;
        case 'Snow':
            weather_img.src = "/assets/snow.png";
            break;

    }

    console.log(weather_data);
    inputBox.value = "";
}

// when we click on search icon then value of input box is passed through this func
searchBtn.addEventListener('click', ()=>{
    checkWeather(inputBox.value);           // value = any city name
});