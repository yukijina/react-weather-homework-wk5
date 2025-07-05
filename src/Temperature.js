import React, { useState } from 'react';
import './Temperature.css';

export default function Temperature({ temperature }) {
  const [unit, setUnit] = useState('celsius');

  function clickCelsius(e) {
    e.preventDefault();
    setUnit('celsius');
  }

  function clickFahrenheit(e) {
    e.preventDefault();
    setUnit('fahrenheit');
  }

  function convertToFahrenheit(num) {
    return Math.round((num * 9) / 5 + 32);
  }

  if (unit === 'celsius') {
    return (
      <div className='Temperature'>
        <p>
          <span className='Temperature-result'>{temperature}</span>
          <span className='Temperature-unit '>
            {' '}
            <a
              href='#'
              className='Temperature-link Temperature-active text-primary'
              title='Change to celsius'
            >
              °C
            </a>{' '}
            |
            <a
              href='#'
              onClick={clickFahrenheit}
              className='Temperature-link'
              title='Change to fahrenheit'
            >
              °F
            </a>
          </span>
        </p>
      </div>
    );
  } else {
    return (
      <div className='Temperature'>
        <p>
          <span className='Temperature-result'>
            {convertToFahrenheit(temperature)}
          </span>
          <span className='Temperature-unit '>
            {' '}
            <a
              href='#'
              onClick={clickCelsius}
              className='Temperature-link'
              title='Change to celsius'
            >
              °C
            </a>{' '}
            |
            <a
              href='#'
              className='Temperature-link Temperature-active text-primary'
              title='Change to fahrenheit'
            >
              °F
            </a>
          </span>
        </p>
      </div>
    );
  }
}

// return (
//   <div className='Temperature'>
//     <p>
//       <span className='Temperature-result'>{temperature}</span>
//       <span className='Temperature-unit '>
//         {' '}
//         <a
//           href='#'
//           onClick={clickCelsius}
//           className={
//             celsius
//               ? 'Temperature-link Temperature-active text-primary'
//               : 'Temperature-link'
//           }
//           title='Change to celsius'
//         >
//           °C
//         </a>{' '}
//         |
//         <a
//           href='#'
//           onClick={clickFahrenheit}
//           className={
//             fahrenheit
//               ? 'Temperature-link Temperature-active text-primary'
//               : 'Temperature-link'
//           }
//           title='Change to fahrenheit'
//         >
//           °F
//         </a>
//       </span>
//     </p>
//   </div>
// );
