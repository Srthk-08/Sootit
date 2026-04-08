import { motion } from "framer-motion";
import { ArrowLeft, User, Navigation, Wrench, Shield, Briefcase, FileText, Truck } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const VendorRegister = ({ isEmbedded = false, onSwitchToLogin }) => {
  const navigate = useNavigate();
  const [role, setRole] = useState('driver');

  const roles = [
    { id: 'driver', label: 'Driver', icon: Navigation },
    { id: 'mechanic', label: 'Mechanic', icon: Wrench },
    { id: 'towing', label: 'Towing', icon: Truck },
    { id: 'rto', label: 'RTO Agent', icon: FileText },
    { id: 'legal', label: 'Legal Advisor', icon: Briefcase },
  ];

  const handleRegister = (e) => {
    e.preventDefault();
    // In actual app, this would be an API call. For mock, we initialize state.
    localStorage.setItem('temp_vendor_role', role); // Store role for login page to pick up
    isEmbedded ? onSwitchToLogin() : navigate('/vendor/login');
  };

  const containerClasses = isEmbedded 
    ? "px-6 pt-4 pb-8 flex-1 flex flex-col font-inter" 
    : "h-screen bg-white overflow-hidden flex flex-col font-inter";

  return (
    <div className={containerClasses}>
      {!isEmbedded && (
        <div className="px-6 py-8 border-b border-neutral-50 flex items-center gap-4">
          <Link to="/vendor/login" className="inline-block p-1 active:scale-90 transition-transform">
            <ArrowLeft size={28} className="text-neutral-900" strokeWidth={3} />
          </Link>
          <span className="text-[11px] font-black uppercase tracking-[0.2em] text-neutral-400">Application</span>
        </div>
      )}

      <div className={`px-6 flex-1 overflow-y-auto hide-scrollbar ${!isEmbedded ? 'py-8' : ''}`}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="w-full max-w-sm mx-auto pb-12">
          <h1 className={`${isEmbedded ? 'text-3xl' : 'text-5xl'} font-black text-neutral-900 tracking-tighter leading-tight mb-2 italic`}>Join<br/>Partner.</h1>
          <p className={`${isEmbedded ? 'text-xs' : 'text-lg'} font-medium text-neutral-400 mb-8 tracking-tight opacity-90 leading-tight`}>Select your professional role and start earning.</p>

          {/* Role Selector */}
          <div className="grid grid-cols-3 gap-3 mb-8">
            {roles.map((r) => (
              <div 
                key={r.id} 
                onClick={() => setRole(r.id)}
                className={`p-3 rounded-2xl border-2 cursor-pointer transition-all flex flex-col items-center gap-2 ${role === r.id ? 'border-slate-900 bg-slate-50 text-slate-900 shadow-md shadow-slate-900/5' : 'border-neutral-50 bg-neutral-50/30 text-neutral-300'}`}
              >
                <r.icon size={18} strokeWidth={role === r.id ? 2.5 : 2} className={role === r.id ? 'text-slate-900' : 'text-neutral-300'} />
                <span className="text-[9px] font-black uppercase tracking-widest leading-none text-center">{r.label}</span>
              </div>
            ))}
          </div>

          <form onSubmit={handleRegister} className="space-y-4">
            <div className="space-y-2">
               <label className="text-[10px] font-black uppercase text-neutral-400 tracking-[0.15em] pl-1 block">Full Name</label>
               <input type="text" placeholder="John Doe" className="w-full bg-neutral-50/50 border-2 border-neutral-100 rounded-[1.2rem] px-5 py-4 text-base font-bold transition-all focus:border-slate-900 focus:bg-white focus:outline-none placeholder:text-neutral-300" />
            </div>
            <div className="space-y-2">
               <label className="text-[10px] font-black uppercase text-neutral-400 tracking-[0.15em] pl-1 block">Mobile Number</label>
               <div className="flex bg-neutral-50/50 border-2 border-neutral-100 rounded-[1.2rem] px-5 py-4 focus-within:border-slate-900 focus-within:bg-white transition-all shadow-sm">
                 <span className="text-base font-black text-neutral-400 mr-3">+91</span>
                 <input type="tel" maxLength={10} placeholder="00000 00000" className="bg-transparent text-base font-bold w-full focus:outline-none placeholder:text-neutral-300" />
               </div>
            </div>
            
            {role === 'driver' && (
               <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="space-y-2">
                 <label className="text-[10px] font-black uppercase text-neutral-400 tracking-[0.15em] pl-1 block">Driving License</label>
                 <input type="text" placeholder="MH12 XXXXXXXX" className="w-full bg-neutral-50/50 border-2 border-neutral-100 rounded-[1.2rem] px-5 py-4 text-sm font-bold border-dashed focus:border-slate-900 focus:bg-white focus:outline-none placeholder:text-neutral-300" />
               </motion.div>
            )}
            
            <button type="submit" className="w-full bg-slate-900 text-white rounded-[1.2rem] py-4 font-black uppercase tracking-widest text-[12px] flex items-center justify-center gap-2 active:scale-95 transition-all mt-6 shadow-xl shadow-slate-900/10">
              SUBMIT APPLICATION <Shield size={16} strokeWidth={3} />
            </button>
          </form>

          <div className="text-center mt-8">
            <p className="text-[11px] font-bold text-neutral-400">
               Already a partner? 
               <button 
                onClick={() => isEmbedded ? onSwitchToLogin() : navigate('/vendor/login')} 
                className="text-slate-900 border-b-2 border-slate-200 pb-0.5 ml-1"
              >
                Login
              </button>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default VendorRegister;
