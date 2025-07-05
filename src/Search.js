import React, { useState } from 'react';
import './Search.css';
import axios from 'axios';
import CurrentWeather from './CurrentWeather';

export default function Search() {
  const [city, setCity] = useState('New York');
  const [weatherData, setWeatherData] = useState({});

  function formattedTime(time) {
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'Octover',
      'November',
      'December',
    ];

    const days = [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday',
    ];
    const date = new Date(time);

    const currentTime = {
      month: months[date.getMonth()],
      date: date.getDate(),
      day: days[date.getDay()],
      time: `${date.getHours()}:${date.getMinutes()}`,
    };

    return currentTime;
  }

  function setTitleCase(string) {
    return string.replace(
      /\w\S*/g,
      (string) =>
        string.charAt(0).toUpperCase() + string.substring(1).toLowerCase()
    );
  }

  function showWeather(response) {
    console.log(response.data);
    const data = response.data;
    setWeatherData({
      city: data.city,
      country: data.country,
      description: setTitleCase(data.condition.description),
      temperature: Math.ceil(data.temperature.current),
      humidity: data.temperature.humidity,
      wind: data.wind.speed,
      iconUrl: data.condition.icon_url,
      time: formattedTime(data.time),
    });
    console.log(weatherData);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log('submitted');

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
