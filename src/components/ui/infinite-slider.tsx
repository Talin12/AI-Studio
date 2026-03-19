'use client';
import React from 'react';
import { cn } from '@/src/lib/utils';

type InfiniteSliderProps = {
  children: React.ReactNode;
  gap?: number;
  duration?: number;
  durationOnHover?: number;
  direction?: 'horizontal' | 'vertical';
  reverse?: boolean;
  className?: string;
};

export function InfiniteSlider({
  children,
  gap = 16,
  duration = 25,
  direction = 'horizontal',
  reverse = false,
  className,
}: InfiniteSliderProps) {
  // Using pure CSS keyframes for layout performance.
  // Hardware accelerated and strictly out of the React rendering path.
  return (
    <div className={cn('overflow-hidden w-full h-full group', className)}>
      <div
        className={cn("flex w-max", `animate-infinite-slide-${direction}`)}
        style={{
          '--gap': `${gap}px`,
          gap: `${gap}px`,
          flexDirection: direction === 'horizontal' ? 'row' : 'column',
          animationDuration: `${duration}s`,
          animationDirection: reverse ? 'reverse' : 'normal',
        } as React.CSSProperties}
      >
        {children}
        {children}
      </div>
    </div>
  );
}
