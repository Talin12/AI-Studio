import { Search, Bell, Sparkles, Rocket } from "lucide-react";

export function PhoneMockup() {
  return (
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
  );
}
