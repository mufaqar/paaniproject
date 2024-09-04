"use client"
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const Counter = ({ value, title, icon }: { value: string; title: string; icon: string }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Convert the value string into a float while ignoring formatting symbols
    const endValue = parseFloat(value.replace(/,/g, ''));
    const duration = 1000; // Duration of the animation in milliseconds
    const startTime = performance.now();

    // Animation function using requestAnimationFrame
    const animateCounter = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      // Calculate the progress percentage
      const progress = Math.min(elapsed / duration, 1);
      // Calculate the current count based on progress
      const currentCount = progress * endValue;

      setCount(currentCount);

      // Continue the animation until progress reaches 100%
      if (progress < 1) {
        requestAnimationFrame(animateCounter);
      }
    };

    requestAnimationFrame(animateCounter);

    // Cleanup: Nothing required for requestAnimationFrame
  }, [value]);

  // Format the count with the same decimal and comma format for display
  const formattedCount = new Intl.NumberFormat().format(count);

  return (
    <div>
      <Image
        src={icon}
        alt="img"
        width={71}
        height={91}
        className="mx-auto w-[71px] h-[91px] object-contain"
      />
      <h2 className="md:text-[40px] md:leading-[50px] text-3xl font-bold text-white text-center px-3">
        {formattedCount}
      </h2>
      <p className="text-lg font-bold text-white text-center">{title}</p>
    </div>
  );
};

export default Counter;
