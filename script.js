const apiKey = "d30fbf48b8e0902eb2ab19455a6fd747";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric";

const cityName = document.querySelector('.city');
const cityTemp = document.querySelector('.temp');
const humidity = document.querySelector('.humidity');
const wind = document.querySelector('.wind');

const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');
const weather = document.querySelector('.weather');
const weatherIcon = document.querySelector('.weather-icon');


async function checkWeather(city) {
    try {
        const response = await fetch(apiUrl + `&q=${city}&appid=${apiKey}`);
        var data = await response.json();
    
        // console.log(data);
    
        cityName.innerHTML = data.name;
        cityTemp.innerHTML = `${Math.round(data.main.temp)}°c`;
        humidity.innerHTML = `${data.main.humidity}%`;
        wind.innerHTML = `${data.wind.speed} km/h`;
    }
    catch (error){
        console.log(error);
    }
    
    if(data.weather[0].main === "Clouds"){
        weatherIcon.src = "images/clouds.png";
    }
    else if(data.weather[0].main === "Clear"){
        weatherIcon.src = "images/clear.png";
    }
    else if(data.weather[0].main === "Rain"){
        weatherIcon.src = "images/rain.png";
    }
    else if(data.weather[0].main === "Drizzle"){
        weatherIcon.src = "images/drizzle.png";
    }
    else if(data.weather[0].main === "Mist"){
        weatherIcon.src = "images/mist.png";
    }

    weather.style.display = "block";
}

searchBtn.addEventListener('click', () => {
    checkWeather(searchBox.value);
    searchBox.value = "";
});

searchBox.addEventListener('keypress', (e) => {
    if (e.keyCode === 13) {
      checkWeather(searchBox.value);
      searchBox.value = "";
    }
});
  