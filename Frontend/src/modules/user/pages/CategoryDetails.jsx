import { motion } from "framer-motion";
import { ArrowLeft, Star, MapPin, Navigation, Phone, Shield, Clock, Filter, Search } from "lucide-react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";

const CategoryDetails = () => {
    const navigate = useNavigate();
    const { category } = useParams();
    const [searchParams] = useSearchParams();
    const label = searchParams.get('label') || category;

    const experts = [
        { name: "Rahul Deshmukh", exp: "8 Years", rating: "4.9", reviews: "128", price: "₹450/trip", status: "Available", img: "https://i.pravatar.cc/150?u=rahul" },
        { name: "Vikram Singh", exp: "5 Years", rating: "4.8", reviews: "94", price: "₹380/trip", status: "Online", img: "https://i.pravatar.cc/150?u=vikram" },
        { name: "Sanjay Kumar", exp: "12 Years", rating: "5.0", reviews: "210", price: "₹600/trip", status: "Available", img: "https://i.pravatar.cc/150?u=sanjay" },
    ];

    return (
        <div className="bg-[#FAFBFD] min-h-screen pb-24 font-inter">
            {/* Header */}
            <div className="px-5 pt-10 pb-5 flex items-center justify-between border-b border-black/[0.03] sticky top-0 bg-[#FAFBFD]/80 backdrop-blur-md z-50">
                <div className="flex items-center gap-3">
                    <button onClick={() => navigate(-1)} className="h-9 w-9 bg-white border border-black/5 rounded-xl flex items-center justify-center active:scale-90 transition-transform shadow-sm">
                        <ArrowLeft size={16} strokeWidth={3} />
                    </button>
                    <div>
                        <h1 className="text-lg font-black tracking-tighter italic leading-none mb-1">{label}</h1>
                        <span className="text-[9px] font-black uppercase text-slate-900 tracking-widest leading-none">Top Verified</span>
                    </div>
                </div>
                <button className="h-9 w-9 bg-neutral-900 text-white rounded-xl flex items-center justify-center shadow-lg active:scale-90 transition-transform">
                    <Filter size={16} strokeWidth={2.5} />
                </button>
            </div>

            <div className="p-4 space-y-4">
                {experts.map((expert, idx) => (
                    <motion.div
                        key={idx}
                        whileTap={{ scale: 0.98 }}
                        className="bg-white border border-black/5 rounded-[2rem] p-5 shadow-xl shadow-black/[0.01] flex flex-col gap-4 transition-transform group"
                    >
                        <div className="flex items-center gap-4">
                            <div className="h-14 w-14 rounded-[1.5rem] overflow-hidden shadow-md border-2 border-white ring-1 ring-black/5">
                                <img src={expert.img} className="h-full w-full object-cover" alt="X" />
                            </div>
                            <div className="flex-1">
                                <div className="flex items-center justify-between mb-1">
                                    <h3 className="text-sm font-black text-neutral-900 tracking-tight leading-none uppercase italic">{expert.name}</h3>
                                    <div className="flex items-center gap-1 group-active:scale-95 transition-transform">
                                        <Star size={10} className="fill-yellow-500 text-yellow-500" />
                                        <span className="text-[10px] font-black text-neutral-900">{expert.rating}</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2 mb-1.5 opacity-60 font-inter">
                                    <Shield size={9} className="text-slate-900" />
                                    <span className="text-[8px] font-black uppercase tracking-widest text-slate-900">{expert.exp} Experience</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <div className="h-1.5 w-1.5 bg-slate-900 rounded-full animate-pulse" />
                                    <span className="text-[8px] font-black uppercase tracking-widest text-neutral-400">{expert.status}</span>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center justify-between pt-4 border-t border-black/[0.03]">
                            <div>
                                <span className="text-[8px] font-black uppercase text-neutral-300 tracking-widest block mb-1 leading-none">Starting from</span>
                                <h4 className="text-lg font-black text-neutral-900 italic tracking-tighter leading-none">{expert.price}</h4>
                            </div>
                            <button 
                                onClick={() => navigate('/user/booking-success')}
                                className="bg-slate-900 text-white px-7 py-3 rounded-xl font-black uppercase text-[10px] tracking-widest shadow-xl shadow-black/10 active:scale-95 transition-all"
                            >
                                Hire Expert
                            </button>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default CategoryDetails;
