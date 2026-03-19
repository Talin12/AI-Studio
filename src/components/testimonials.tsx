import { Star } from "lucide-react";
import { cn } from "@/src/lib/utils";

const reviews = [
  {
    name: "Sarah Jenkins",
    role: "Founder, Bloom",
    content: "We fired our dev team and moved entirely to AI.STUDIO. The code it generates is literally indistinguishable from a senior React engineer's output."
  },
  {
    name: "Marcus Thorne",
    role: "CTO, DataFlow",
    content: "It didn't just build our landing page, it continuously optimizes the button placements based on live traffic. Our conversion rates are up 300%."
  },
  {
    name: "Elena Rodriguez",
    role: "Indie Hacker",
    content: "I prompted for a dark-mode SaaS dashboard theme and it assembled the whole thing in 40 seconds. I've saved thousands of hours."
  }
];

export function Testimonials() {
  return (
    <section className="relative w-full py-32 bg-zinc-50 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="text-sm font-bold tracking-widest uppercase text-black/40 mb-4">Wall of Love</p>
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-black mb-6 leading-tight">
            Trusted by innovators
          </h2>
          <p className="text-lg text-black/60 leading-relaxed">
            See how forward-thinking teams are using our agents to deploy best-in-class experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <div key={i} className="bg-white rounded-3xl p-10 shadow-sm ring-1 ring-black/5 flex flex-col h-full hover:-translate-y-1 transition-transform duration-500">
              <div className="flex space-x-1 mb-8">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-5 h-5 text-amber-400 fill-amber-400" />
                ))}
              </div>
              <p className="text-lg text-black leading-relaxed flex-grow italic">
                "{review.content}"
              </p>
              <div className="mt-8 pt-8 border-t border-black/5 flex items-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-black to-zinc-600 mr-4" />
                <div>
                  <h4 className="font-semibold text-black">{review.name}</h4>
                  <p className="text-sm text-black/50">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
