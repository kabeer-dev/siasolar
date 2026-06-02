'use client';
import {useEffect, useState} from 'react';

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const countDownDate = new Date('Aug 14, 2026 00:00:00').getTime();

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
    <div className="flex justify-center items-center w-full bg-white/70 backdrop-blur-sm border border-gray-200 rounded-2xl shadow-sm px-2 py-4 divide-x divide-gray-200">
      {Object.keys(timeLeft).map((key) => (
        <div key={key} className="flex-1 flex flex-col items-center px-2">
          <div className="text-2xl font-bold text-gray-800">
            {String(timeLeft[key as keyof typeof timeLeft]).padStart(2, '0')}
          </div>
          <div className="text-xs text-gray-500 capitalize mt-1">{key}</div>
        </div>
      ))}
    </div>
  );
}
