import { Store, Laptop, UserCircle2, Compass, PlayCircle, Globe2 } from "lucide-react";
import { cn } from "@/src/lib/utils";

const cases = [
  {
    title: "E-Commerce Startups",
    desc: "Generate high-converting storefronts completely optimized for sales and fast checkouts.",
    icon: <Store className="w-8 h-8 text-black" />,
  },
  {
    title: "SaaS Platforms",
    desc: "Deploy sophisticated product landing pages with interactive components natively.",
    icon: <Laptop className="w-8 h-8 text-black" />,
  },
  {
    title: "Creator Portfolios",
    desc: "Build personal brands that vividly stand out with unique, stunning visual themes.",
    icon: <UserCircle2 className="w-8 h-8 text-black" />,
  }
];

export function UseCases() {
  return (
    <section id="showcase" className="relative w-full py-24 bg-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-black mb-6 leading-tight">
              One engine. Infinite possibilities.
            </h2>
            <p className="text-lg text-black/60 leading-relaxed">
              No matter what you are building, our AI models adapt perfectly to the specific needs of your industry and target audience.
            </p>
          </div>
          <button className="flex-shrink-0 group flex items-center text-sm font-bold tracking-widest uppercase text-black hover:opacity-70 transition-opacity">
            VIEW ALL TEMPLATES <Compass className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cases.map((c, i) => (
            <div key={i} className="group relative bg-[#f8f8f8] rounded-3xl p-8 overflow-hidden hover:bg-black hover:text-white transition-colors duration-500">
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-white shadow-sm ring-1 ring-black/5 flex items-center justify-center mb-8 group-hover:bg-white/10 group-hover:ring-white/10 transition-colors duration-500">
                  {c.icon && <span className="group-hover:text-white transition-colors duration-500">{c.icon}</span>}
                </div>
                <h3 className="text-2xl font-semibold mb-4 leading-tight">{c.title}</h3>
                <p className="text-black/60 group-hover:text-white/70 leading-relaxed transition-colors duration-500">
                  {c.desc}
                </p>
              </div>

              {/* Decorative background element on hover */}
              <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-gradient-to-tr from-purple-500/20 to-blue-500/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
