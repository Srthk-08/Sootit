import { motion, AnimatePresence } from "framer-motion";
import { User, Shield, Wallet, ChevronRight, Settings, LogOut, Package, Star, CreditCard, Bell, Lock, HelpCircle, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { getUserData, logoutUser } from "../utils/userStore";
import { useState, useEffect } from "react";

const UserProfile = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState(getUserData() || { profile: { name: "Guest" }, wallet: 0 });

    useEffect(() => {
        const handleUpdate = () => setUser(getUserData());
        window.addEventListener('user_data_updated', handleUpdate);
        return () => window.removeEventListener('user_data_updated', handleUpdate);
    }, []);

    const MenuButton = ({ icon: Icon, label, sublabel, onClick, color = "text-neutral-500", bg = "bg-neutral-50" }) => (
        <button 
            onClick={onClick}
            className="w-full flex items-center justify-between p-4 active:bg-neutral-50 transition-colors group"
        >
            <div className="flex items-center gap-4">
                <div className={`h-11 w-11 ${bg} ${color} rounded-2xl flex items-center justify-center shadow-sm group-active:scale-90 transition-transform`}>
                    <Icon size={20} strokeWidth={2.5} />
                </div>
                <div className="flex flex-col items-start">
                    <span className="text-[13px] font-black tracking-tight text-neutral-900">{label}</span>
                    {sublabel && <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest">{sublabel}</span>}
                </div>
            </div>
            <ChevronRight size={16} className="text-neutral-300 group-hover:text-blue-600 transition-colors" strokeWidth={3} />
        </button>
    );

    return (
        <div className="bg-white min-h-screen pb-28 font-inter">
            {/* Custom Header for Profile (Replaces Global Header) */}
            <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-md px-6 py-4 flex items-center justify-between border-b border-neutral-50 shadow-sm shadow-black/[0.02]">
                <h1 className="text-xl font-black tracking-tight italic">My Account</h1>
                <button 
                  onClick={() => navigate('/user/preferences')}
                  className="h-10 w-10 bg-neutral-50 rounded-2xl flex items-center justify-center border border-neutral-100 shadow-sm active:scale-90 transition-transform"
                >
                    <Settings size={18} className="text-neutral-900" strokeWidth={2.5} />
                </button>
            </div>

            <div className="px-6 pt-8 pb-6">
                {/* Profile Card */}
                <div className="flex items-center gap-5 mb-10">
                    <div className="relative">
                        <div className="h-24 w-24 bg-slate-800 rounded-[2.5rem] flex items-center justify-center text-white text-4xl font-black shadow-2xl shadow-slate-800/30 border-4 border-white">
                            {user.profile.name?.[0] || 'U'}
                        </div>
                        <div className="absolute -bottom-1 -right-1 h-8 w-8 bg-slate-900 rounded-full border-4 border-white flex items-center justify-center">
                            <Shield size={14} className="text-white" fill="white" />
                        </div>
                    </div>
                    <div className="flex-1">
                        <h2 className="text-2xl font-black text-slate-900 tracking-tight leading-tight mb-1">{user.profile.name || "Arjun Dev"}</h2>
                        <span className="text-[11px] font-black text-neutral-400 uppercase tracking-[0.2em] mb-2.5">ID: USR-7721A-09</span>
                        <div className="flex items-center gap-1.5 bg-slate-50 text-slate-900 px-3 py-1.5 rounded-xl self-start border border-slate-100 shadow-sm">
                            <Star size={12} className="fill-slate-900" />
                            <span className="text-[10px] font-black uppercase tracking-widest leading-none">Premium User</span>
                        </div>
                    </div>
                </div>

                {/* Wallet Micro-Shell */}
                <motion.div 
                    whileTap={{ scale: 0.98 }}
                    className="bg-slate-900 rounded-[3rem] p-8 text-white shadow-2xl shadow-black/20 relative overflow-hidden group mb-12"
                >
                    <div className="absolute top-0 right-0 h-full w-40 bg-white/5 skew-x-[-25deg] translate-x-12 blur-3xl" />
                    <div className="relative z-10">
                        <div className="flex justify-between items-start mb-8">
                            <div>
                                <span className="text-[11px] font-black uppercase text-white/40 tracking-[0.2em] mb-2 block leading-none">Total Balance</span>
                                <h3 className="text-4xl font-black tracking-tighter italic">₹ {user.wallet?.toFixed(1) || "0.0"}</h3>
                            </div>
                            <div className="h-12 w-12 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-md shadow-inner">
                                <Wallet size={22} strokeWidth={2.5} />
                            </div>
                        </div>
                        <div className="flex gap-3">
                            <button className="flex-1 bg-white text-slate-900 py-4 rounded-2xl font-black uppercase text-[11px] tracking-widest active:scale-95 transition-all shadow-xl shadow-white/5">Add Money</button>
                            <button 
                                onClick={() => navigate('/user/history')}
                                className="flex-1 bg-white/10 text-white py-4 rounded-2xl font-black uppercase text-[11px] tracking-widest active:scale-95 transition-all border border-white/5 backdrop-blur-md"
                            >History</button>
                        </div>
                    </div>
                </motion.div>

                {/* Menu Sections */}
                <div className="space-y-10">
                    <section>
                        <h3 className="text-[11px] font-black uppercase text-neutral-300 tracking-[0.25em] mb-5 pl-1">Booking & Rating</h3>
                        <div className="bg-white border border-neutral-100 rounded-[2.5rem] overflow-hidden shadow-xl shadow-black/[0.01]">
                            <MenuButton 
                                icon={Package} 
                                label="My Trip History" 
                                sublabel="Manage Bookings" 
                                bg="bg-slate-50" 
                                color="text-slate-800"
                                onClick={() => navigate('/user/orders')}
                            />
                            <div className="mx-6 border-t border-neutral-50" />
                            <MenuButton 
                                icon={Star} 
                                label="My Rated Experts" 
                                sublabel="Expert Feedback" 
                                bg="bg-neutral-50" 
                                color="text-neutral-800"
                                onClick={() => navigate('/user/reviews')}
                            />
                        </div>
                    </section>

                    <section>
                        <h3 className="text-[11px] font-black uppercase text-neutral-300 tracking-[0.25em] mb-5 pl-1">System & Personal</h3>
                        <div className="bg-white border border-neutral-100 rounded-[2.5rem] overflow-hidden shadow-xl shadow-black/[0.01]">
                            <MenuButton 
                                icon={HelpCircle} 
                                label="Help & Support" 
                                sublabel="24/7 Assistance" 
                                bg="bg-neutral-50" 
                                color="text-neutral-900"
                                onClick={() => navigate('/user/support')}
                            />
                            <div className="mx-6 border-t border-neutral-50" />
                            <MenuButton 
                                icon={Settings} 
                                label="App Settings" 
                                sublabel="UI & Themes" 
                                bg="bg-neutral-50" 
                                color="text-neutral-900"
                                onClick={() => navigate('/user/preferences')}
                            />
                        </div>
                    </section>

                    {/* Sign Out Card */}
                    <motion.button 
                        whileTap={{ scale: 0.98 }}
                        onClick={logoutUser}
                        className="w-full h-20 bg-slate-50 text-slate-900 rounded-[2.5rem] border border-slate-100 flex items-center justify-center gap-4 font-black uppercase text-xs tracking-[0.3em] active:scale-95 transition-all shadow-xl shadow-slate-900/5 mb-10"
                    >
                        <LogOut size={18} strokeWidth={3} />
                        Logout Session
                    </motion.button>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;
