'use client';
import {useEffect, useState} from 'react';

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const countDownDate = new Date('May 01, 2025 00:00:00').getTime();

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();

      const distance = countDownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));

      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      setTimeLeft({
        days,
        hours,
        minutes,
        seconds,
      });

      if (distance < 0) {
        clearInterval(interval);
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [countDownDate]);

  return (
    <div className="sm:flex block justify-center items-center mt-20">
      {Object.keys(timeLeft).map((key, index) => (
        <div
          key={key}
          className={`text-5xl pt-5 sm:pt-0 font-semibold text-center sm:px-8 px-0 ${
            index !== Object.keys(timeLeft).length - 1
              ? 'sm:border-r-2 border-r-0'
              : ''
          }`}
        >
          <div className="rounded text-black">{timeLeft[key]}</div>
          <div className="mt-3 text-xl text-gray-600 capitalize">{key}</div>
        </div>
      ))}
    </div>
  );
}
