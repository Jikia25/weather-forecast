
# ☀️ Weather App

A modern and responsive web application to get real-time weather updates and 7-day forecasts for any city worldwide. Built with HTML, SCSS (Sass), and JavaScript, and powered by the WeatherAPI.com.

## ✨ Features

- **Current Weather:** Displays current temperature, "feels like" temperature, weather description, humidity, wind degree, cloud cover, and UV index.
- **Sunrise & Sunset Times:** Provides daily sunrise and sunset times.
- **7-Day Forecast:** Shows a daily forecast including average temperature and weather conditions for the next 7 days.
- **Hourly Forecast:** Offers a detailed hourly forecast for the current day.
- **City Search:** Search for weather information for any city across the globe.
- **Dark Mode Toggle:** A user-friendly switch to toggle between light and dark themes for improved readability and user preference.
- **Responsive Design:** Optimized for various screen sizes, from mobile devices to large desktops.
- **Smooth Scrolling Forecast:** Intuitive navigation for daily and hourly forecasts with scroll buttons.

## 🚀 Technologies Used

- **HTML5:** Structure of the web application.
- **SCSS (Sass):** Pre-processed CSS for organized and maintainable stylesheets.
- **JavaScript (ES Modules):** Dynamic functionality, API integration, and DOM manipulation.
- **WeatherAPI.com:** Provides comprehensive weather data.
- **Google Material Symbols:** For various weather and detail icons.
- **Font Awesome:** For general UI icons (search, location, arrows).

## 🖼️ Screenshots <img width="1029" height="923" alt="Screenshot 2025-07-30 at 23 48 21" src="https://github.com/user-attachments/assets/24d73957-1740-41ac-8f1b-94e460c6d877" />


## 📦 Installation & Setup

To get a local copy up and running, follow these simple steps.

### Prerequisites

- A web browser (Chrome, Firefox, Safari, Edge, etc.)
- A code editor (VS Code, Sublime Text, etc.)
- (Optional but recommended for development) A local web server to handle asset paths correctly (e.g., Live Server VS Code extension, Python's `http.server`).

### Steps

1.  **Clone the repository:**

    ```bash
    git clone [https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git](https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git)
    cd YOUR_REPO_NAME
    ```

    (Replace `YOUR_USERNAME` and `YOUR_REPO_NAME` with your actual GitHub details.)

2.  **Get an API Key:**

    - Go to [WeatherAPI.com](https://www.weatherapi.com/) and sign up for a free API key.
    - Open `js/app.js` and replace `"YOUR_API_KEY_HERE"` with your actual API key:

      ```javascript
      const API_KEY = "YOUR_API_KEY_HERE"; // <-- Replace this with your key
      ```

3.  **Open the project:**
    - Simply open the `index.html` file in your web browser.
    - **Recommended:** Use a local development server (e.g., VS Code's Live Server extension) to run the project. This ensures proper loading of all assets and correct API requests.

## ⚙️ Project Structure

Here's a README.md file for your Weather App, incorporating the details from your code and the improvements suggested earlier.

Markdown

# ☀️ Weather App

A modern and responsive web application to get real-time weather updates and 7-day forecasts for any city worldwide. Built with HTML, SCSS (Sass), and JavaScript, and powered by the WeatherAPI.com.

## 📦 Installation & Setup

To get a local copy up and running, follow these simple steps.

### Prerequisites

- A web browser (Chrome, Firefox, Safari, Edge, etc.)
- A code editor (VS Code, Sublime Text, etc.)
- (Optional but recommended for development) A local web server to handle asset paths correctly (e.g., Live Server VS Code extension, Python's `http.server`).

### Steps

1.  **Clone the repository:**

    ```bash
    git clone [https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git](https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git)
    cd YOUR_REPO_NAME
    ```

    (Replace `YOUR_USERNAME` and `YOUR_REPO_NAME` with your actual GitHub details.)

2.  **Get an API Key:**

    - Go to [WeatherAPI.com](https://www.weatherapi.com/) and sign up for a free API key.
    - Open `js/app.js` and replace `"YOUR_API_KEY_HERE"` with your actual API key:

      ```javascript
      const API_KEY = "YOUR_API_KEY_HERE"; // <-- Replace this with your key
      ```

3.  **Open the project:**
    - Simply open the `index.html` file in your web browser.
    - **Recommended:** Use a local development server (e.g., VS Code's Live Server extension) to run the project. This ensures proper loading of all assets and correct API requests.

## ⚙️ Project Structure

.
├── assets/
│ ├── images/
│ │ └── png/
│ │ └── logo_10x.png
│ └── ... (other image assets)
├── js/
│ └── app.js # Main application logic
├── styles/
│ ├── css/
│ │ └── global.css # Compiled CSS from SCSS
│ └── scss/
│ ├── \_base.scss
│ ├── \_reset.scss
│ ├── \_variables.scss
│ └── global.scss # Main SCSS file importing partials
├── index.html # Main application HTML
└── README.md

## ⚠️ Important Notes

- **API Key Security:** For a production application, directly embedding your API key in client-side JavaScript (`app.js`) is **not recommended** as it can be easily exposed. A more secure approach would be to proxy your API requests through a backend server.
- **CSS Minification & Optimization:** While the SCSS provides good organization, for production deployment, ensure that your `global.css` is minified and unused CSS is removed to improve performance.
- **Image Optimization:** Consider serving images in modern formats like WebP or AVIF for better performance.
- **Accessibility & Contrast:** While efforts have been made to improve accessibility (e.g., `aria-label`, `alt` text), thoroughly test the application with screen readers and ensure all color combinations meet WCAG contrast guidelines.

## 🤝 Contributing

Contributions are welcome! If you have suggestions for improvements, bug fixes, or new features, please open an issue or submit a pull request.
