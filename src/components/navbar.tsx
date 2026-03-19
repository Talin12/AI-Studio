import { ShoppingBag, Menu } from "lucide-react";

export function Navbar() {
  return (
    <nav className="relative z-20 flex items-center justify-between px-6 md:px-12">
      <div className="text-2xl font-extrabold tracking-tighter">AI.STUDIO</div>
      <div className="hidden md:flex items-center space-x-12 text-sm font-medium uppercase tracking-widest opacity-70">
        <a href="#build" className="hover:opacity-100 transition-opacity">Build</a>
        <a href="#showcase" className="hover:opacity-100 transition-opacity">Showcase</a>
        <a href="#pricing" className="hover:opacity-100 transition-opacity">Pricing</a>
        <a href="#about" className="hover:opacity-100 transition-opacity">About</a>
      </div>
      <div className="flex items-center space-x-6">
        <button className="uppercase text-xs font-bold tracking-widest opacity-70 hover:opacity-100 transition-opacity flex items-center">
          CART <ShoppingBag className="ml-2 w-4 h-4" />
        </button>
        <Menu className="md:hidden w-6 h-6" />
      </div>
    </nav>
  );
}
