import { motion } from "framer-motion";
import { ArrowLeft, Bell, Globe, Moon, Shield, Lock, Eye, Volume2, Search, Settings } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const UserPreferences = () => {
    const navigate = useNavigate();
    const [notifications, setNotifications] = useState(true);
    const [darkMode, setDarkMode] = useState(false);

    const PreferenceToggle = ({ icon: Icon, label, status, setStatus, clr }) => (
        <div className="flex items-center justify-between p-5 active:bg-neutral-50 transition-colors">
            <div className="flex items-center gap-4">
                <div className={`h-11 w-11 ${clr} rounded-2xl flex items-center justify-center shadow-sm`}>
                    <Icon size={20} strokeWidth={2.5} />
                </div>
                <div className="flex flex-col">
                    <span className="text-[13px] font-black tracking-tight text-neutral-900 leading-none mb-1">{label}</span>
                    <span className="text-[9px] font-black text-neutral-400 uppercase tracking-widest leading-none italic">{status ? 'Enabled' : 'Disabled'}</span>
                </div>
            </div>
            <button 
                onClick={() => setStatus(!status)}
                className={`h-7 w-12 rounded-full relative transition-colors duration-300 ${status ? 'bg-blue-600 shadow-lg shadow-blue-600/20' : 'bg-neutral-200'}`}
            >
                <motion.div 
                    animate={{ x: status ? 22 : 4 }}
                    className="h-5 w-5 bg-white rounded-full absolute top-1 shadow-sm"
                />
            </button>
        </div>
    );

    return (
        <div className="bg-[#FAFBFD] min-h-screen pb-24 font-inter text-neutral-900">
            {/* Header */}
            <div className="px-5 pt-10 pb-5 flex items-center gap-3 border-b border-black/[0.03] sticky top-0 bg-[#FAFBFD]/80 backdrop-blur-md z-50">
                <button onClick={() => navigate(-1)} className="h-9 w-9 bg-white border border-black/5 rounded-xl flex items-center justify-center active:scale-90 transition-transform shadow-sm">
                    <ArrowLeft size={16} strokeWidth={3} />
                </button>
                <h1 className="text-lg font-black tracking-tighter italic">App Settings</h1>
            </div>

            <div className="px-5 pt-8 space-y-8">
                <section>
                    <h3 className="text-[10px] font-black uppercase text-neutral-400 tracking-[0.2em] mb-4 px-1">App Interaction</h3>
                    <div className="bg-white border border-black/5 rounded-[2.5rem] overflow-hidden shadow-xl shadow-black/[0.01]">
                        <PreferenceToggle 
                            icon={Bell} 
                            label="Push Notifications" 
                            status={notifications} 
                            setStatus={setNotifications} 
                            clr="bg-slate-900 text-white" 
                        />
                        <div className="mx-6 border-t border-black/[0.02]" />
                        <PreferenceToggle 
                            icon={Moon} 
                            label="Dark Appearance" 
                            status={darkMode} 
                            setStatus={setDarkMode} 
                            clr="bg-slate-100 text-slate-900" 
                        />
                    </div>
                </section>

                <section>
                    <h3 className="text-[10px] font-black uppercase text-neutral-400 tracking-[0.2em] mb-4 px-1">General Settings</h3>
                    <div className="bg-white border border-black/5 rounded-[2.5rem] overflow-hidden shadow-xl shadow-black/[0.01]">
                        <div className="flex items-center justify-between p-5 active:bg-neutral-50 transition-colors">
                            <div className="flex items-center gap-4">
                                <div className="h-10 w-10 bg-slate-50 text-slate-900 rounded-xl flex items-center justify-center shadow-sm">
                                    <Globe size={18} strokeWidth={2.5} />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-xs font-black tracking-tight text-neutral-900 leading-none mb-1.5 underline decoration-black/5 underline-offset-4">Language</span>
                                    <span className="text-[9px] font-black text-neutral-400 uppercase tracking-widest leading-none">English (India)</span>
                                </div>
                            </div>
                        </div>
                        <div className="mx-6 border-t border-black/[0.02]" />
                        <div className="flex items-center justify-between p-5 active:bg-neutral-50 transition-colors">
                            <div className="flex items-center gap-4">
                                <div className="h-10 w-10 bg-neutral-900 text-white rounded-xl flex items-center justify-center shadow-sm">
                                    <Shield size={18} strokeWidth={2.5} />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-xs font-black tracking-tight text-neutral-900 leading-none mb-1.5 underline decoration-black/5 underline-offset-4">App Security</span>
                                    <span className="text-[9px] font-black text-neutral-400 uppercase tracking-widest leading-none">Standard Protection</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default UserPreferences;
