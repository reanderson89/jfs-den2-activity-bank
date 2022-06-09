const userCity = document.getElementById("city");
const submitBtn = document.getElementById("submitBtn");
const currentWeather = document.getElementById("weather");
const cityBtns = document.getElementById("bonus-buttons");


const cityStorage = {
    currentCity: "",
    cityBtnArr: [],
    setCurrentCity(city){
        this.currentCity = city;
        localStorage.setItem("current-city", this.currentCity)
        
    },
    setCityArr(city){
        this.cityBtnArr.push(city);
        localStorage.setItem("cities", JSON.stringify(this.cityBtnArr))
    },
    getCurrentCity(){
        this.currentCity = localStorage.getItem("current-city")
        displayWeather();
        return this.currentCity;
    },
    getCityArr(){
        this.cityBtnArr = JSON.parse(localStorage.getItem("cities"));
        return this.cityBtnArr;
    }

}




const getWeather = (city) => {
    return fetch(`https://api.weatherapi.com/v1/current.json?key=46e1df487c204aaea80231816211312&q=${city}`)
}

const displayWeather = async () => {

    let currentCity = "";
    if(userCity.value){
        cityStorage.setCurrentCity(userCity.value);
        cityStorage.setCityArr(userCity.value);
        currentCity = cityStorage.currentCity;
    } else {
        currentCity = localStorage.getItem("current-city")
    }
    const response = await getWeather(currentCity);
    const data = await response.json();
    let weather = data.current;
    currentWeather.innerHTML = `
    <h2>${currentCity}</h2>
    <h3>${weather.condition.text}</h3>
    <img src="https:${weather.condition.icon}" alt="${weather.condition.text}">
    <h3>Humidity: ${weather.humidity}</h3>
    <h3>Temperature: ${weather.temp_f}</h3>
    <h3>Feels Like: ${weather.feelslike_f}</h3>
    <h3>Wind: ${weather.wind_mph}</h3>
    `

}


cityStorage.getCurrentCity();
cityStorage.getCityArr();

['click','submit'].forEach( evt => 
    submitBtn.addEventListener(evt, displayWeather)
);


