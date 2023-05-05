async function fetchweatherData() {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=Slough&appid=79b2dd6a4e862ef385bc174734356894&units=metric`
  );

  const today = new Date();
  const date = document.querySelector(".date");
  date.innerText = dateFunction(today);


  const data = await response.json();
  const cityName = document.getElementById("cityName");
  cityName.innerHTML = data.name;
  const temperature = document.getElementById("temperature");
  temperature.innerHTML = data.main.temp;
  const description = document.getElementById("description");
  description.innerHTML = data.weather[0].main;
  const humidity = document.getElementById("humidity");
  humidity.innerHTML = data.main.humidity;
  // const rainfall = document.getElementById("rainfall");
  // rainfall.innerHTML = data.main.humidity;
  const windSpeed = document.getElementById("windSpeed");
  windSpeed.innerHTML = data.wind.speed;
  const pressure = document.getElementById("pressure");
  pressure.innerHTML = data.main.pressure;
  console.log(data);
}
fetchweatherData();

async function fetchWeatherData() {
  const searchField = document.getElementById("search-input");
  const city = searchField.value;
  if (city) {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=79b2dd6a4e862ef385bc174734356894&units=metric`
      );

      if (response.ok) {
        const data = await response.json();
        const cityName = document.getElementById("cityName");
        cityName.innerHTML = data.name;
        const temperature = document.getElementById("temperature");
        temperature.innerHTML = data.main.temp;
        const description = document.getElementById("description");
        description.innerHTML = data.weather[0].main;
        const humidity = document.getElementById("humidity");
        humidity.innerHTML = data.main.humidity;
        // const rainfall = document.getElementById("rainfall");
        // rainfall.innerHTML = data.main.humidity;
        const windSpeed = document.getElementById("windSpeed");
        windSpeed.innerHTML = data.wind.speed;
        const pressure = document.getElementById("pressure");
        pressure.innerHTML = data.main.pressure;
        console.log(data);
        const error = document.getElementById("error");
        error.style.display = "none";
        const weatherData = document.getElementById("weather-data");
        weatherData.style.display = "block";
      } else {
        const error = document.getElementById("error");
        error.innerHTML = "City not found";
        error.style.display = "block";
        const weatherData = document.getElementById("weather-data");
        weatherData.style.display = "none";
      }
    } catch (error) {
      console.error(error);
    }
  }
}

function dateFunction(d) {
  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let day = days[d.getDay()];
  let date = d.getDate();
  let month = months[d.getMonth()];
  let year = d.getFullYear();

  return `${day}, ${date} ${month} ${year}`;
}

document.addEventListener("DOMContentLoaded", function () {
  const searchBtn = document.getElementById("search-btn");
  searchBtn.addEventListener("click", fetchWeatherData);

  const searchField = document.getElementById("search-field");
  searchField.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      fetchWeatherData();
    }
  });
});
