'use client';
import React, {useEffect, useRef, useState} from 'react';

export default function MainVideo() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play();
          setIsPaused(false);
        } else {
          video.pause();
          setIsPaused(true);
        }
      },
      {threshold: 0.5}
    );

    observer.observe(video);

    return () => {
      if (video) observer.unobserve(video);
    };
  }, []);

  // Handle click to pause/play
  const togglePlayPause = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
      setIsPaused(false);
    } else {
      video.pause();
      setIsPaused(true);
    }
  };

  return (
    <div className="grid grid-cols-1">
      <video
        ref={videoRef}
        className={`w-full h-[500px] object-cover ${
          isPaused ? 'cursor-pointer' : 'cursor-none'
        }`}
        src="/images/slider-test.mkv"
        muted
        loop
        playsInline
        onClick={togglePlayPause}
      />
    </div>
  );
}
