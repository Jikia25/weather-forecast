const baseUrl = "https://api.weatherapi.com/v1/forecast.json";
const apiKey = "b3a215352e0d4d168fc100144252007";
const defaultCity = "Tbilisi";
const searchForm = document.querySelector(".search-section");

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const searchCity = e.target[0].value;
  weatherForecust(baseUrl, apiKey, searchCity);
});

async function weatherForecust(base, key, city) {
  const url = `${base}?key=${key}&q=${city}&days=14`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    renderWeatherData(json);
    console.log(json);
  } catch (error) {
    console.error(error.message);
  }
}
weatherForecust(baseUrl, apiKey, defaultCity);

function renderWeatherData(weatherObject) {
  const { location, current, forecast } = weatherObject;
  const { name, localtime, country } = location;
  renderRegion(country);
  const { temp_c, condition, feelslike_c, humidity, wind_degree, cloud,uv } =
    current;
  renderCityName(name);
  renderLocalDate(localtime);
  renderTemp(temp_c);
  renderWeatherDescription(condition.text);
  renderIcon(condition.icon);
  renderFeelsLikeTemp(feelslike_c);
  renderHumidity(humidity);
  renderWind(wind_degree);
  renderCloud(cloud);
  renderUv(uv);
  renderSunsetSunrise(
    forecast.forecastday[0].astro.sunset,
    forecast.forecastday[0].astro.sunrise
  );
  renderDailyForecast(forecast.forecastday);
  renderHourlyForecast(forecast.forecastday[0].hour);


function renderDailyForecast(forecastArray) {
  const container = document.querySelector(".daily-forecast-container");
  container.innerHTML = "";

  const fourteenDays = forecastArray.slice(6, 12);

  fourteenDays.forEach((day) => {
    const date = new Date(day.date);
    const dayShort = date.toLocaleDateString("en-GB", {
      weekday: "short",
    });
    const dayDiv = document.createElement("div");
    dayDiv.classList.add("forecast-day");

    const dayName = document.createElement("div");
    dayName.textContent = dayShort;

    const icon = document.createElement("img");
    icon.src = `https:${day.day.condition.icon}`;
    icon.alt = day.day.condition.text;

    const temp = document.createElement("div");
    temp.textContent = `${day.day.avgtemp_c}°C`;

    dayDiv.appendChild(dayName);
    dayDiv.appendChild(icon);
    dayDiv.appendChild(temp);

    container.appendChild(dayDiv);
  });
}
function renderHourlyForecast(hourArray) {
  const container = document.querySelector(".hourly-forecast-container");
  container.innerHTML = "";

  const twelveHours = hourArray.slice(6, 18); 

  twelveHours.forEach((hourData) => {
    const hourDiv = document.createElement("div");
    hourDiv.classList.add("hour-block");

    const time = document.createElement("div");
    const hour = new Date(hourData.time).getHours();
    time.textContent = `${hour}:00`;

    const icon = document.createElement("img");
    icon.src = `https:${hourData.condition.icon}`;
    icon.alt = hourData.condition.text;

    const temp = document.createElement("div");
    temp.textContent = `${hourData.temp_c}°C`;

    hourDiv.appendChild(time);
    hourDiv.appendChild(icon);
    hourDiv.appendChild(temp);

    container.appendChild(hourDiv);
  });
}

  function renderCityName(city) {
    const cityTag = document.querySelector("#city-name");
    cityTag.textContent = city;
  }
  function renderRegion(country) {
    const countryTag = document.querySelector("#country-name");
    countryTag.textContent = country;
  }
  function renderLocalDate(date) {
    const timeTag = document.querySelector("#current-time");
    const dateTag = document.querySelector("#current-date");
    const [currentDate, currentTime] = date.split(" ");
    timeTag.textContent = currentTime;
    dateTag.textContent = currentDate;
  }

  function renderTemp(temp) {
    const tempTag = document.querySelector("#current-temp");
    tempTag.textContent = temp;
  }
  function renderWeatherDescription(description) {
    const descriptionTag = document.querySelector("#weather-description");
    descriptionTag.textContent = description;
  }
  function renderIcon(icon) {
    const iconTag = document.querySelector("#weather-icon");
    const iconUrl = `https:${icon}`;
    iconTag.setAttribute("src", iconUrl);
  }
  function renderFeelsLikeTemp(temp) {
    const feelsLikeTag = document.querySelector("#feels-like");
    const feelsLikeIcon = `Feels Like: ${temp} °C`;
    feelsLikeTag.textContent = feelsLikeIcon;
  }
  function renderSunsetSunrise(sunset, sunrise) {
    const sunsetTag = document.querySelector("#sunset-time");
    sunsetTag.textContent = sunset;
    const sunriseTag = document.querySelector("#sunrise-time");
    sunriseTag.textContent = sunrise;
  }
  function renderHumidity(humidity) {
    const humidityTag = document.querySelector("#humidity-value");
    const humidityIcon = `${humidity} %`;
    humidityTag.textContent = humidityIcon;
  }
  function renderWind(wind) {
    const windTag = document.querySelector("#wind-degree");
    const degreeIcon = `${wind} °`;
    windTag.textContent = degreeIcon;
  }

  function renderCloud(cloud) {
    const cloudTag = document.querySelector("#cloud-value");
    const cloudIcon = `${cloud} %`;
    cloudTag.textContent = cloudIcon;
  }
  function renderUv(uv) {
    const uvTag = document.querySelector("#uv-index-value");
    uvTag.textContent = uv;
  }
}

const toggle = document.getElementById("darkmode-toggle");

if (localStorage.getItem("darkMode") === "enabled") {
  document.body.classList.add("dark-mode");
  toggle.checked = true;
}

toggle.addEventListener("change", () => {
  if (toggle.checked) {
    document.body.classList.add("dark-mode");
    localStorage.setItem("darkMode", "enabled");
  } else {
    document.body.classList.remove("dark-mode");
    localStorage.setItem("darkMode", "disabled");
  }
});
