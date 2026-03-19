import { CreditCard, Bell, Cpu, Zap, Wand2, Rocket } from "lucide-react";
import { cn } from "@/src/lib/utils";
import videoSrc from "./Video_Generation_From_Prompt.mp4";

export function AboutUs() {
  return (
    <section id="about" className="relative w-full py-24 bg-[#f8f8f8] overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Column: Mock Dashboard */}
          <div className="relative w-full max-w-sm mx-auto lg:mx-0">
            {/* Soft decorative blur */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-purple-500/20 to-blue-500/20 blur-3xl rounded-full -z-10" />
            
            <video
              src={videoSrc}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-auto aspect-[9/16] object-cover rounded-3xl border-none mix-blend-multiply shadow-2xl"
            />
          </div>

          {/* Right Column: Text Content */}
          <div className="flex flex-col justify-center max-w-xl">
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-black mb-6 leading-[1.1]">
              Design at the speed of thought
            </h2>
            <p className="text-lg text-black/60 mb-10 leading-relaxed">
              Harness the power of intelligent agents to craft breathtaking, high-performance websites in seconds. Say goodbye to endless revisions and hello to absolute perfection.
            </p>

            <div className="mb-4">
              <a href="#" className="inline-flex items-center text-lg font-medium text-black hover:opacity-70 transition-opacity">
                autonomous design generation <span className="ml-2">&rarr;</span>
              </a>
            </div>
            <p className="text-black/60 leading-relaxed mb-10">
              Our AI continuously learns from your brand guidelines to dynamically adjust layouts, color palettes, and typography. Every pixel is tailored for peak performance and user conversion.
            </p>

            {/* Divider */}
            <div className="w-full h-px bg-black/10 mb-10" />

            {/* Features Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-2xl bg-black text-white shadow-lg">
                  <Cpu className="w-6 h-6" />
                </div>
                <div className="ml-4 flex flex-col justify-center translate-y-2">
                  <p className="text-md font-medium text-black leading-tight">
                    Smart components
                  </p>
                  <p className="text-md font-medium text-black leading-tight">
                    built dynamically
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-2xl bg-black text-white shadow-lg">
                  <Rocket className="w-6 h-6" />
                </div>
                <div className="ml-4 flex flex-col justify-center translate-y-2">
                  <p className="text-md font-medium text-black leading-tight">
                    Instant deployment
                  </p>
                  <p className="text-md font-medium text-black leading-tight">
                    at scale
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
