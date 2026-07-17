import { useContext } from "react";
import MemberCard from "./components/MemberCard";
import { developers } from "./lib/data/teamMembers";
import { MyStore } from "./context/MemberContext";

function App() {
  const { active, setActive, id } = useContext(MyStore);

  // Safeguard against undefined lookups
  const obj = developers.find((e) => e.id == id);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 antialiased flex flex-col relative">
      
      {/* 1. Header Section - Fluid & Adaptive Typography */}
      <header className="bg-white border-b border-slate-100 py-6 px-4 text-center sticky top-0 z-30 backdrop-blur-md bg-white/90">
        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-900">
          Team Member Showcase
        </h1>
        <p className="text-slate-500 mt-1 sm:mt-2 text-xs sm:text-sm md:text-base font-medium">
          Meet the minds building the future of our products.
        </p>
      </header>

      {/* Main Layout Container */}
      <div className="flex-1 flex relative w-full">
        
        {/* 2. Adaptive Grid - Scales smoothly from 1 to 7 columns depending on viewport */}
        <main 
          className={`p-4 sm:p-6 md:p-8 transition-all duration-500 ease-in-out w-full grid gap-4 sm:gap-6 auto-rows-max
            ${active && obj
              ? "lg:w-[calc(100%-400px)] grid-cols-1 min-[480px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4" 
              : "grid-cols-1 min-[480px]:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7"
            }`}
        >
          {developers.map((member, index) => (
            <MemberCard member={member} key={member.id || index} />
          ))}
        </main>

        {/* 3. Mobile/Tablet Backdrop Overlay - Closes drawer when tapping outside */}
        <div 
          onClick={() => setActive(false)}
          className={`fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-40 transition-opacity duration-300 lg:hidden
            ${active && obj ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        />

        {/* 4. The Profile Drawer - Full viewport on mobile, elegant sidebar on desktop */}
        <aside 
          className={`fixed inset-y-0 right-0 z-50 w-full sm:w-[400px] bg-white shadow-2xl border-l border-slate-200
            transform transition-transform duration-500 ease-in-out flex flex-col
            ${active && obj ? "translate-x-0" : "translate-x-full"}`}
        >
          {obj && (
            <div className="flex flex-col h-full p-6 justify-between overflow-y-auto">
              
              {/* Drawer Header */}
              <div className="flex items-start justify-between pb-4 border-b border-slate-100">
                <div className="pr-4">
                  <h2 className="text-xl sm:text-2xl font-serif font-bold text-slate-900 leading-tight break-words">
                    {obj.name}
                  </h2>
                  <p className="text-indigo-600 font-semibold text-xs sm:text-sm tracking-wide mt-1 uppercase">
                    {obj.company}
                  </p>
                </div>
                
                {/* Mobile-friendly accessible close touch target */}
                <button 
                  onClick={() => setActive(false)} 
                  className="p-2 -mr-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors duration-200"
                  aria-label="Close details"
                >
                  <span className="text-2xl font-mono leading-none">&times;</span>
                </button>
              </div>

              {/* Drawer Body */}
              <div className="py-6 flex-1 space-y-6">
                <div className="grid grid-cols-2 gap-4 bg-slate-50 p-4 rounded-xl border border-slate-100">
                  <div>
                    <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-400 block mb-0.5">Role</span>
                    <span className="text-xs sm:text-sm font-medium text-slate-700 break-words">{obj.role}</span>
                  </div>
                  <div>
                    <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-400 block mb-0.5">Experience</span>
                    <span className="text-xs sm:text-sm font-medium text-slate-700">{obj.experience}</span>
                  </div>
                </div>

                <div>
                  <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">Core Tech Stack</span>
                  <div className="inline-flex items-center px-3 py-1.5 rounded-lg bg-indigo-50 text-indigo-700 text-xs sm:text-sm font-semibold border border-indigo-100/50">
                    {obj.technology}
                  </div>
                </div>
              </div>

              {/* Drawer Footer */}
              <div className="pt-4 border-t border-slate-100 mt-auto">
                <button className="w-full py-3 bg-slate-900 hover:bg-slate-800 text-white font-medium text-sm rounded-xl shadow-sm transition-all duration-200 active:scale-[0.98]">
                  View Full Profile
                </button>
              </div>
            </div>
          )}
        </aside>

      </div>
    </div>
  );
}

export default App;