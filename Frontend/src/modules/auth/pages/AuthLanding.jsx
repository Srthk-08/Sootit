import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Briefcase, ArrowRight, ShieldCheck, Star } from 'lucide-react';
import UserLogin from '../../user/pages/UserLogin';
import UserRegister from '../../user/pages/UserRegister';
import VendorLogin from '../../vendor/pages/VendorLogin';
import VendorRegister from '../../vendor/pages/VendorRegister';

import logo from "../../../assets/logo.png";

const AuthLanding = () => {
  const [activeTab, setActiveTab] = useState('user'); // 'user' or 'vendor'
  const [formType, setFormType] = useState('login'); // 'login' or 'register'

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setFormType('login'); // Reset to login when switching tabs
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      {/* Header / Branding Area */}
      <div className="px-8 pt-12 pb-6">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center mb-2"
        >
          <div className="h-24 w-24 overflow-hidden flex items-center justify-center">
            <img src={logo} alt="Sootit Logo" className="w-full h-full object-contain" />
          </div>
        </motion.div>
        <p className="text-slate-400 font-bold text-[10px] uppercase tracking-widest leading-snug text-center">
          Premium Vehicle Services Ecosystem
        </p>
      </div>

      {/* Tabs Container */}
      <div className="px-6 mb-2">
        <div className="bg-slate-200/50 p-1 rounded-[2rem] flex relative overflow-hidden ring-1 ring-black/5">
          {/* Animated Background for Tab */}
          <motion.div 
            className="absolute top-1 bottom-1 bg-white rounded-[1.8rem] shadow-sm z-0"
            animate={{ 
              left: activeTab === 'user' ? '4px' : '50%',
              width: 'calc(50% - 4px)'
            }}
            transition={{ type: "spring", stiffness: 350, damping: 30 }}
          />

          <button 
            onClick={() => handleTabChange('user')}
            className={`flex-1 flex items-center justify-center gap-2 py-3.5 z-10 transition-colors duration-300 ${activeTab === 'user' ? 'text-slate-900' : 'text-slate-400'}`}
          >
            <User size={16} strokeWidth={activeTab === 'user' ? 3 : 2} />
            <span className={`text-[12px] font-black uppercase tracking-widest`}>Customer</span>
          </button>

          <button 
            onClick={() => handleTabChange('vendor')}
            className={`flex-1 flex items-center justify-center gap-2 py-3.5 z-10 transition-colors duration-300 ${activeTab === 'vendor' ? 'text-slate-900' : 'text-slate-400'}`}
          >
            <Briefcase size={16} strokeWidth={activeTab === 'vendor' ? 3 : 2} />
            <span className={`text-[12px] font-black uppercase tracking-widest`}>Partner</span>
          </button>
        </div>
      </div>

      {/* Content Area */}
      <div className="flex-1 relative overflow-hidden flex flex-col">
        <AnimatePresence mode="wait">
          {activeTab === 'user' ? (
            <motion.div
              key={`user-${formType}`}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.2 }}
              className="flex-1"
            >
              {formType === 'login' ? (
                <UserLogin isEmbedded={true} onSwitchToRegister={() => setFormType('register')} />
              ) : (
                <UserRegister isEmbedded={true} onSwitchToLogin={() => setFormType('login')} />
              )}
            </motion.div>
          ) : (
            <motion.div
              key={`vendor-${formType}`}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              transition={{ duration: 0.2 }}
              className="flex-1"
            >
               {formType === 'login' ? (
                <VendorLogin isEmbedded={true} onSwitchToRegister={() => setFormType('register')} />
              ) : (
                <VendorRegister isEmbedded={true} onSwitchToLogin={() => setFormType('login')} />
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      
      {/* Bottom Footer Details */}
      <div className="px-8 py-6 flex justify-between items-center opacity-40">
        <div className="flex items-center gap-2">
          <ShieldCheck size={14} />
          <span className="text-[9px] font-bold uppercase tracking-widest">Secure Entry</span>
        </div>
        <div className="flex items-center gap-2">
          <Star size={14} />
          <span className="text-[9px] font-bold uppercase tracking-widest">4.9/5 Trust</span>
        </div>
      </div>
    </div>
  );
};

export default AuthLanding;
