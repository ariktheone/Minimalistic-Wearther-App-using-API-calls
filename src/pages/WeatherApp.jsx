import axios from 'axios';
import React, { useState } from 'react';
import './WeatherApp.css';
import { format, parseISO } from 'date-fns';

function WeatherApp() {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState('');

  const getWeather = async () => {
    if (!city) {
      alert('Please enter a city name!');
      return;
    }

  
  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY; // ✅ RIGHT for Vite
  // const API_KEY = process.env.REACT_APP_WEATHER_API_KEY; // ✅ RIGHT for Create React App
  // const API_KEY = process.env.WEATHER_API_KEY; // ❌ WRONG


  if (!API_KEY) {
    alert('API Key is missing!');
    return;
  }
  
  const API = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${encodeURIComponent(city)}`;
  
    try {
      const response = await axios.get(API);
      console.log(response);
      setWeather(response.data);
    } catch (error) {
      console.error('Error fetching weather:', error);
      alert('Failed to fetch weather. Please check the city name.');
    }
  };

  // Function to format Local Time (Extract only HH:MM)
  const formatLocalTime = (datetime) => {
    const date = parseISO(datetime.replace(' ', 'T'));
    return format(date, " hh:mm a , dd MMM yyyy"); // Customize as needed
  };

  return (
    <>
      <div className="weather-container">
        <h1 className="title">Weather App 🌤️</h1>
        <div className="cityname">
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Enter City Name"
          />
          <button onClick={getWeather}>Get Weather</button>
        </div>

        {weather && (
          <div className="weather-info">
            <h3>{weather.location.name}</h3>
            <p>{weather.location.country}</p>
            <p className="temperature">{weather.current.temp_c}°C</p>
            <p><strong></strong> {formatLocalTime(weather.location.localtime)}</p>
            <p><strong>Region:</strong> {weather.location.region}</p>
            <p><strong>Latitude:</strong> {weather.location.lat} &emsp; <strong>Longitude:</strong> {weather.location.lon}</p>
            <p><strong>Time Zone:</strong> {weather.location.tz_id}</p>
            <p className="condition">{weather.current.condition.text}</p>
            <img src={weather.current.condition.icon} alt="weather icon" />
          </div>
        )}
      </div>
    </>
  );
}

export default WeatherApp;
