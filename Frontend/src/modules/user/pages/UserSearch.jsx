import { motion } from "framer-motion";
import { Search, MapPin, Navigation, Clock, Star, ArrowRight, Filter, TrendingUp, Shield, Wrench, FileText, Truck, Zap, Briefcase } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const UserSearch = () => {
    const navigate = useNavigate();
    const [query, setQuery] = useState("");
    const categories = [
        { label: "Drivers", icon: Navigation, clr: "bg-slate-900 text-white", count: 12 },
        { label: "Mechanics", icon: Wrench, clr: "bg-slate-50 text-slate-800", count: 8 },
        { label: "RTO Help", icon: FileText, clr: "bg-neutral-800 text-white", count: 4 },
        { label: "Towing", icon: Truck, clr: "bg-slate-100 text-slate-900 border border-slate-200", count: 6 },
        { label: "Legal Advisor", icon: Briefcase, clr: "bg-slate-900 text-white", count: 3 },
    ];

    const popularSearches = ["Expert Driver for Highway", "Swift Dzire Service", "Need Emergency Towing", "RTO Transfer Help"];

    return (
        <div className="bg-[#FAFBFD] min-h-screen pb-24 font-inter">
            {/* Minimal Search Header */}
            <div className="px-5 pt-10 pb-6 sticky top-0 bg-[#FAFBFD]/80 backdrop-blur-md z-50">
                <div className="relative group">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400 group-focus-within:text-slate-900 transition-colors" size={16} />
                    <input 
                        type="text"
                        placeholder="Search service or expert..."
                        className="w-full bg-white border border-black/5 rounded-2xl py-3.5 pl-12 pr-4 text-xs font-bold shadow-xl shadow-black/[0.02] focus:ring-2 focus:ring-slate-900/10 focus:border-slate-900 outline-none transition-all placeholder:text-neutral-300"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                </div>
            </div>

            <div className="px-5 space-y-8">
                {/* Compact Grid */}
                <section>
                    <div className="flex items-center justify-between mb-4 px-1">
                        <h3 className="text-[10px] font-black uppercase text-neutral-400 tracking-[0.2em] leading-none text-micro">Browse Experts</h3>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                        {categories.map((cat, idx) => (
                            <motion.div
                                key={idx}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => navigate(`/user/category/${cat.label.toLowerCase()}?label=${cat.label}`)}
                                className="bg-white rounded-[2rem] p-5 border border-black/5 shadow-xl shadow-black/[0.01] flex flex-col items-center gap-2 transition-all cursor-pointer group active:border-slate-900/30"
                            >
                                <div className={`h-10 w-10 ${cat.clr} rounded-xl flex items-center justify-center shadow-sm group-active:scale-95 transition-transform`}>
                                    <cat.icon size={18} strokeWidth={2.5} />
                                </div>
                                <div className="text-center">
                                    <h3 className="text-[10px] font-black uppercase tracking-widest text-neutral-900 leading-none mb-1">{cat.label}</h3>
                                    <p className="text-[8px] font-bold text-neutral-400 uppercase tracking-tighter opacity-80">{cat.count} NEARBY</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Trending Micro-Pills */}
                <section>
                    <div className="flex items-center justify-between mb-4 px-1">
                        <h3 className="text-[10px] font-black uppercase text-neutral-400 tracking-[0.2em] leading-none text-micro">Trending Search</h3>
                    </div>
                    <div className="flex flex-wrap gap-2 pb-10">
                        {popularSearches.map((tag, i) => (
                            <button key={i} className="bg-white border border-black/5 px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest text-neutral-600 shadow-sm active:scale-90 transition-transform">
                                {tag}
                            </button>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default UserSearch;
