const userCity = document.getElementById("city");
const submitBtn = document.getElementById("submitBtn");
const currentWeather = document.getElementById("weather");
const cityBtns = document.getElementById("bonus-buttons");

const cityStorage = {
  currentCity: "",
  cityArr: [],
  setCurrentCity(city) {
    this.currentCity = city;
    localStorage.setItem("current-city", this.currentCity);
  },
  setCityArr(incomingCity) {
    for (let i = 0; i < this.cityArr.length; i++) {
      const cityInArray = this.cityArr[i];
      if (incomingCity.toLowerCase() === cityInArray.toLowerCase()) {
        return;
      }
    }
    this.cityArr.push(incomingCity);
    console.log(this.cityArr);
    localStorage.setItem("cities", JSON.stringify(this.cityArr));
  },
  getCurrentCity() {
    this.currentCity = localStorage.getItem("current-city");
    return this.currentCity;
  },
  getCityArr() {
    if (localStorage.getItem("cities")) {
      this.cityArr = JSON.parse(localStorage.getItem("cities"));
    }
    return this.cityArr;
  },
};

const getWeather = (city) => {
  return fetch(
    `https://api.weatherapi.com/v1/current.json?key=46e1df487c204aaea80231816211312&q=${city}`
  );
};

const displayWeather = async (city) => {
  cityStorage.setCurrentCity(city);
  cityStorage.setCityArr(city);
  const response = await getWeather(city);
  const data = await response.json();
  let weather = data.current;
  currentWeather.innerHTML = `
    <h2>${city}</h2>
    <h3>${weather.condition.text}</h3>
    <img src="https:${weather.condition.icon}" alt="${weather.condition.text}">
    <h3>Humidity: ${weather.humidity}</h3>
    <h3>Temperature: ${weather.temp_f}</h3>
    <h3>Feels Like: ${weather.feelslike_f}</h3>
    <h3>Wind: ${weather.wind_mph}</h3>
    `;
};

const setClickedCity = (event) => {
  let city = event.target.innerHTML;
  cityStorage.setCurrentCity(city);
  displayWeather(city);
};

const displayCityButtons = () => {
  cityBtns.innerHTML = "";
  cityStorage.cityArr.forEach((city) => {
    cityBtns.innerHTML += `<button type="button" onclick="setClickedCity(event)" id="submitBtn">${city}</button>`;
  });
};

const pageLoad = () => {
  const currentCity = cityStorage.getCurrentCity();
  cityStorage.getCityArr();
  if (currentCity) {
    displayWeather(currentCity);
    displayCityButtons();
  }
};

submitBtn.addEventListener("click", function (e) {
  e.preventDefault();
  let currentCity = userCity.value.trim();
  if (currentCity === ""){
    return;
  }
  displayWeather(currentCity);
  displayCityButtons();
  userCity.value = "";
});

userCity.addEventListener("onkeydown", function (e) {
  e.preventDefault();
  let currentCity = userCity.value.trim();
  if (currentCity === ""){
    return;
  }
  if (e.keyCode == 13) {
    displayWeather(currentCity);
    displayCityButtons();
    userCity.value = "";
  }
});

pageLoad();
