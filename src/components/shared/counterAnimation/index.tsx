'use client';
import {CounterAnimationProps} from '@/interfaces/general';
import React from 'react';
import CountUp from 'react-countup';

export default function CounterAnimation({
  number,
  title,
}: CounterAnimationProps) {
  return (
    <div>
      <CountUp
        duration={3}
        className="text-white text-3xl font-bold"
        end={number}
        suffix="+"
      />
      <p className="text-primary">{title}</p>
    </div>
  );
}
