import { Cpu, Paintbrush, Layers, Rocket } from "lucide-react";
import { cn } from "@/src/lib/utils";

const steps = [
  {
    num: "01",
    title: "Define the Vision",
    desc: "Provide a simple text prompt detailing your brand, goals, and content. The AI analyzes requirements actively.",
    icon: <Cpu className="w-6 h-6 text-black" />
  },
  {
    num: "02",
    title: "Generative Design",
    desc: "Millions of design permutations are analyzed to construct a sophisticated, tailored wireframe.",
    icon: <Paintbrush className="w-6 h-6 text-black" />
  },
  {
    num: "03",
    title: "Component Assembly",
    desc: "React code is natively emitted utilizing clean Tailwind classes and robust, responsive structure.",
    icon: <Layers className="w-6 h-6 text-black" />
  },
  {
    num: "04",
    title: "Instant Launch",
    desc: "Your site goes live globally in seconds on edge networks with automated SEO optimization embedded.",
    icon: <Rocket className="w-6 h-6 text-black" />
  }
];

export function HowItWorks() {
  return (
    <section className="relative w-full py-32 bg-black text-white overflow-hidden">
      
      {/* Subtle Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[400px] bg-gradient-to-b from-purple-600/20 to-transparent blur-[120px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="text-sm font-bold tracking-widest uppercase text-white/40 mb-4">The Pipeline</p>
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-6 leading-tight">
            How our intelligence works
          </h2>
          <p className="text-lg text-white/60 leading-relaxed">
            A radically simplified workflow replacing weeks of agonizing engineering and design with mere seconds of autonomous computation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          
          {/* Connector Line for Desktop */}
          <div className="hidden lg:block absolute top-[3.5rem] left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

          {steps.map((step, i) => (
            <div key={i} className="relative flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-[#111] ring-1 ring-white/10 flex items-center justify-center mb-8 relative z-10 shadow-2xl">
                {step.icon && <span className="text-white brightness-200">{step.icon}</span>}
                <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-white text-black flex items-center justify-center text-[10px] font-bold ring-4 ring-black">
                  {step.num}
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-white/50 leading-relaxed text-sm">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
