import React, { useState } from 'react';
import './Search.css';
import axios from 'axios';
import CurrentWeather from './CurrentWeather';

export default function Search() {
  const [city, setCity] = useState('New York');
  const [weatherData, setWeatherData] = useState({});

  function setTitleCase(string) {
    return string.replace(
      /\w\S*/g,
      (string) =>
        string.charAt(0).toUpperCase() + string.substring(1).toLowerCase()
    );
  }

  function showWeather(response) {
    const data = response.data;
    setWeatherData({
      city: data.city,
      country: data.country,
      description: setTitleCase(data.condition.description),
      temperature: Math.ceil(data.temperature.current),
      humidity: data.temperature.humidity,
      wind: data.wind.speed,
      iconUrl: data.condition.icon_url,
      time: data.time,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const apiKey = '2f5896dd4cc0cdo340203tba4fba205f';
    const url = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
    axios.get(url).then(showWeather);
  }

  function handleChange(e) {
    e.preventDefault();
    setCity(e.target.value);
  }
  return (
    <main>
      <section className='Search'>
        <form
          className='Search-form d-flex justify-content-center'
          onSubmit={handleSubmit}
        >
          <input
            type='search'
            className='Search-text py-2 px-2'
            onChange={handleChange}
          />
          <input
            type='submit'
            value='SEARCH'
            className='Search-btn btn btn-primary py-3 px-5'
          />
        </form>
      </section>
      <CurrentWeather data={weatherData} />
    </main>
  );
}
