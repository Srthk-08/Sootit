import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, Calendar, MapPin, Navigation, User } from "lucide-react";
import { useNavigate } from "react-router-dom";

const UserBookingSuccess = () => {
    const navigate = useNavigate();

    return (
        <div className="bg-white min-h-screen flex flex-col font-inter text-slate-900 overflow-hidden">
            {/* Animating Background Circles */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <motion.div 
                    animate={{ scale: [1, 1.2, 1], opacity: [0.03, 0.05, 0.03] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="absolute -top-20 -right-20 h-80 w-80 bg-slate-900 rounded-full blur-3xl" 
                />
            </div>

            <div className="flex-1 flex flex-col items-center justify-center p-8">
                {/* Success Icon */}
                <motion.div
                    initial={{ scale: 0, rotate: -20 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                    className="h-28 w-28 bg-slate-900 rounded-[2.5rem] flex items-center justify-center text-white shadow-2xl shadow-slate-900/40 mb-10 relative"
                >
                    <CheckCircle2 size={48} strokeWidth={3} />
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="absolute inset-0 rounded-[2.5rem] border-2 border-slate-900 animate-ping opacity-20"
                    />
                </motion.div>

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-center mb-12"
                >
                    <h1 className="text-4xl font-black italic tracking-tighter mb-3">Expert Booked.</h1>
                    <p className="text-sm font-bold text-slate-400 max-w-[260px] mx-auto leading-relaxed">Your professional is on the way. You can track the progress in your active trips.</p>
                </motion.div>

                {/* Details Card */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="w-full bg-slate-50 p-6 rounded-[2.5rem] border border-black/5 relative overflow-hidden mb-8"
                >
                    <div className="absolute top-0 right-0 p-4 opacity-5">
                       <Navigation size={40} />
                    </div>
                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <div className="h-4 w-4 bg-slate-200 rounded-full flex items-center justify-center">
                                <div className="h-1.5 w-1.5 bg-slate-900 rounded-full" />
                            </div>
                            <span className="text-[10px] font-black uppercase tracking-widest text-slate-900">Arriving in 15 mins</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <User size={14} className="text-slate-300" />
                            <span className="text-[11px] font-bold text-slate-500">Expert: <span className="text-slate-900">Rahul Deshmukh</span></span>
                        </div>
                        <div className="flex items-center gap-3">
                            <MapPin size={14} className="text-slate-300" />
                            <span className="text-[11px] font-bold text-slate-500">To: <span className="text-slate-900">Terminal 1, Delhi</span></span>
                        </div>
                    </div>
                </motion.div>

                {/* Actions */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="w-full space-y-3"
                >
                    <button 
                        onClick={() => navigate('/user/orders')}
                        className="w-full bg-slate-900 text-white py-4 rounded-2xl font-black uppercase tracking-[0.2em] text-xs flex items-center justify-center gap-2 shadow-2xl shadow-slate-900/20 active:scale-95 transition-all"
                    >
                        Track Trip <ArrowRight size={16} strokeWidth={3} />
                    </button>
                    <button 
                        onClick={() => navigate('/user')}
                        className="w-full bg-white border border-slate-100 text-slate-400 py-4 rounded-2xl font-black uppercase tracking-[0.2em] text-xs active:bg-slate-50 transition-colors"
                    >
                        Go Home
                    </button>
                </motion.div>
            </div>
        </div>
    );
};

export default UserBookingSuccess;
