import { Check } from "lucide-react";
import { cn } from "@/src/lib/utils";

const plans = [
  {
    name: "Starter",
    price: "$0",
    desc: "Perfect for individuals and hobbyists.",
    features: [
      "1 AI-generated website",
      "Basic AI optimizations",
      "Standard templates",
      "Community support"
    ],
    highlight: false,
  },
  {
    name: "Pro",
    price: "$49",
    period: "/mo",
    desc: "For professionals who need ultimate control.",
    features: [
      "Unlimited AI websites",
      "Advanced SEO & Analytics",
      "Custom model training",
      "Export to React code",
      "Priority email support"
    ],
    highlight: true,
  },
  {
    name: "Agency",
    price: "$199",
    period: "/mo",
    desc: "For teams scaling client operations.",
    features: [
      "Everything in Pro",
      "White-label deployments",
      "Dedicated account manager",
      "API access",
      "99.9% Uptime SLA"
    ],
    highlight: false,
  }
];

export function Pricing() {
  return (
    <section id="pricing" className="relative w-full py-32 bg-black text-white overflow-hidden">
      
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-1/2 h-[500px] bg-gradient-to-b from-blue-600/20 to-transparent blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/2 h-[500px] bg-gradient-to-t from-purple-600/20 to-transparent blur-[120px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-6 leading-tight">
            Simple, honest pricing
          </h2>
          <p className="text-lg text-white/60 leading-relaxed">
            Choose the plan that fits your growth. No hidden fees or complex usage metrics.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {plans.map((plan, i) => (
            <div 
              key={i} 
              className={cn(
                "relative rounded-[2.5rem] p-10 flex flex-col",
                plan.highlight 
                  ? "bg-white text-black shadow-2xl scale-105 z-10" 
                  : "bg-[#111] text-white ring-1 ring-white/10"
              )}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-black text-white px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase shadow-lg">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-semibold mb-2">{plan.name}</h3>
              <p className={cn("mb-8", plan.highlight ? "text-black/60" : "text-white/50")}>
                {plan.desc}
              </p>
              <div className="mb-8 flex items-end">
                <span className="text-5xl font-extrabold tracking-tighter">{plan.price}</span>
                {plan.period && <span className={cn("ml-2 mb-2 font-medium", plan.highlight ? "text-black/50" : "text-white/40")}>{plan.period}</span>}
              </div>
              <button 
                className={cn(
                  "w-full py-4 rounded-full font-bold tracking-widest uppercase text-sm transition-all mb-10",
                  plan.highlight 
                    ? "bg-black text-white hover:bg-zinc-800" 
                    : "bg-white/10 text-white hover:bg-white/20"
                )}
              >
                Get Started
              </button>
              <ul className="space-y-4">
                {plan.features.map((feat, j) => (
                  <li key={j} className="flex items-center">
                    <Check className={cn("w-5 h-5 mr-4", plan.highlight ? "text-black" : "text-white/50")} />
                    <span className={cn("font-medium", plan.highlight ? "text-black/80" : "text-white/70")}>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
