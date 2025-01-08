import React, { useState, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const FlashSales = () => {
  // Set countdown target date (e.g., 3 days from now)
  const targetDate = new Date().getTime() + 3 * 24 * 60 * 60 * 1000;
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const countdown = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });

      if (distance < 0) {
        clearInterval(countdown);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(countdown);
  }, [targetDate]);

  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-4 py-6 bg-white rounded-lg space-y-4 md:space-y-0 md:space-x-6">
      {/* Left Side - Title */}
      <div className="flex items-center space-x-2">
        <span className="bg-red-500 h-6 w-2 rounded-full"></span>
        <div>
          <p className="text-red-500 font-bold text-sm">Today's</p>
          <h2 className="text-2xl font-bold">Flash Sales</h2>
        </div>
      </div>

      {/* Middle - Countdown Timer */}
      <div className="flex space-x-4 text-center justify-center">
        {['Days', 'Hours', 'Minutes', 'Seconds'].map((label, idx) => (
          <div key={idx} className="flex flex-col">
            <p className="text-3xl font-semibold">
              {label === 'Days' ? timeLeft.days : label === 'Hours' ? timeLeft.hours : label === 'Minutes' ? timeLeft.minutes : timeLeft.seconds}
            </p>
            <p className="text-sm font-medium text-gray-500">{label}</p>
          </div>
        ))}
      </div>

      {/* Right Side - Navigation Arrows */}
      <div className="flex items-center space-x-2">
        <button className="bg-gray-200 hover:bg-gray-300 rounded-full p-2">
          <FaArrowLeft className="text-gray-500" />
        </button>
        <button className="bg-gray-200 hover:bg-gray-300 rounded-full p-2">
          <FaArrowRight className="text-gray-500" />
        </button>
      </div>
    </div>
  );
};

export default FlashSales;
