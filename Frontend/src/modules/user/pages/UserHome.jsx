import { motion } from "framer-motion";
import AppHero from "../components/Hero";
import { Star, Shield, Zap, TrendingUp, ArrowRight, Navigation, Clock, Wrench, User } from "lucide-react";
import { useState, useEffect } from "react";
import { getUserData } from "../utils/userStore";

const Home = () => {
  const [user, setUser] = useState(getUserData() || { profile: { name: "Guest" }, wallet: 0 });

  useEffect(() => {
    const handleUpdate = () => setUser(getUserData());
    window.addEventListener('user_data_updated', handleUpdate);
    return () => window.removeEventListener('user_data_updated', handleUpdate);
  }, []);

  return (
    <div className="bg-white min-h-screen font-inter overflow-hidden">
      <AppHero user={user} />

      <div className="px-4 py-4 space-y-10 pb-28">
        {/* Banner Card Grid - Ultra Compact */}
        <section>
          <div className="flex items-center justify-between mb-4 px-1">
            <h3 className="text-[9px] font-black uppercase text-slate-400 tracking-[0.25em] flex items-center gap-1.5">
              <TrendingUp size={10} className="text-slate-900" /> PREMIUM SELECTION
            </h3>
            <button className="text-[9px] font-black text-slate-900 uppercase tracking-widest active:scale-95 transition-all">SEE ALL</button>
          </div>
          
          <div className="flex gap-3 overflow-x-auto hide-scrollbar -mx-4 px-4 pb-1 snap-x snap-mandatory">
            {[
              { name: "Amit Vikram", type: "Expert Driver", rate: "4.9", jobs: "120+", img: "https://images.unsplash.com/photo-1549813069-f95e44d7f498?q=80&w=400", clr: "from-slate-900/90 to-slate-900/10" },
              { name: "S. K. Garage", type: "Mechanic", rate: "4.8", jobs: "310+", img: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=400", clr: "from-neutral-900/90 to-neutral-900/10" },
              { name: "Fast Towing", type: "Expert", rate: "4.7", jobs: "85+", img: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=400", clr: "from-slate-800/90 to-slate-800/10" }
            ].map((p, i) => (
              <motion.div
                key={i}
                whileTap={{ scale: 0.96 }}
                className={`min-w-[240px] snap-center h-32 rounded-[1.8rem] relative overflow-hidden shadow-xl shadow-black/5 group`}
              >
                <img src={p.img} className="absolute inset-0 w-full h-full object-cover" alt="B" />
                <div className={`absolute inset-0 bg-gradient-to-r ${p.clr}`} />
                
                <div className="relative z-10 h-full p-4 flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <div className="h-8 w-8 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-md border border-white/10">
                      <Star size={14} className="text-white fill-white" />
                    </div>
                    <div className="bg-white/20 backdrop-blur-md px-2 py-0.5 rounded-lg border border-white/10">
                      <span className="text-white text-[8px] font-bold tracking-widest">★ {p.rate}</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-white text-base font-black tracking-tight leading-none italic mb-1">{p.name}</h4>
                    <span className="text-white/60 text-[8px] font-black uppercase tracking-[0.1em] leading-none">{p.type} • {p.jobs} Active</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Emergency Grid - Compact */}
        <section>
          <div className="flex items-center justify-between mb-4 px-1">
            <h3 className="text-[9px] font-black uppercase text-slate-400 tracking-[0.2em] leading-none">QUICK ASSIST</h3>
            <div className="h-[1px] w-4 bg-slate-900/10 rounded-full" />
          </div>
          <div className="grid grid-cols-2 gap-2.5">
             <motion.div whileTap={{scale:0.96}} className="bg-slate-900 rounded-[1.5rem] p-4 flex flex-col gap-2 shadow-lg shadow-slate-100">
                <div className="h-8 w-8 bg-white/10 rounded-xl flex items-center justify-center text-white"><Zap size={16} fill="currentColor" /></div>
                <span className="text-white text-[10px] font-black tracking-tighter italic leading-none">Roadside Help</span>
             </motion.div>
             <motion.div whileTap={{scale:0.96}} className="bg-neutral-800 rounded-[1.5rem] p-4 flex flex-col gap-2 shadow-lg shadow-neutral-100">
                <div className="h-8 w-8 bg-white/10 rounded-xl flex items-center justify-center text-white"><Shield size={16} /></div>
                <span className="text-white text-[10px] font-black tracking-tighter italic leading-none">Legal Support</span>
             </motion.div>
          </div>
        </section>

        {/* Tracking Module - Low Profile */}
        <section>
          <div className="flex items-center justify-between mb-4 px-1">
            <h3 className="text-[9px] font-black uppercase text-slate-400 tracking-[0.2em]">LIVE ENGINE</h3>
          </div>
          <motion.div 
            whileTap={{ scale: 0.98 }}
            className="bg-slate-50 border border-slate-100 rounded-[1.4rem] p-3 flex items-center gap-3 active:scale-95 transition-all"
          >
            <div className="h-9 w-9 bg-slate-900 text-white rounded-xl flex items-center justify-center shadow-lg shadow-slate-100">
              <Clock size={16} strokeWidth={2.5} />
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-center mb-0.5">
                <h4 className="text-[10px] font-black text-slate-900 leading-none italic">Mechanic Dispatched</h4>
                <div className="flex gap-0.5 animate-pulse">
                    <div className="h-1 w-2 bg-slate-400 rounded-full" />
                    <div className="h-1 w-1 bg-slate-200 rounded-full" />
                </div>
              </div>
              <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest leading-none">Coming in 8 Mins</span>
            </div>
          </motion.div>
        </section>

        {/* Compact Trust Stats */}
        <div className="grid grid-cols-2 gap-2 pb-6">
          {[
            { label: "15k+", sub: "Users", icon: User, clr: "text-slate-800", bg: "bg-slate-100" },
            { label: "500+", sub: "Pros", icon: Star, clr: "text-slate-900", bg: "bg-slate-50" },
          ].map((item, i) => (
            <div key={i} className="bg-white border border-slate-100 rounded-[1.2rem] p-3 flex flex-col items-center gap-1.5 text-center">
              <div className={`h-8 w-8 ${item.bg} ${item.clr} rounded-xl flex items-center justify-center`}>
                <item.icon size={14} strokeWidth={2.5} />
              </div>
              <h4 className="text-[9px] font-black text-slate-900 uppercase tracking-tighter">{item.label}</h4>
              <p className="text-[7px] font-bold text-slate-400 uppercase tracking-widest">{item.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
