import React from 'react';
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export function Hero({ children }: { children?: React.ReactNode }) {
  return (
    <div className="p-3 sm:p-4 md:p-6 lg:p-8">
      {/* Hero Wrapper with rounded corners */}
      <div className="relative w-full min-h-[calc(100vh-1.5rem)] sm:min-h-[calc(100vh-2rem)] md:min-h-[calc(100vh-3rem)] lg:min-h-[calc(100vh-4rem)] bg-black text-white rounded-[32px] md:rounded-[48px] overflow-hidden flex flex-col pt-4 md:pt-8 pb-6 md:pb-8 shadow-2xl">
        
        {/* Background Video Container */}
        <div className="absolute inset-0 w-full h-full pointer-events-none">
          {/* TODO: Move this MP4 to a CDN in production. The poster has been removed as it was a generic placeholder. */}
          <video
            autoPlay
            loop
            muted
            playsInline
            poster="https://cdn.leonardo.ai/users/967a60fd-7be0-4ca9-9d47-f0cffca88c73/generations/f2577088-a22e-43e9-8657-f1e31c4c17ed/segments/1:1:1/poster.webp"
            className="w-full h-full object-cover"
          >
            <source src="https://cdn.leonardo.ai/users/967a60fd-7be0-4ca9-9d47-f0cffca88c73/generations/f2577088-a22e-43e9-8657-f1e31c4c17ed/segments/1:1:1/motion2Fast_Subtle_noticeable_animation_with_looping_motion_no_0.mp4" type="video/mp4" />
          </video>
          {/* Overlay to ensure text readability */}
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {children}

        {/* Main Hero Content */}
        <main className="relative z-10 flex-grow flex flex-col items-center justify-center text-center px-4 mt-12 pb-24">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="mb-8"
          >
            <h1 className="text-[10vw] md:text-[8vw] leading-[0.85] tracking-tighter uppercase font-display">
              <span className="italic font-light block opacity-90">Magic</span>
              <span className="block font-extrabold">Websites</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="max-w-xl text-lg md:text-xl font-light italic opacity-70 mb-12 leading-relaxed"
          >
            Build fast, high-performance, and visually stunning websites 
            that redefine the digital landscape with AI.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <button
              className="group relative bg-white text-black px-16 py-6 rounded-full font-black text-xl tracking-tighter uppercase overflow-hidden transition-transform hover:scale-105 active:scale-95"
            >
              <span className="relative z-10">START BUILDING</span>
              <div className="absolute inset-0 bg-neutral-200 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>
          </motion.div>
        </main>

        {/* Bottom Section */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-end mt-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="max-w-xs"
          >
            <p className="text-[10px] uppercase tracking-[0.3em] opacity-40 mb-4">EST. 2026 / TOKYO</p>
            <button className="group flex items-center text-[10px] font-bold tracking-widest uppercase text-white/40 hover:text-white transition-colors">
              EXPLORE MORE <ArrowRight className="ml-2 w-3 h-3 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>

          <div className="text-[10px] uppercase tracking-[0.3em] opacity-40">
            © ALL RIGHTS RESERVED
          </div>
        </div>
      </div>
    </div>
  );
}
