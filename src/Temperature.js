import React, { useState } from 'react';
import './Temperature.css';

export default function Temperature({ temperature }) {
  const [result, setResult] = useState(temperature);
  const [celsius, setCelsius] = useState(true);
  const [fahrenheit, setFahrenheit] = useState(false);

  function clickCelsius(e) {
    e.preventDefault();
    setResult(temperature);
    setCelsius(true);
    setFahrenheit(false);
  }

  function clickFahrenheit(e) {
    e.preventDefault();
    setResult(Math.round((temperature * 9) / 5 + 32));
    setCelsius(false);
    setFahrenheit(true);
  }

  return (
    <div className='Temperature'>
      <p>
        <span className='Temperature-result'>{result}</span>
        <span className='Temperature-unit '>
          {' '}
          <a
            href='#'
            onClick={clickCelsius}
            className={
              celsius
                ? 'Temperature-link Temperature-active text-primary'
                : 'Temperature-link'
            }
            title='Change to celsius'
          >
            °C
          </a>{' '}
          |
          <a
            href='#'
            onClick={clickFahrenheit}
            className={
              fahrenheit
                ? 'Temperature-link Temperature-active text-primary'
                : 'Temperature-link'
            }
            title='Change to fahrenheit'
          >
            °F
          </a>
        </span>
      </p>
    </div>
  );
}
