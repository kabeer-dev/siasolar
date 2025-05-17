'use client';
import Container from '@/components/layout/container';
import Image from 'next/image';
import React, {useEffect, useRef, useState} from 'react';
import {FaPlay, FaPause} from 'react-icons/fa';

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
    <div className="bg-[#eff1ed]">
      <div className="grid grid-cols-1 pt-10">
        <Container>
          <Image
            src={'/images/logo.png'}
            alt="logo"
            height={80}
            width={80}
            className="mx-auto"
          />
          <p className="text-center text-3xl font-bold mt-2">
            <span className="text-primary">SIA Solar</span> - Your Partner in
            Solar Revolution
          </p>
        </Container>
      </div>
      <div className="relative grid grid-cols-1 mt-10 group">
        <video
          ref={videoRef}
          className={`w-full h-[500px] object-cover 
          cursor-pointer`}
          src="/images/slider-test.mkv"
          muted
          loop
          playsInline
          onClick={togglePlayPause}
        />

        <div
          className="absolute inset-0 bg-opacity-30 flex items-center justify-center 
        transition-opacity duration-300 group-hover:opacity-100 opacity-0 rounded-xl cursor-pointer"
          onClick={togglePlayPause}
        >
          <div className="text-primary text-5xl animate-none transition-all duration-300">
            {isPaused ? <FaPlay /> : <FaPause />}
          </div>
        </div>
      </div>
    </div>
  );
}
