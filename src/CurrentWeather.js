import React, { useState } from 'react';
import './CurrentWeather.css';
import Temperature from './Temperature';

export default function CurrentWeather({ data }) {
  const [celsius, setCelsius] = useState(data.temperature);
  const [fahrenheit, setFahrenheit] = useState(null);

  if (Object.keys(data).length !== 0) {
    console.log(data);
    return (
      <section className='CurrentWeather container'>
        <article className='row'>
          <h2 className='CurrentWeather-heading--2'>{data.city}</h2>
          <h3 className='CurrentWeather-heading--3'>{data.country}</h3>
          <div className='d-flex'>
            <p className='pe-1'>{data.time.day} </p>
            <p className='pe-1'>{data.time.time}, </p>
            <p className='pe-1'>{data.time.month}</p>
            <p className='pe-1'>{data.time.date} </p>
          </div>
          <p>{data.description}</p>
        </article>
        <article className='row align-items-center'>
          <div className='col d-flex align-items-center'>
            <img
              src={data.iconUrl}
              alt={data.description}
              className='CurrentWeather-icons'
            />
            <Temperature temperature={data.temperature} />
          </div>
          <div className='col text-center'>
            <p>Humidity:{data.humidity} %</p>
            <p>Wind: {data.wind} km/hr</p>
          </div>
        </article>
      </section>
    );
  }
}
