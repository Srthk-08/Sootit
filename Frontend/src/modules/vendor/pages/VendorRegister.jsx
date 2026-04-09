import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, User, Navigation, Wrench, Shield, Briefcase, FileText, Truck, Phone, ArrowRight } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import logo from "../../../assets/logo.png";

const VendorRegister = ({ isEmbedded = false, onSwitchToLogin }) => {
  const navigate = useNavigate();
  const [role, setRole] = useState('driver');

  const roles = [
    { id: 'driver', label: 'Driver', icon: Navigation, desc: 'Professional chauffeur' },
    { id: 'mechanic', label: 'Mechanic', icon: Wrench, desc: 'Vehicle repair expert' },
    { id: 'towing', label: 'Towing', icon: Truck, desc: '24/7 recovery service' },
    { id: 'rto', label: 'RTO Agent', icon: FileText, desc: 'Paperwork assistant' },
    { id: 'legal', label: 'Legal Advisor', icon: Briefcase, desc: 'Vehicle law expert' },
  ];

  const handleRegister = (e) => {
    e.preventDefault();
    localStorage.setItem('temp_vendor_role', role);
    isEmbedded ? onSwitchToLogin() : navigate('/vendor/login');
  };

  const containerClasses = isEmbedded 
    ? "px-6 pt-4 pb-8 flex-1 flex flex-col font-inter bg-white" 
    : "min-h-screen bg-slate-50 flex flex-col font-inter";

  return (
    <div className={containerClasses}>
      {/* Dynamic Header */}
      <div className="px-6 py-6 flex items-center justify-between sticky top-0 bg-inherit z-30">
        <button 
          onClick={() => isEmbedded ? onSwitchToLogin() : navigate('/')} 
          className="h-12 w-12 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-black/[0.03] active:scale-90 transition-transform"
        >
          <ArrowLeft size={20} className="text-slate-900" strokeWidth={2.5} />
        </button>
        <div className="flex flex-col items-end">
            <span className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-300">Partner Application</span>
            <span className="text-[10px] font-bold text-slate-900">Step 01 of 02</span>
        </div>
      </div>

      <div className="flex-1 px-6 pb-12 overflow-y-auto hide-scrollbar">
        <motion.div 
            initial={{ opacity: 0, scale: 0.98 }} 
            animate={{ opacity: 1, scale: 1 }} 
            className="w-full max-w-sm mx-auto"
        >
          {/* Logo Section */}
          {!isEmbedded && (
            <div className="flex justify-center mb-8">
              <div className="h-20 w-20 flex items-center justify-center overflow-hidden">
                 <img src={logo} alt="Sootit" className="w-full h-full object-contain" />
              </div>
            </div>
          )}

          <div className="mb-8 px-2">
            <h1 className="text-3xl font-black text-slate-900 tracking-tighter italic leading-none mb-3">Join as Partner.</h1>
            <p className="text-sm font-bold text-slate-400">Select your expertise and build your business with Sootit.</p>
          </div>

          <form onSubmit={handleRegister} className="space-y-8">
            {/* Roles Micro-Grid */}
            <div className="space-y-4">
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 pl-2">What is your role?</span>
                <div className="grid grid-cols-1 gap-3">
                {roles.map((r) => (
                    <motion.div 
                        key={r.id} 
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setRole(r.id)}
                        className={`p-5 rounded-[2rem] border-2 cursor-pointer transition-all flex items-center gap-5 ${role === r.id ? 'border-slate-900 bg-slate-900 text-white shadow-2xl shadow-slate-900/20' : 'border-white bg-white text-slate-400 shadow-sm shadow-black/[0.02]'}`}
                    >
                        <div className={`h-12 w-12 rounded-2xl flex items-center justify-center transition-colors ${role === r.id ? 'bg-white/10 text-white' : 'bg-slate-50 text-slate-300'}`}>
                            <r.icon size={22} strokeWidth={2.5} />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-sm font-black uppercase tracking-tight">{r.label}</span>
                            <span className={`text-[10px] font-bold ${role === r.id ? 'text-white/60' : 'text-slate-300'}`}>{r.desc}</span>
                        </div>
                    </motion.div>
                ))}
                </div>
            </div>

            {/* Direct Information */}
            <div className="space-y-4 pt-4">
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 pl-2">Personal Details</span>
                <div className="space-y-3">
                    <div className="bg-white border border-black/[0.03] rounded-3xl p-5 flex items-center gap-4 shadow-sm">
                        <User size={18} className="text-slate-300" strokeWidth={2.5} />
                        <input type="text" placeholder="Full Name" className="bg-transparent text-sm font-bold text-slate-900 w-full focus:outline-none" />
                    </div>
                    <div className="bg-white border border-black/[0.03] rounded-3xl p-5 flex items-center gap-4 shadow-sm">
                        <Phone size={18} className="text-slate-300" strokeWidth={2.5} />
                        <div className="flex items-center">
                            <span className="text-sm font-black text-slate-900 mr-2">+91</span>
                            <div className="h-4 w-[1px] bg-slate-100 mr-3" />
                            <input type="tel" maxLength={10} placeholder="Mobile Number" className="bg-transparent text-sm font-bold text-slate-900 w-full focus:outline-none" />
                        </div>
                    </div>

                    <AnimatePresence>
                        {role === 'driver' && (
                        <motion.div 
                            initial={{ opacity: 0, height: 0 }} 
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="bg-slate-50 border-2 border-dashed border-slate-200 rounded-3xl p-5 flex items-center gap-4"
                        >
                            <FileText size={18} className="text-slate-300" strokeWidth={2.5} />
                            <input type="text" placeholder="Driving License Number" className="bg-transparent text-sm font-bold text-slate-800 w-full focus:outline-none placeholder:text-slate-300 uppercase" />
                        </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
            
            <button 
                type="submit" 
                className="w-full bg-slate-900 text-white h-16 rounded-[1.8rem] py-4 font-black uppercase tracking-[0.2em] text-[11px] flex items-center justify-between px-8 active:scale-95 transition-all shadow-2xl shadow-slate-900/30 group"
            >
              <span>Next Stage</span>
              <div className="h-10 w-10 bg-white/10 rounded-xl flex items-center justify-center group-hover:bg-white group-hover:text-slate-900 transition-colors">
                <ArrowRight size={20} className="text-white group-hover:text-slate-900" strokeWidth={3} />
              </div>
            </button>
          </form>

          <footer className="mt-12 text-center pb-10">
            <p className="text-[11px] font-bold text-slate-400 uppercase tracking-[0.1em]">
               Already a partner? 
               <button 
                onClick={() => isEmbedded ? onSwitchToLogin() : navigate('/vendor/login')} 
                className="text-slate-900 border-b-2 border-slate-100 pb-0.5 ml-2 transition-all hover:border-slate-900"
              >
                Login Account
              </button>
            </p>
          </footer>
        </motion.div>
      </div>
    </div>
  );
};

export default VendorRegister;
