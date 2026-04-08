import { motion } from "framer-motion";
import { ArrowLeft, Star, StarOff, Clock, User, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const UserReviews = () => {
    const navigate = useNavigate();
    const reviews = [
        { id: "REV-1291", expert: "Amit Vikram", type: "Expert Driver", date: "Today", rating: 5, comment: "Excellent driving skills, very professional.", clr: "bg-slate-900 text-white" },
        { id: "REV-1112", expert: "Sharma Garage", type: "Full Service", date: "Yesterday", rating: 4, comment: "Good service, but took slightly longer than expected.", clr: "bg-slate-50 text-slate-800" },
    ];

    return (
        <div className="bg-[#FAFBFD] min-h-screen pb-24 font-inter text-neutral-900">
            {/* Header */}
            <div className="px-5 pt-10 pb-5 flex items-center gap-3 border-b border-black/[0.03] sticky top-0 bg-[#FAFBFD]/80 backdrop-blur-md z-50">
                <button onClick={() => navigate(-1)} className="h-9 w-9 bg-white border border-black/5 rounded-xl flex items-center justify-center active:scale-90 transition-transform shadow-sm">
                    <ArrowLeft size={16} strokeWidth={3} />
                </button>
                <h1 className="text-lg font-black tracking-tighter italic">Expert Feedback</h1>
            </div>

            <div className="p-4 space-y-4">
                {reviews.map((rev, idx) => (
                    <motion.div
                        key={idx}
                        whileTap={{ scale: 0.98 }}
                        className="bg-white border border-black/5 rounded-[2rem] p-5 shadow-xl shadow-black/[0.01] flex flex-col gap-4 active:border-slate-900/30 transition-all group"
                    >
                        <div className="flex items-center justify-between mb-1">
                            <div className="flex items-center gap-3">
                                <div className={`h-10 w-10 ${rev.clr} rounded-2xl flex items-center justify-center font-black text-xs shadow-sm`}>
                                    {rev.expert.charAt(0)}
                                </div>
                                <div className="flex flex-col">
                                    <h4 className="text-sm font-black text-neutral-900 leading-none mb-1.5 underline decoration-black/5 underline-offset-4 italic">{rev.expert}</h4>
                                    <span className="text-[10px] font-black uppercase text-neutral-400 tracking-widest leading-none">{rev.type}</span>
                                </div>
                            </div>
                            <span className="text-[8px] font-black uppercase text-neutral-300 tracking-widest">{rev.date}</span>
                        </div>
                        
                        <div className="flex items-center gap-1">
                           {[...Array(5)].map((_, i) => (
                               <Star key={i} size={10} className={i < rev.rating ? "fill-yellow-500 text-yellow-500" : "fill-neutral-100 text-neutral-100"} />
                           ))}
                        </div>
                        
                        <p className="text-[10px] font-bold text-neutral-500 italic leading-relaxed border-l-2 border-slate-900 pl-3">"{rev.comment}"</p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default UserReviews;
