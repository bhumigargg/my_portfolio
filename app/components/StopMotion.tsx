"use client";

import { useEffect, useState } from 'react';

const images = [
  '/images/image1.png',
  '/images/image2.png',
  // Add more image paths here
];

export default function StopMotion() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 500); // Change the interval time as needed

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="stop-motion-container">
      <img src={images[currentImageIndex]} alt="Stop Motion" className="stop-motion-image" />
      
    </div>
  );
}
