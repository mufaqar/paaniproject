"use client"
import React, { useState, useEffect } from 'react';

const Countdown = () => {
  const targetDate = new Date('2025-01-31T00:00:00Z').getTime();

  // State to store time left in days, hours, minutes, and seconds
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Function to calculate the time difference
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        // Countdown reached zero
        clearInterval(interval);
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <ul className='w-full flex md:flex-row flex-col gap-5 items-center justify-between'>
      <li className='md:text-[40px] md:leading-[50px] text-3xl font-bold text-white text-center px-3'>
        {timeLeft.days}
        <p className='text-[22px] leading-[28px] mt-1.5 text-center'>Day(s)</p>
      </li>
      <li className='md:text-[40px] md:leading-[50px] text-3xl font-bold text-white text-center px-3'>
        {timeLeft.hours}
        <p className='text-[22px] leading-[28px] mt-1.5 text-center'>Hour(s)</p>
      </li>
      <li className='md:text-[40px] md:leading-[50px] text-3xl font-bold text-white text-center px-3'>
        {timeLeft.minutes}
        <p className='text-[22px] leading-[28px] mt-1.5 text-center'>Minute(s)</p>
      </li>
      <li className='md:text-[40px] md:leading-[50px] text-3xl font-bold text-white text-center px-3'>
        {timeLeft.seconds}
        <p className='text-[22px] leading-[28px] mt-1.5 text-center'>Second(s)</p>
      </li>
    </ul>
  );
};

export default Countdown;