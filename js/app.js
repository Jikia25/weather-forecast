document.addEventListener("DOMContentLoaded", () => {
  const baseUrl = "https://api.weatherapi.com/v1/forecast.json";
  const apiKey = "b3a215352e0d4d168fc100144252007";
  const defaultCity = "Tbilisi";
  const searchForm = document.querySelector(".search-section");
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

  searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const searchCity = e.target[0].value.trim();
    if (searchCity) {
      weatherForecast(baseUrl, apiKey, searchCity);
    }
  });

  async function weatherForecast(base, key, city) {
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

  weatherForecast(baseUrl, apiKey, defaultCity);

  // ------------ Render Functions ------------

  function renderWeatherData(weatherObject) {
    const { location, current, forecast } = weatherObject;
    const { name, localtime, country } = location;

    renderRegion(country);

    const { temp_c, condition, feelslike_c, humidity, wind_degree, cloud, uv } =
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
    initScrolling();
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

  function renderDailyForecast(forecastArray) {
    const container = document.querySelector(".daily-forecast-container");
    container.innerHTML = "";

    const days = forecastArray.slice(0, 14); // 7 days forecast

    const scrollWrapper = document.createElement("div");
    scrollWrapper.classList.add("scrollable-days");

    const row = document.createElement("div");
    row.classList.add("forecast-row");

    days.forEach((day) => {
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

      row.appendChild(dayDiv);
    });

    scrollWrapper.appendChild(row);
    container.appendChild(scrollWrapper);
  }

  function renderHourlyForecast(hourArray) {
    const container = document.querySelector(".hourly-forecast-container");
    container.innerHTML = "";

    const hours = hourArray.slice(6, 23);

    hours.forEach((hour) => {
      const time = hour.time.split(" ")[1].slice(0, 5);

      const hourDiv = document.createElement("div");
      hourDiv.classList.add("hour-forecast-item");

      const icon = document.createElement("img");
      icon.src = `https:${hour.condition.icon}`;
      icon.alt = hour.condition.text;

      const temp = document.createElement("div");
      temp.classList.add("hour-temp");
      temp.textContent = `${hour.temp_c}°C`;

      const timeLabel = document.createElement("div");
      timeLabel.classList.add("hour-time");
      timeLabel.textContent = time;

      hourDiv.appendChild(timeLabel);
      hourDiv.appendChild(icon);
      hourDiv.appendChild(temp);

      container.appendChild(hourDiv);
    });
  }

  function initScrolling() {
    const scrollConfigs = [
      {
        container: document.querySelector(".scrollable-days"),
        nextBtn: document.querySelector(".next-day"),
        prevBtn: document.querySelector(".prev-day"),
        scrollAmount: 150 * 3,
      },
      {
        container: document.querySelector(".hourly-forecast-container"),
        nextBtn: document.querySelector(".next-hour"),
        prevBtn: document.querySelector(".prev-hour"),
        scrollAmount: 150 * 3,
      },
    ];

    scrollConfigs.forEach(({ container, nextBtn, prevBtn, scrollAmount }) => {
      if (!container || !nextBtn || !prevBtn) return;

      nextBtn.addEventListener("click", () => {
        container.scrollBy({ left: scrollAmount, behavior: "smooth" });
      });
      prevBtn.addEventListener("click", () => {
        container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      });
    });
  }
});
