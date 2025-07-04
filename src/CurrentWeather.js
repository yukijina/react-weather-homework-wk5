import React from 'react';
import './CurrentWeather.css';

export default function CurrentWeather({ data }) {
  if (Object.keys(data).length !== 0) {
    console.log(data);
    return (
      <section>
        <article>
          <h2>{data.city}</h2>
          <h3>{data.country}</h3>
          <div>
            <p>{data.time.month}</p>
            <p>{data.time.date}</p>
            <p>{data.time.day}</p>
            <p>{data.time.time}</p>
          </div>
          <p>{data.description}</p>
        </article>
        <article>
          <div></div>
          <img src={data.iconUrl} alt={data.description} />
          <p>{data.temperature} °C | °F</p>
          <div>
            <p>Humidity:{data.humidity}</p>
            <p>Wind: {data.wind}</p>
          </div>
        </article>
      </section>
    );
  }
}
