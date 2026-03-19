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
      <style>{`
        @keyframes infinite-slide-horizontal {
          from { transform: translateX(0); }
          to { transform: translateX(calc(-50% - ${gap / 2}px)); }
        }
        @keyframes infinite-slide-vertical {
          from { transform: translateY(0); }
          to { transform: translateY(calc(-50% - ${gap / 2}px)); }
        }
      `}</style>
      <div
        className="flex w-max"
        style={{
          gap: `${gap}px`,
          flexDirection: direction === 'horizontal' ? 'row' : 'column',
          animation: `infinite-slide-${direction} ${duration}s linear infinite ${reverse ? 'reverse' : 'normal'}`,
        }}
      >
        {children}
        {children}
      </div>
    </div>
  );
}
