import React from 'react';

export default function FormattedTime({ time }) {
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

  const date = new Date(time * 1000);

  const hour = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();
  const munites =
    date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();

  const currentTime = {
    month: months[date.getMonth()],
    date: date.getDate(),
    day: days[date.getDay()],
    time: `${hour}:${munites}`,
  };

  return (
    <div className='d-flex'>
      <p className='pe-1'>{currentTime.day} </p>
      <p className='pe-1'>{currentTime.time}, </p>
      <p className='pe-1'>{currentTime.month}</p>
      <p className='pe-1'>{currentTime.date} </p>
    </div>
  );
}
