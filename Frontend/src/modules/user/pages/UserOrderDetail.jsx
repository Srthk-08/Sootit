import { motion } from "framer-motion";
import { ArrowLeft, Package, MapPin, Clock, Phone, MessageSquare, AlertTriangle, ChevronRight, User } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";

const UserOrderDetail = () => {
    const navigate = useNavigate();
    const { id } = useParams();

    return (
        <div className="bg-slate-50 min-h-screen pb-24 font-inter text-slate-900">
            {/* Header */}
            <div className="px-5 pt-10 pb-5 flex items-center justify-between border-b border-black/[0.03] sticky top-0 bg-slate-50/80 backdrop-blur-md z-50">
                <div className="flex items-center gap-3">
                    <button onClick={() => navigate(-1)} className="h-9 w-9 bg-white border border-black/5 rounded-xl flex items-center justify-center active:scale-90 transition-transform shadow-sm">
                        <ArrowLeft size={16} strokeWidth={3} />
                    </button>
                    <h1 className="text-lg font-black tracking-tighter italic whitespace-nowrap">Order Details</h1>
                </div>
                <div className="bg-slate-900 text-white px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest">
                    ACTIVE
                </div>
            </div>

            <div className="px-5 py-8 space-y-6">
                {/* Expert Card */}
                <div className="bg-white p-6 rounded-[2.5rem] border border-black/5 shadow-2xl shadow-black/[0.02] flex items-center gap-4">
                    <div className="h-16 w-16 bg-slate-900 rounded-[1.8rem] flex items-center justify-center text-white text-2xl font-black">
                        A
                    </div>
                    <div>
                        <h4 className="text-lg font-black tracking-tight leading-none mb-1 text-slate-900">Amit Vikram</h4>
                        <span className="text-[10px] font-black uppercase text-slate-400 tracking-widest block mb-2">Expert Driver</span>
                        <div className="flex gap-1">
                            {[1, 2, 3, 4, 5].map(i => <motion.span key={i} className="h-1 w-3 bg-slate-900/20 rounded-full" />)}
                        </div>
                    </div>
                </div>

                {/* Timeline */}
                <div className="bg-white p-6 rounded-[2.5rem] border border-black/5 shadow-xl shadow-black/[0.01]">
                    <h3 className="text-[10px] font-black uppercase text-slate-300 tracking-[0.2em] mb-6">Booking Journey</h3>
                    <div className="space-y-6 relative">
                        <div className="absolute left-4 top-2 bottom-8 w-[2px] bg-slate-50" />
                        
                        <div className="flex gap-4 relative z-10">
                            <div className="h-8 w-8 bg-slate-900 rounded-full flex items-center justify-center text-white ring-4 ring-white shadow-lg">
                                <Package size={14} />
                            </div>
                            <div>
                                <h5 className="text-[11px] font-black uppercase tracking-tight text-slate-900">Request Accepted</h5>
                                <p className="text-[10px] font-bold text-slate-400">Today, 10:30 AM</p>
                            </div>
                        </div>

                        <div className="flex gap-4 relative z-10">
                            <div className="h-8 w-8 bg-slate-50 text-slate-300 rounded-full flex items-center justify-center ring-4 ring-white shadow-sm">
                                <Clock size={14} />
                            </div>
                            <div>
                                <h5 className="text-[11px] font-black uppercase tracking-tight text-slate-300">In Transit</h5>
                                <p className="text-[10px] font-bold text-slate-200 italic font-medium">Expert is on the way</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Tracking & Info */}
                <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white p-5 rounded-[2rem] border border-black/5">
                        <MapPin size={16} className="text-slate-400 mb-3" />
                        <span className="text-[10px] font-black uppercase text-slate-400 tracking-widest block mb-1">Pickup</span>
                        <p className="text-[11px] font-bold text-slate-800 leading-tight">Terminal 1, Delhi Airport</p>
                    </div>
                    <div className="bg-white p-5 rounded-[2rem] border border-black/5">
                        <Package size={16} className="text-slate-400 mb-3" />
                        <span className="text-[10px] font-black uppercase text-slate-400 tracking-widest block mb-1">Order ID</span>
                        <p className="text-[11px] font-bold text-slate-800 leading-tight">ORD-9821</p>
                    </div>
                </div>

                {/* Actions */}
                <div className="flex gap-3 pt-6">
                    <button className="flex-1 bg-slate-900 text-white py-4 rounded-2xl flex items-center justify-center gap-2 font-black uppercase text-[10px] tracking-[0.2em] shadow-2xl shadow-slate-900/20 active:scale-95 transition-all">
                        <Phone size={14} strokeWidth={3} /> Call Expert
                    </button>
                    <button className="flex-1 bg-white border border-slate-100 text-slate-900 py-4 rounded-2xl flex items-center justify-center gap-2 font-black uppercase text-[10px] tracking-[0.2em] active:scale-95 transition-all">
                        <MessageSquare size={14} strokeWidth={3} /> Chat
                    </button>
                </div>

                <button 
                  onClick={() => navigate('/user/support')}
                  className="w-full h-16 bg-white border border-black/5 rounded-[2rem] mt-4 flex items-center justify-center gap-2 text-slate-400 font-black uppercase text-[9px] tracking-[0.3em] active:bg-slate-50 transition-colors"
                >
                    <AlertTriangle size={14} strokeWidth={3} /> Support & Issues
                </button>
            </div>
        </div>
    );
};

export default UserOrderDetail;
