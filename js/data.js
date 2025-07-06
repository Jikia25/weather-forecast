// js/data.js

// ეს არის სტატიკური მონაცემები, რომლებიც API-დან უნდა მოვიდეს.
// გამოიყენება აპლიკაციის ტესტირებისა და UI-ის აწყობისთვის, სანამ პირდაპირ API-სთან დავაკავშირებთ.

const weatherData = {
  "current_weather": {
    "coord": { "lon": 23.7162, "lat": 37.9795 },
    "weather": [
      {
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }
    ],
    "base": "stations",
    "main": {
      "temp": 24.0,
      "feels_like": 22.0,
      "temp_min": 23.0,
      "temp_max": 25.0,
      "pressure": 997,
      "humidity": 41
    },
    "visibility": 10000,
    "wind": { "speed": 2.0, "deg": 270 },
    "clouds": { "all": 0 },
    "dt": 1693467727,
    "sys": {
      "type": 1,
      "id": 6695,
      "country": "GR",
      "sunrise": 1693444620,
      "sunset": 1693492620
    },
    "timezone": 10800,
    "id": 2577907,
    "name": "Athens",
    "cod": 200
  },
  "forecast_5_days": {
    "cod": "200",
    "message": 0,
    "cnt": 40,
    "list": [
      {
        "dt": 1693497600,
        "main": {
          "temp": 20.0,
          "feels_like": 19.0,
          "temp_min": 19.0,
          "temp_max": 21.0,
          "pressure": 998, "sea_level": 998, "grnd_level": 994,
          "humidity": 60, "temp_kf": -0.62
        },
        "weather": [
          { "id": 500, "main": "Rain", "description": "light rain", "icon": "10d" }
        ],
        "clouds": { "all": 97 },
        "wind": { "speed": 4.0, "deg": 256, "gust": 4.67 },
        "visibility": 10000, "pop": 0.44, "sys": { "pod": "d" },
        "dt_txt": "2023-08-31 12:00:00"
      },
      {
        "dt": 1693508400,
        "main": {
          "temp": 22.0,
          "feels_like": 21.0,
          "temp_min": 21.0,
          "temp_max": 23.0,
          "pressure": 999, "sea_level": 999, "grnd_level": 995,
          "humidity": 55, "temp_kf": -0.73
        },
        "weather": [
          { "id": 801, "main": "Clouds", "description": "few clouds", "icon": "02d" }
        ],
        "clouds": { "all": 21 },
        "wind": { "speed": 3.0, "deg": 260, "gust": 3.5 },
        "visibility": 10000, "pop": 0.2, "sys": { "pod": "d" },
        "dt_txt": "2023-08-31 15:00:00"
      },
      {
        "dt": 1693519200,
        "main": {
          "temp": 23.0,
          "feels_like": 22.0,
          "temp_min": 22.0,
          "temp_max": 24.0,
          "pressure": 999, "sea_level": 999, "grnd_level": 995,
          "humidity": 50, "temp_kf": -0.5
        },
        "weather": [
          { "id": 803, "main": "Clouds", "description": "broken clouds", "icon": "04d" }
        ],
        "clouds": { "all": 75 },
        "wind": { "speed": 2.0, "deg": 265, "gust": 2.5 },
        "visibility": 10000, "pop": 0.1, "sys": { "pod": "d" },
        "dt_txt": "2023-08-31 18:00:00"
      },
      {
        "dt": 1693530000,
        "main": {
          "temp": 20.0,
          "feels_like": 19.0,
          "temp_min": 19.0,
          "temp_max": 21.0,
          "pressure": 1000, "sea_level": 1000, "grnd_level": 996,
          "humidity": 65, "temp_kf": -0.8
        },
        "weather": [
          { "id": 804, "main": "Clouds", "description": "overcast clouds", "icon": "04n" }
        ],
        "clouds": { "all": 90 },
        "wind": { "speed": 3.0, "deg": 270, "gust": 3.8 },
        "visibility": 10000, "pop": 0.3, "sys": { "pod": "n" },
        "dt_txt": "2023-08-31 21:00:00"
      },
      {
        "dt": 1693540800,
        "main": {
          "temp": 18.0,
          "feels_like": 17.0,
          "temp_min": 17.0,
          "temp_max": 19.0,
          "pressure": 1001, "sea_level": 1001, "grnd_level": 997,
          "humidity": 70, "temp_kf": -0.5
        },
        "weather": [
          { "id": 800, "main": "Clear", "description": "clear sky", "icon": "01n" }
        ],
        "clouds": { "all": 0 },
        "wind": { "speed": 3.0, "deg": 280, "gust": 3.5 },
        "visibility": 10000, "pop": 0.1, "sys": { "pod": "n" },
        "dt_txt": "2023-09-01 00:00:00"
      },
      {
        "dt": 1693551600,
        "main": {
          "temp": 17.0,
          "feels_like": 16.0,
          "temp_min": 16.0,
          "temp_max": 18.0,
          "pressure": 1002, "sea_level": 1002, "grnd_level": 998,
          "humidity": 75, "temp_kf": -0.6
        },
        "weather": [
          { "id": 800, "main": "Clear", "description": "clear sky", "icon": "01n" }
        ],
        "clouds": { "all": 0 },
        "wind": { "speed": 2.5, "deg": 290, "gust": 3.0 },
        "visibility": 10000, "pop": 0.0, "sys": { "pod": "n" },
        "dt_txt": "2023-09-01 03:00:00"
      },
      {
        "dt": 1693562400,
        "main": {
          "temp": 18.0,
          "feels_like": 17.0,
          "temp_min": 17.0,
          "temp_max": 19.0,
          "pressure": 1003, "sea_level": 1003, "grnd_level": 999,
          "humidity": 70, "temp_kf": -0.4
        },
        "weather": [
          { "id": 800, "main": "Clear", "description": "clear sky", "icon": "01d" }
        ],
        "clouds": { "all": 0 },
        "wind": { "speed": 2.0, "deg": 300, "gust": 2.5 },
        "visibility": 10000, "pop": 0.0, "sys": { "pod": "d" },
        "dt_txt": "2023-09-01 06:00:00"
      },
      {
        "dt": 1693573200,
        "main": {
          "temp": 20.0,
          "feels_like": 19.0,
          "temp_min": 19.0,
          "temp_max": 21.0,
          "pressure": 1003, "sea_level": 1003, "grnd_level": 999,
          "humidity": 65, "temp_kf": -0.3
        },
        "weather": [
          { "id": 801, "main": "Clouds", "description": "few clouds", "icon": "02d" }
        ],
        "clouds": { "all": 10 },
        "wind": { "speed": 2.5, "deg": 310, "gust": 3.0 },
        "visibility": 10000, "pop": 0.0, "sys": { "pod": "d" },
        "dt_txt": "2023-09-01 09:00:00"
      },
      {
        "dt": 1693584000,
        "main": {
          "temp": 24.0,
          "feels_like": 23.0,
          "temp_min": 23.0,
          "temp_max": 25.0,
          "pressure": 1002, "sea_level": 1002, "grnd_level": 998,
          "humidity": 50, "temp_kf": -0.2
        },
        "weather": [
          { "id": 800, "main": "Clear", "description": "clear sky", "icon": "01d" }
        ],
        "clouds": { "all": 0 },
        "wind": { "speed": 3.0, "deg": 320, "gust": 3.5 },
        "visibility": 10000, "pop": 0.0, "sys": { "pod": "d" },
        "dt_txt": "2023-09-01 12:00:00"
      },
      {
        "dt": 1693594800,
        "main": {
          "temp": 27.0,
          "feels_like": 26.0,
          "temp_min": 26.0,
          "temp_max": 28.0,
          "pressure": 1001, "sea_level": 1001, "grnd_level": 997,
          "humidity": 40, "temp_kf": -0.1
        },
        "weather": [
          { "id": 800, "main": "Clear", "description": "clear sky", "icon": "01d" }
        ],
        "clouds": { "all": 0 },
        "wind": { "speed": 2.0, "deg": 330, "gust": 2.5 },
        "visibility": 10000, "pop": 0.0, "sys": { "pod": "d" },
        "dt_txt": "2023-09-01 15:00:00"
      },
      {
        "dt": 1693605600,
        "main": {
          "temp": 27.0,
          "feels_like": 26.0,
          "temp_min": 26.0,
          "temp_max": 28.0,
          "pressure": 1000, "sea_level": 1000, "grnd_level": 996,
          "humidity": 45, "temp_kf": 0.0
        },
        "weather": [
          { "id": 803, "main": "Clouds", "description": "broken clouds", "icon": "04d" }
        ],
        "clouds": { "all": 75 },
        "wind": { "speed": 2.0, "deg": 340, "gust": 2.5 },
        "visibility": 10000, "pop": 0.0, "sys": { "pod": "d" },
        "dt_txt": "2023-09-01 18:00:00"
      },
      {
        "dt": 1693616400,
        "main": {
          "temp": 25.0,
          "feels_like": 24.0,
          "temp_min": 24.0,
          "temp_max": 26.0,
          "pressure": 1001, "sea_level": 1001, "grnd_level": 997,
          "humidity": 50, "temp_kf": -0.1
        },
        "weather": [
          { "id": 804, "main": "Clouds", "description": "overcast clouds", "icon": "04n" }
        ],
        "clouds": { "all": 90 },
        "wind": { "speed": 3.0, "deg": 350, "gust": 3.8 },
        "visibility": 10000, "pop": 0.0, "sys": { "pod": "n" },
        "dt_txt": "2023-09-01 21:00:00"
      },
      {
        "dt": 1693627200,
        "main": {
          "temp": 22.0,
          "feels_like": 21.0,
          "temp_min": 21.0,
          "temp_max": 23.0,
          "pressure": 1002, "sea_level": 1002, "grnd_level": 998,
          "humidity": 60, "temp_kf": -0.2
        },
        "weather": [
          { "id": 800, "main": "Clear", "description": "clear sky", "icon": "01n" }
        ],
        "clouds": { "all": 0 },
        "wind": { "speed": 3.0, "deg": 0, "gust": 3.5 },
        "visibility": 10000, "pop": 0.0, "sys": { "pod": "n" },
        "dt_txt": "2023-09-02 00:00:00"
      }
    ],
    "city": {
      "id": 2577907,
      "name": "Athens",
      "coord": { "lat": 37.9795, "lon": 23.7162 },
      "country": "GR",
      "population": 729137,
      "timezone": 10800,
      "sunrise": 1693444620,
      "sunset": 1693492620
    }
  }
};

// ექსპორტირება, რათა renderer.js-მა შეძლოს მისი იმპორტირება
export default weatherData;