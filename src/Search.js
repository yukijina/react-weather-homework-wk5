import React, { useState } from 'react';
import './Search.css';

export default function Search() {
  const [city, setCity] = useState('New York');

  function handleSubmit(e) {
    e.preventDefault();
    console.log('submitted');

    const apiKey = '2f5896dd4cc0cdo340203tba4fba205f';
    const url = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
  }

  function handleChange(e) {
    e.preventDefault();
    console.log(e.target.value);
    setCity(e.target.value);
  }
  return (
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
  );
}
