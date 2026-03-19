import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/src/lib/utils";

const faqs = [
  {
    q: "How does the AI actually build the website?",
    a: "Our proprietary engine parses your text prompt into structural requirements, selects the optimal React components from our verified library, and generates the layout via an intelligent AST (Abstract Syntax Tree) builder."
  },
  {
    q: "Can I export the code once it's generated?",
    a: "Absolutely. All Pro and Agency users can export pristine, human-readable React and Tailwind CSS source code instantly to their local environment."
  },
  {
    q: "Is the generated code SEO friendly?",
    a: "Yes. The AI automatically generates semantic HTML5 tags, alt properties, structured meta data, and fully responsive layouts that Google and other search engines prioritize."
  },
  {
    q: "Do I retain ownership of the websites I build?",
    a: "Yes. You have 100% ownership over all assets, copy, and code generated for your projects. We claim no persistent rights to your creations."
  },
  {
    q: "Can it integrate with existing backends or CMS?",
    a: "Our generated apps are standard React/Vite frontends. You can easily hook them up to Supabase, Firebase, Sanity, or any standard REST/GraphQL API post-export."
  }
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="relative w-full py-32 bg-white overflow-hidden">
      <div className="mx-auto max-w-4xl px-6 md:px-12">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-black mb-6 leading-tight">
            Frequently asked questions
          </h2>
          <p className="text-lg text-black/60">
            Everything you need to know about the product and billing.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div 
                key={i} 
                className={cn(
                  "border border-black/5 rounded-3xl overflow-hidden transition-all duration-300",
                  isOpen ? "bg-zinc-50 shadow-sm" : "bg-white hover:bg-zinc-50"
                )}
              >
                <button 
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                >
                  <span className="font-semibold text-lg text-black">{faq.q}</span>
                  <div className={cn(
                    "flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors",
                    isOpen ? "bg-black text-white" : "bg-black/5 text-black"
                  )}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>
                <div 
                  className={cn(
                    "overflow-hidden transition-all duration-500 ease-in-out",
                    isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  )}
                >
                  <p className="p-6 pt-0 text-black/60 leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
