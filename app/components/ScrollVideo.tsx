"use client";

import { useEffect, useRef, useState } from 'react';

export default function ScrollVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (observer && observer.disconnect) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <div className="w-full md:w-1/2 p-4 order-1 md:order-2 flex justify-center">
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        className={`rounded-lg  h-64 transform rotate-3 transition-opacity scale-150 duration-2000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      >
        <source src="/videos/profile (2).mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}