import { motion } from "framer-motion";
import { Search, MapPin, Navigation, Clock, Star, ArrowRight, Filter } from "lucide-react";
import { useNavigate } from "react-router-dom";

const UserFind = () => {
  const navigate = useNavigate();
  const nearbyVendors = [
    { name: "Amit Vikram", type: "Driver", dist: "0.8 km", rating: "4.9", clr: "text-slate-900", bg: "bg-slate-50", img: "https://i.pravatar.cc/100?u=amit" },
    { name: "S. K. Garage", type: "Mechanic", dist: "1.2 km", rating: "4.8", clr: "text-slate-700", bg: "bg-slate-50", img: "https://i.pravatar.cc/100?u=sk" },
    { name: "Fast Towing", type: "Towing", dist: "2.5 km", rating: "4.7", clr: "text-neutral-600", bg: "bg-neutral-50", img: "https://i.pravatar.cc/100?u=fast" },
  ];

  return (
    <div className="bg-[#FAFBFD] min-h-screen font-inter pb-24">
      {/* Compact Map Section */}
      <div className="h-48 bg-slate-100 relative overflow-hidden flex items-center justify-center border-b border-black/[0.03]">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '15px 15px' }} />
        <motion.div 
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="h-10 w-10 bg-slate-900 rounded-2xl flex items-center justify-center shadow-2xl shadow-slate-900/40 relative z-10"
        >
          <MapPin size={20} className="text-white" strokeWidth={3} />
        </motion.div>
      </div>

      <div className="px-4 -mt-6 relative z-20 space-y-4">
        <div className="flex items-center justify-between px-2 bg-white/80 backdrop-blur-md p-3 rounded-2xl border border-black/5 shadow-sm mb-6">
          <h2 className="text-[10px] font-black uppercase text-neutral-900 tracking-widest leading-none pl-3 border-l-2 border-slate-900">3 Experts Nearby</h2>
          <button className="h-8 w-8 bg-neutral-900 text-white rounded-xl flex items-center justify-center active:scale-90 transition-transform shadow-lg">
            <Filter size={14} strokeWidth={3} />
          </button>
        </div>

        <div className="grid gap-3">
          {nearbyVendors.map((v, i) => (
            <motion.div
              key={i}
              whileTap={{ scale: 0.98 }}
              className="bg-white border border-black/5 rounded-[2rem] p-4 shadow-xl shadow-black/[0.01] flex items-center gap-4 transition-all"
            >
              <div className="h-14 w-14 rounded-[1.5rem] overflow-hidden border-2 border-white shadow-md relative">
                <img src={v.img} className="h-full w-full object-cover" alt="X" />
                <div className="absolute -bottom-1 -right-1 h-5 w-5 bg-green-500 rounded-full border-2 border-white" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-0.5">
                  <h3 className="text-sm font-black text-neutral-900 leading-none">{v.name}</h3>
                  <div className="flex items-center gap-1">
                    <Star size={10} className="fill-yellow-500 text-yellow-500" />
                    <span className="text-[10px] font-black">{v.rating}</span>
                  </div>
                </div>
                <span className={`text-[9px] font-black uppercase tracking-widest ${v.clr} leading-none block mb-1.5`}>{v.type}</span>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1 opacity-40">
                    <Navigation size={10} />
                    <span className="text-[8px] font-black">{v.dist} Away</span>
                  </div>
                </div>
              </div>
              <div className="h-9 w-9 bg-neutral-50 rounded-xl flex items-center justify-center text-neutral-300 active:bg-slate-900 active:text-white transition-colors">
                <ArrowRight size={16} strokeWidth={3} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserFind;
