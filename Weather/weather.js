function getWeather() {
    const cityInput = document.getElementById('cityInput').value;
    const apiKey = '2241bd172f12c919fc0f60f5bde6bc6a'; 
  
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apiKey}`)
      .then(response => response.json())
      .then(data => {
        displayWeather(data);
      })
      .catch(error => {
        console.log('Error fetching weather data:', error);
      });
  }
  
  function displayWeather(data) {
    const weatherInfo = document.getElementById('weatherInfo');
    weatherInfo.innerHTML = `
      <div class="weather-item">
        <h2>Temperature</h2>
        <p>${Math.round(data.main.temp-273.15)}°C</p>
        <img src={https://openweathermap.org/img/w/${data.weather[0].icon}.png} alt="Weather icon" />

      </div>
      <div class="weather-item">
        <h2>Humidity</h2>
        <p>${data.main.humidity}%</p>
      </div>
      <div class="weather-item">
        <h2>Description</h2>
        <p>${data.weather[0].description}</p>
      </div>
      <div class="weather-item">
        <h2>Wind Speed</h2>
        <p>${data.wind.speed} m/s</p>
    
      </div>
    
    `;
  }
  