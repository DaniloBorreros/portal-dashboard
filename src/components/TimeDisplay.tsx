// TimeDisplay.tsx
"use client"


import { useEffect, useState } from 'react';

const TimeDisplay = () => {
  const [time, setTime] = useState<string>(getCurrentTime());

  useEffect(() => {
    // Set up the interval to update the time every minute
    const interval = setInterval(() => {
      setTime(getCurrentTime());
    }, 1000); // Update every 1 second

    // Ensure interval is cleared if the component unmounts
    return () => clearInterval(interval);
  }, []);

  function getCurrentTime(): string {
    const now = new Date();
    const hours = (now.getHours() % 12 || 12).toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const ampm = now.getHours() >= 12 ? 'PM' : 'AM';
    return `${hours} ${minutes} ${ampm}`;
  }

  return (
    // <div className="flex items-center gap-4 rounded-md bg-lamaSky px-10 py-6 text-6xl w-full" key={time}>
    //   <div className="flex items-center gap-4 text-6xl">
    //     <span className="font-semibold">{time.slice(0, 2)}</span>   
    //     <span className="text-5xl">:</span>
    //     <span className="font-semibold">{time.slice(3, 5)}</span>
    //     <span className="text-5xl">{time.slice(6)}</span>
    //   </div>
    // </div>
    <div className="flex items-center gap-4 rounded-md bg-lamaSky px-10 py-6 text-6xl w-full" key={time}>
      <div className="flex items-center gap-4 text-6xl">
        <span className="font-semibold text-9xl">{time.slice(0, 2)}</span>   
        <span className="text-9xl">:</span>
        <span className="font-semibold text-9xl">{time.slice(3, 5)}</span>
        <span className="text-9xl">{time.slice(6)}</span>
      </div>
    </div>
  );
};

export default TimeDisplay;

