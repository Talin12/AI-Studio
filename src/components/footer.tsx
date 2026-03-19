import { ArrowRight, Twitter, Github, Linkedin, MapPin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative w-full bg-[#050505] text-white pt-32 pb-12 overflow-hidden">
      
      {/* Decorative top blur for seamless transition */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 md:px-12 relative z-10">
        
        {/* Massive CTA Overlay */}
        <div className="relative -mt-48 mb-32 bg-white text-black rounded-[40px] p-12 md:p-24 text-center shadow-2xl flex flex-col items-center justify-center">
          <h2 className="text-4xl md:text-6xl font-medium tracking-tight mb-8 leading-tight max-w-3xl">
            Ready to deploy your next masterpiece?
          </h2>
          <p className="text-xl text-black/60 mb-12 max-w-2xl">
            Join thousands of designers and agencies building the future of the web automatically.
          </p>
          <button className="bg-black text-white px-10 py-5 rounded-full font-bold tracking-widest text-sm uppercase hover:bg-zinc-800 transition-transform active:scale-95 flex items-center group">
            Start Generating Now
            <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          <div className="absolute -z-10 w-full h-full inset-0 bg-[radial-gradient(ellipse_at_top,--theme(--color-black/.05),transparent_50%)] pointer-events-none" />
        </div>

        {/* Footer Top */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-24">
          <div className="col-span-1 md:col-span-2">
            <div className="text-3xl font-extrabold tracking-tighter mb-6">AI.STUDIO</div>
            <p className="text-white/40 max-w-sm leading-relaxed mb-8">
              Pioneering the intersection of artificial intelligence and high-end digital design. We build tools that empower human creativity.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/20 transition-colors text-white">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/20 transition-colors text-white">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/20 transition-colors text-white">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold uppercase tracking-widest text-sm mb-6 text-white/80">Product</h4>
            <ul className="space-y-4 text-white/50">
              <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Templates</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Integrations</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Changelog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold uppercase tracking-widest text-sm mb-6 text-white/80">Company</h4>
            <ul className="space-y-4 text-white/50">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Legal</a></li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between text-xs font-medium tracking-widest uppercase text-white/30">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <MapPin className="w-4 h-4" />
            <span>Tokyo, Japan HQ</span>
          </div>
          <div className="flex space-x-6">
            <span>© 2026 AI.STUDIO</span>
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
