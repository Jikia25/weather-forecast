import weatherData from "./data.js";

// OpenWeatherMap API Key
const API_KEY ="cf790f066e846b086f9b50a2f6cd6b66";

// ელემენტები DOM-დან
const citySearchInput = document.getElementById("city-search-input");
const currentLocationBtn = document.getElementById("current-location-btn");
const darkModeToggle = document.getElementById("darkmode-toggle");

const cityNameEl = document.getElementById("city-name");
const currentTimeDateEl = document.querySelector(".current-time-date");
const currentTempEl = document.getElementById("current-temp");
const feelsLikeEl = document.getElementById("feels-like");
const weatherIconEl = document.getElementById("weather-icon");
const weatherDescriptionEl = document.getElementById("weather-description");
const humidityEl = document.getElementById("humidity-value");
const windSpeedEl = document.getElementById("wind-speed-value");
const pressureEl = document.getElementById("pressure-value");
const uvIndexEl = document.getElementById("uv-index-value");
const sunriseEl = document.getElementById("sunrise-time");
const sunsetEl = document.getElementById("sunset-time");

const dailyForecastContainer = document.querySelector(
  ".daily-forecast-container"
);
const hourlyForecastContainer = document.querySelector(
  ".hourly-forecast-container"
);

// თარიღისა და დროის ფორმატირება
function formatDateTime(timestamp, timezoneOffsetSeconds) {
  const date = new Date((timestamp + timezoneOffsetSeconds) * 1000);
  return {
    time: date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    }),
    date: date.toLocaleDateString("en-US", {
      weekday: "long",
      day: "numeric",
      month: "short",
    }),
  };
}

function formatTime(timestamp, timezoneOffsetSeconds) {
  const date = new Date((timestamp + timezoneOffsetSeconds) * 1000);
  return date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
}

// UI განახლება
function updateUI(data) {
  if (!data || !data.current_weather || !data.forecast_5_days) {
    console.error("Invalid weather data received.");
    return;
  }

  const current = data.current_weather;
  const forecastList = data.forecast_5_days.list;
  const timezoneOffset = current.timezone;

  cityNameEl.textContent = current.name;
  const { time, date } = formatDateTime(current.dt, timezoneOffset);
  currentTimeDateEl.innerHTML = `<span class="time">${time}</span>, ${date}`;
  currentTempEl.innerHTML = `${Math.round(
    current.main.temp
  )}<span class="unit">°C</span>`;
  feelsLikeEl.textContent = `Feels like: ${Math.round(
    current.main.feels_like
  )}°C`;
  weatherIconEl.src = `https://openweathermap.org/img/wn/${current.weather[0].icon}@2x.png`;
  weatherIconEl.alt = current.weather[0].description;
  weatherDescriptionEl.textContent = current.weather[0].description;

  humidityEl.textContent = `${current.main.humidity}%`;
  windSpeedEl.textContent = `${Math.round(current.wind.speed * 3.6)} km/h`;
  pressureEl.textContent = `${current.main.pressure} hPa`;
  uvIndexEl.textContent = "N/A";

  sunriseEl.textContent = formatTime(current.sys.sunrise, timezoneOffset);
  sunsetEl.textContent = formatTime(current.sys.sunset, timezoneOffset);

  // 5 დღის პროგნოზი
  dailyForecastContainer.innerHTML = "";
  const dailyData = {};

  forecastList.forEach((item) => {
    const itemDate = new Date((item.dt + timezoneOffset) * 1000);
    const dayKey = itemDate.toDateString();

    if (!dailyData[dayKey] || itemDate.getHours() === 12) {
      dailyData[dayKey] = item;
    }
  });

  Object.values(dailyData)
    .slice(0, 5)
    .forEach((item) => {
      const itemDate = new Date((item.dt + timezoneOffset) * 1000);
      const dayName = itemDate.toLocaleDateString("en-US", {
        weekday: "short",
      });
      const dayNumber = itemDate.toLocaleDateString("en-US", {
        day: "numeric",
      });
      const monthName = itemDate.toLocaleDateString("en-US", {
        month: "short",
      });

      const dailyItem = document.createElement("div");
      dailyItem.classList.add("day-forecast-item");
      dailyItem.innerHTML = `
      <img src="https://openweathermap.org/img/wn/${
        item.weather[0].icon
      }@2x.png" alt="${item.weather[0].description}">
      <div class="day-temp">${Math.round(item.main.temp)}°C</div>
      <div class="day-name">${dayName}, ${dayNumber} ${monthName}</div>
    `;
      dailyForecastContainer.appendChild(dailyItem);
    });

  // საათობრივი პროგნოზი
  hourlyForecastContainer.innerHTML = "";
  forecastList.slice(0, 5).forEach((item) => {
    const itemDate = new Date((item.dt + timezoneOffset) * 1000);
    const hourTime = itemDate.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });

    const hourlyItem = document.createElement("div");
    hourlyItem.classList.add("hour-forecast-item");
    hourlyItem.innerHTML = `
      <div class="hour-time">${hourTime}</div>
      <img src="https://openweathermap.org/img/wn/${
        item.weather[0].icon
      }@2x.png" alt="${item.weather[0].description}">
      <div class="hour-temp">${Math.round(item.main.temp)}°C</div>
      <div class="hour-wind"><i class="fa-solid fa-wind" style="transform: rotate(${
        item.wind.deg
      }deg);"></i> ${Math.round(item.wind.speed * 3.6)} km/h</div>
    `;
    hourlyForecastContainer.appendChild(hourlyItem);
  });
}

