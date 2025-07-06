import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className='Footer'>
      <p>
        This project was coded by Yukiji on{' '}
        <a
          href='https://github.com/yukijina/react-weather-homework-wk5'
          target='blank'
        >
          GitHub
        </a>{' '}
        and hosted by{' '}
        <a
          href='https://react-weather-homework-wk5.netlify.app/'
          target='blank'
        >
          Netlify
        </a>
        .
      </p>
    </footer>
  );
}
