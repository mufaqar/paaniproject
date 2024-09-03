"use client"
import React, { useState, useEffect } from 'react';

const Countdown = () => {
  const targetDate = new Date('2024-12-31T00:00:00Z').getTime();

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
    <div className='flex md:flex-row flex-col md:gap-12 gap-5 items-center'>
      <div
        className={`md:py-24 pt-10 pb-10 px-6 bg-cover bg-center bg-no-repeat bg-blend-overlay bg-black/50 md:w-[57.8%] w-full`}
        style={{ backgroundImage: `url('/images/picture2.png')` }}
      >
        <h2 className='md:text-[41px] md:leading-none text-3xl font-bold text-white text-center mb-[30px]'>
          Water Crisis is Ticking
        </h2>
        <ul className='flex justify-center'>
          <li className='md:text-[38px] md:leading-[38px] text-2xl font-medium text-white text-center px-3'>
            {timeLeft.days}
            <p className='text-xs mt-1.5 text-center'>Day(s)</p>
          </li>
          <li className='md:text-[38px] md:leading-[38px] text-2xl font-medium text-white text-center'>
            :
          </li>
          <li className='md:text-[38px] md:leading-[38px] text-2xl font-medium text-white text-center px-3'>
            {timeLeft.hours}
            <p className='text-xs mt-1.5 text-center'>Hour(s)</p>
          </li>
          <li className='md:text-[38px] md:leading-[38px] text-2xl font-medium text-white text-center'>
            :
          </li>
          <li className='md:text-[38px] md:leading-[38px] text-2xl font-medium text-white text-center px-3'>
            {timeLeft.minutes}
            <p className='text-xs mt-1.5 text-center'>Minute(s)</p>
          </li>
          <li className='md:text-[38px] md:leading-[38px] text-2xl font-medium text-white text-center'>
            :
          </li>
          <li className='md:text-[38px] md:leading-[38px] text-2xl font-medium text-white text-center px-3'>
            {timeLeft.seconds}
            <p className='text-xs mt-1.5 text-center'>Second(s)</p>
          </li>
        </ul>
      </div>
      <div className='md:w-[36.7%] w-full'>
        <p className='text-lg font-medium text-white'>
          According to the Pakistan Council of Research in Water Resources, Pakistan is predicted, by 2025 to reach extreme water shortages. This is compounded with the fact that in present-day, only 1 in 5 people have access to clean drinking water. The other 80% of people are forced to resort to digesting water that has been contaminated with a mixture of sewage and pesticides. The water crisis isn’t something that’s going to improve until you step in.
        </p>
      </div>
    </div>
  );
};

export default Countdown;