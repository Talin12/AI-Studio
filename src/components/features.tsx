import { Wand2, Search, Palette, Zap, Code, RefreshCw, Rocket, Sparkles, ArrowRight, Bell } from "lucide-react";
import { cn } from "@/src/lib/utils";

const features = [
  {
    icon: <Wand2 className="w-6 h-6 text-purple-600" />,
    bg: "bg-purple-100",
    title: "Instant AI Generation",
    description: "Prompt any idea and watch our models synthesize an entire website structure instantly."
  },
  {
    icon: <Search className="w-6 h-6 text-blue-600" />,
    bg: "bg-blue-100",
    title: "Intelligent SEO",
    description: "Our agents automatically optimize metadata, copy, and code structure to rank flawlessly."
  },
  {
    icon: <Palette className="w-6 h-6 text-rose-600" />,
    bg: "bg-rose-100",
    title: "Dynamic Theming",
    description: "Cycle through infinite color palettes and font pairings designed by AI to convert."
  },
  {
    icon: <Zap className="w-6 h-6 text-amber-600" />,
    bg: "bg-amber-100",
    title: "Lightning Fast",
    description: "Exported code is modern, minified, and built on performant frameworks for maximum speed."
  },
  {
    icon: <Code className="w-6 h-6 text-emerald-600" />,
    bg: "bg-emerald-100",
    title: "Clean Architecture",
    description: "Every layout is built with standard flexbox and grid, emitting pristine, maintainable React."
  },
  {
    icon: <RefreshCw className="w-6 h-6 text-indigo-600" />,
    bg: "bg-indigo-100",
    title: "Continuous Iteration",
    description: "A/B test variations of your site generated on-the-fly to discover the best performer."
  }
];

export function Features() {
  return (
    <section id="build" className="relative w-full py-24 bg-zinc-50 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-black mb-6 leading-tight">
            Scale your agency with intelligent designer tools
          </h2>
          <p className="text-lg text-black/60 leading-relaxed">
            Everything you need to build, deploy, and refine breathtaking websites effortlessly using our autonomous AI engines.
          </p>
        </div>

        {/* 6 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((item, i) => (
            <div key={i} className="bg-white rounded-3xl p-8 flex flex-col items-center text-center shadow-sm ring-1 ring-black/5 hover:shadow-md transition-shadow">
              <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center mb-6", item.bg)}>
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-black mb-3">
                {item.title}
              </h3>
              <p className="text-black/60 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Dark CTA Card block */}
        <div className="mt-20 w-full bg-[#050505] text-white rounded-[40px] p-8 md:p-16 flex flex-col lg:flex-row items-center justify-between relative overflow-hidden ring-1 ring-white/10">
          
          {/* Subtle glow background */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-2xl bg-gradient-to-tr from-purple-500/20 to-blue-500/20 blur-[100px] rounded-full pointer-events-none" />

          {/* Left Text */}
          <div className="relative z-10 lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left mb-16 lg:mb-0">
            <h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-6 leading-tight">
              Experience the evolution of digital design
            </h2>
            <p className="text-white/60 text-lg mb-10 max-w-md">
              Stop wrestling with bloated templates and brittle code. Build scalable, highly custom websites simply by telling the AI what you want.
            </p>
            <button className="bg-white text-black px-8 py-4 rounded-full font-bold text-sm tracking-widest uppercase hover:bg-zinc-200 transition-colors flex items-center group">
              Start Building Now
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Right Phone Mockup */}
          <div className="relative z-10 lg:w-1/2 flex justify-center lg:justify-end w-full">
            <div className="relative w-[280px] h-[580px] bg-black rounded-[3.5rem] p-3 shadow-2xl ring-1 ring-white/20">
              {/* Inner Screen */}
              <div className="w-full h-full bg-white rounded-[2.8rem] overflow-hidden flex flex-col relative">
                
                {/* Dynamic Island fake */}
                <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-7 bg-black rounded-full z-20" />

                {/* Mockup Header */}
                <div className="bg-blue-600 text-white p-6 pt-14 pb-8 rounded-b-[2rem]">
                  <div className="flex justify-between items-center mb-6">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                      <div className="w-4 h-4 bg-white rounded-full" />
                    </div>
                    <div className="flex space-x-3">
                      <Search className="w-5 h-5 text-white" />
                      <Bell className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <h4 className="font-semibold text-lg opacity-90 mb-1">Current Project</h4>
                  <div className="w-3/4 h-2 bg-white/20 rounded-full mb-4" />
                  <div className="w-1/2 h-2 bg-white/20 rounded-full" />
                </div>

                {/* Mockup Body Content */}
                <div className="flex-1 bg-zinc-50 p-6 space-y-4">
                  {/* Fake buttons */}
                  <div className="flex space-x-3">
                    <div className="flex-1 bg-white p-4 rounded-2xl shadow-sm border border-black/5 flex flex-col items-center">
                      <Sparkles className="w-5 h-5 text-purple-500 mb-2" />
                      <div className="w-3/4 h-1.5 bg-black/10 rounded-full" />
                    </div>
                    <div className="flex-1 bg-white p-4 rounded-2xl shadow-sm border border-black/5 flex flex-col items-center">
                      <Rocket className="w-5 h-5 text-blue-500 mb-2" />
                      <div className="w-3/4 h-1.5 bg-black/10 rounded-full" />
                    </div>
                  </div>

                  {/* Fake list */}
                  <div className="bg-white rounded-2xl shadow-sm border border-black/5 p-4 space-y-4 mt-6">
                    <h5 className="text-xs font-bold text-black/40 uppercase tracking-widest">Recent Activity</h5>
                    {[1, 2, 3].map((item) => (
                      <div key={item} className="flex items-center space-x-3">
                        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-[10px] font-bold">
                          {item}
                        </div>
                        <div className="flex-1 space-y-2">
                          <div className="w-full h-1.5 bg-black/10 rounded-full" />
                          <div className="w-2/3 h-1.5 bg-black/5 rounded-full" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Floating Mock Action Bar */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white shadow-xl ring-1 ring-black/5 px-6 py-4 rounded-full flex space-x-6">
                  <div className="w-6 h-6 rounded bg-black/10" />
                  <div className="w-6 h-6 rounded bg-black/10" />
                  <div className="w-6 h-6 rounded-full bg-black flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full" />
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
