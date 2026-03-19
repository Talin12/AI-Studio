import { CheckCircle2, XCircle } from "lucide-react";
import { cn } from "@/src/lib/utils";

const traditional = [
  "Endless iterations and miscommunications",
  "High upfront costs and expensive retainers",
  "Brittle, manually written spaghetti code",
  "Weeks or months until launch",
  "Slow, rigid deployment pipelines"
];

const aiStudio = [
  "Instantaneous prototype generation",
  "Zero overhead or agency fees",
  "Clean, modular, self-healing React code",
  "Globally deployed in seconds",
  "Continuous AI-driven optimization"
];

export function Comparison() {
  return (
    <section className="relative w-full py-32 bg-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="text-sm font-bold tracking-widest uppercase text-black/40 mb-4">The Old Way vs The New Way</p>
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-black mb-6 leading-tight">
            Stop building the hard way
          </h2>
          <p className="text-lg text-black/60 leading-relaxed">
            The traditional agency model is broken. AI.STUDIO replaces fragmented teams with a single, highly-intelligent automated pipeline.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-stretch justify-center max-w-5xl mx-auto">
          
          {/* Traditional Card */}
          <div className="flex-1 bg-zinc-100 rounded-[2.5rem] p-8 md:p-12 border border-black/5 opacity-80">
            <h3 className="text-2xl font-semibold mb-2">Traditional Agency</h3>
            <p className="text-black/50 mb-10 leading-relaxed min-h-[50px]">Slow, expensive, and error-prone.</p>
            <ul className="space-y-6">
              {traditional.map((item, i) => (
                <li key={i} className="flex items-start">
                  <XCircle className="w-6 h-6 text-red-500 mr-4 flex-shrink-0" />
                  <span className="text-black/70 leading-tight">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* AI Card */}
          <div className="flex-1 bg-[#050505] text-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl relative overflow-hidden ring-1 ring-white/10 lg:scale-[1.05] z-10 transition-transform">
            
            <div className="absolute -inset-24 bg-gradient-to-tr from-purple-600/10 to-blue-600/10 blur-3xl rounded-full -z-10 pointer-events-none" />

            <div className="absolute top-8 right-8 px-3 py-1 bg-white/10 text-white rounded-full text-[10px] font-bold uppercase tracking-widest backdrop-blur-md">
              The Future
            </div>

            <h3 className="text-2xl font-semibold mb-2">AI.STUDIO Autonomy</h3>
            <p className="text-white/50 mb-10 leading-relaxed min-h-[50px]">Fast, intelligent, and scalable.</p>
            <ul className="space-y-6 relative z-10">
              {aiStudio.map((item, i) => (
                <li key={i} className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-emerald-400 mr-4 flex-shrink-0" />
                  <span className="text-white/90 leading-tight">{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