// გეოლოკაციის მიღება
function getUserLocation() {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject("Geolocation not supported");
    } else {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          resolve({
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          });
        },
        (error) => reject(error.message)
      );
    }
  });
}

// რეალური ამინდის მონაცემების მიღება
async function fetchWeatherByCoords(lat, lon) {
  const url = `https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}`;
  const response = await fetch(url);
  if (!response.ok) throw new Error("Failed to fetch weather data");
  return await response.json();
}

// მონაცემების კონვერტაცია UI-ისთვის
function convertOpenWeatherDataToStaticFormat(apiData) {
  const current = apiData.current;
  const daily = apiData.daily;
  const timezoneOffset = apiData.timezone_offset;

  const current_weather = {
    coord: { lon: apiData.lon, lat: apiData.lat },
    weather: current.weather,
    base: "stations",
    main: {
      temp: current.temp,
      feels_like: current.feels_like,
      temp_min: daily[0].temp.min,
      temp_max: daily[0].temp.max,
      pressure: current.pressure,
      humidity: current.humidity,
    },
    visibility: current.visibility || 10000,
    wind: {
      speed: current.wind_speed,
      deg: current.wind_deg,
    },
    clouds: { all: current.clouds },
    dt: current.dt,
    sys: {
      sunrise: current.sunrise,
      sunset: current.sunset,
      country: "N/A",
    },
    timezone: timezoneOffset,
    id: 0,
    name: "Current Location",
    cod: 200,
  };

  const forecast_5_days = {
    cod: "200",
    message: 0,
    cnt: daily.length,
    list: daily.map((day) => ({
      dt: day.dt,
      main: {
        temp: day.temp.day,
        feels_like: day.feels_like.day,
        temp_min: day.temp.min,
        temp_max: day.temp.max,
        pressure: day.pressure,
        sea_level: day.sea_level || day.pressure,
        grnd_level: day.grnd_level || day.pressure,
        humidity: day.humidity,
        temp_kf: 0,
      },
      weather: day.weather,
      clouds: { all: day.clouds },
      wind: {
        speed: day.wind_speed,
        deg: day.wind_deg,
        gust: day.wind_gust || 0,
      },
      visibility: 10000,
      pop: day.pop || 0,
      sys: { pod: "d" },
      dt_txt: new Date((day.dt + timezoneOffset) * 1000)
        .toISOString()
        .replace("T", " ")
        .substring(0, 19),
    })),
    city: {
      id: 0,
      name: "Current Location",
      coord: { lat: apiData.lat, lon: apiData.lon },
      country: "N/A",
      population: 0,
      timezone: timezoneOffset,
      sunrise: current.sunrise,
      sunset: current.sunset,
    },
  };

  return { current_weather, forecast_5_days };
}

// რეალური მონაცემების ჩვენება UI-ში
async function fetchAndShowWeather(lat, lon) {
  try {
    const apiData = await fetchWeatherByCoords(lat, lon);
    const convertedData = convertOpenWeatherDataToStaticFormat(apiData);
    updateUI(convertedData);
  } catch (err) {
    console.error(err);
    updateUI(weatherData); // fallback სტატიკური მონაცემი
  }
}

// Dark Mode Toggle
darkModeToggle.addEventListener("change", () => {
  document.body.classList.toggle("dark-mode", darkModeToggle.checked);
});

// Current Location Button
currentLocationBtn.addEventListener("click", async () => {
  try {
    const { lat, lon } = await getUserLocation();
    await fetchAndShowWeather(lat, lon);
  } catch (error) {
    alert("Failed to get location: " + error);
    updateUI(weatherData);
  }
});

// City Search - ახლა სტატიკურია, შეგიძლია მომავალში გაამჯობინო
citySearchInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    alert("City search is currently using static data. No live API call.");
    updateUI(weatherData);
  }
});

// გვერდის ჩატვირთვა - აჩვენებს რეალურ ადგილმდებარეობის ამინდს თუ შესაძლებელი
document.addEventListener("DOMContentLoaded", async () => {
  try {
    const { lat, lon } = await getUserLocation();
    await fetchAndShowWeather(lat, lon);
  } catch {
    updateUI(weatherData);
  }
});
