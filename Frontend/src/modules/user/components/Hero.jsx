import { motion } from "framer-motion";
import { Search, MapPin, Navigation, Car, Shield, User, ArrowRight, Star, Wallet, Wrench, Briefcase, FileText, Truck, Zap } from "lucide-react";
import heroBanner from "../../../assets/images/hero_banner.png";

/**
 * Micro-App Hero for DriverFinder
 * High density info architecture
 */
const AppHero = ({ user }) => {
    return (
        <div className="bg-white font-inter">
            {/* Bold Visual Banner */}
            <div className="px-5 pt-8 pb-6">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="relative h-48 w-full bg-slate-800 rounded-[2.5rem] overflow-hidden shadow-2xl shadow-slate-200"
                >
                    <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-transparent z-10" />
                    <div className="absolute top-0 right-0 w-full h-full bg-red-500/5 -skew-x-12 translate-x-32" />
                    <img 
                        src={heroBanner} 
                        className="absolute right-0 h-full w-2/3 object-cover object-left opacity-30"
                        alt="Banner"
                    />
                    
                    <div className="relative z-20 h-full flex flex-col justify-center pl-8 pr-4">
                        <span className="text-red-500 text-[8px] font-black uppercase tracking-[0.3em] mb-2 bg-white/10 w-fit px-3 py-1 rounded-full border border-white/5">Premium Expert</span>
                        <h2 className="text-3xl font-black text-white leading-none tracking-tighter italic mb-2">Need an<br/><span className="text-red-500 text-glow-red">Expert?</span></h2>
                        <button className="invisible mt-4 w-fit bg-red-600 text-white px-6 py-2.5 rounded-xl font-black uppercase text-[10px] tracking-widest shadow-xl active:scale-95 transition-all">
                            Book Now
                        </button>
                    </div>
                </motion.div>
            </div>

            {/* Micro Multi-Data Bar (Search + Services) */}
            <div className="px-5 mb-8">
                <div className="relative group mb-8">
                    <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none">
                        <Search size={18} className="text-slate-400 group-focus-within:text-red-600 transition-colors" strokeWidth={2.5} />
                    </div>
                    <input 
                        type="text" 
                        placeholder="Search for mechanics, drivers..." 
                        className="w-full bg-slate-50 border border-slate-100 rounded-[1.5rem] py-5 pl-14 pr-6 text-sm font-bold text-slate-800 focus:outline-none focus:border-red-600/30 focus:bg-white transition-all placeholder:text-slate-400"
                    />
                </div>

                {/* Services Micro-Scroll */}
                <div>
                    <h3 className="text-[10px] font-black uppercase text-slate-400 tracking-[0.2em] mb-4 pl-1">Prime Services</h3>
                    <div className="flex overflow-x-auto gap-4 pb-2 hide-scrollbar">
                        {[
                            { icon: Car, label: "Drivers", clr: "bg-slate-100 text-slate-800" },
                            { icon: Wrench, label: "Mechanics", clr: "bg-red-50 text-red-600" },
                            { icon: Truck, label: "Towing", clr: "bg-slate-800 text-white" },
                            { icon: FileText, label: "RTO Help", clr: "bg-red-900/10 text-red-900" },
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                whileTap={{ scale: 0.90 }}
                                className="flex flex-col items-center gap-3 group cursor-pointer min-w-[70px]"
                            >
                                <div className={`h-16 w-16 rounded-[1.6rem] flex items-center justify-center ${item.clr} border border-black/5 shadow-xl`}>
                                    <item.icon size={22} strokeWidth={2.5} />
                                </div>
                                <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">{item.label}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppHero;
