import React, { useEffect, useState } from 'react';

const targetDate = new Date().getTime() + 5 * 24 * 60 * 60 * 1000 + 23 * 60 * 60 * 1000;

const MusicExperienceSection = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-black text-white p-8 md:p-12 lg:p-16 flex flex-col md:flex-row items-center justify-between">
      {/* Left Side Text and Countdown */}
      <div className="text-left max-w-lg">
        <p className="text-green-500 mb-2 text-sm">Categories</p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">
          Enhance Your Music Experience
        </h2>

        <div className="flex space-x-4 mb-6">
          <div className="text-center">
            <span className="block text-2xl font-bold">{timeLeft.hours}</span>
            <span className="text-gray-400">Hours</span>
          </div>
          <div className="text-center">
            <span className="block text-2xl font-bold">{timeLeft.days}</span>
            <span className="text-gray-400">Days</span>
          </div>
          <div className="text-center">
            <span className="block text-2xl font-bold">{timeLeft.minutes}</span>
            <span className="text-gray-400">Minutes</span>
          </div>
          <div className="text-center">
            <span className="block text-2xl font-bold">{timeLeft.seconds}</span>
            <span className="text-gray-400">Seconds</span>
          </div>
        </div>

        <button className="bg-green-500 text-black font-semibold py-2 px-6 rounded hover:bg-green-600 transition">
          Buy Now!
        </button>
      </div>

      {/* Right Side Image */}
      <div className="mt-8 md:mt-0 md:ml-8 lg:ml-16">
        <img
          src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac" // replace with actual product image URL
          alt="Music Speaker"
          className="w-full max-w-xs md:max-w-md lg:max-w-lg object-contain"
        />
      </div>
    </div>
  );
};

export default MusicExperienceSection;
