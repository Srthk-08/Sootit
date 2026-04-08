import { motion } from "framer-motion";
import { ArrowLeft, User, Navigation, Wrench, Shield, Briefcase, FileText, Truck } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const VendorRegister = () => {
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
    navigate('/vendor/login'); // Redirect to login on success
  };

  return (
    <div className="h-screen bg-white overflow-hidden flex flex-col font-inter">
      {/* Back Header */}
      <div className="px-6 py-8 border-b border-neutral-50 flex items-center gap-4">
        <Link to="/vendor/login" className="inline-block p-1 active:scale-90 transition-transform">
          <ArrowLeft size={28} className="text-neutral-900" strokeWidth={3} />
        </Link>
        <span className="text-[11px] font-black uppercase tracking-[0.2em] text-neutral-400">Application</span>
      </div>

      <div className="px-6 flex-1 overflow-y-auto no-scrollbar py-8">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="w-full max-w-sm mx-auto pb-12">
          <h1 className="text-5xl font-black text-neutral-900 tracking-tighter leading-tight mb-2 italic">Join<br/>Partner.</h1>
          <p className="text-lg font-medium text-neutral-400 mb-10 tracking-tight opacity-90 leading-tight">Select your professional role and start earning.</p>

          {/* Role Selector */}
          <div className="grid grid-cols-3 gap-4 mb-10">
            {roles.map((r) => (
              <div 
                key={r.id} 
                onClick={() => setRole(r.id)}
                className={`p-4 rounded-[1.5rem] border-2 cursor-pointer transition-all flex flex-col items-center gap-3 ${role === r.id ? 'border-blue-600 bg-blue-50/50 text-blue-700 shadow-lg shadow-blue-600/10' : 'border-neutral-50 bg-neutral-50/30 text-neutral-400'}`}
              >
                <r.icon size={24} strokeWidth={role === r.id ? 2.5 : 2} className={role === r.id ? 'text-blue-600' : 'text-neutral-300'} />
                <span className="text-[10px] font-black uppercase tracking-widest leading-none text-center">{r.label}</span>
              </div>
            ))}
          </div>

          <form onSubmit={handleRegister} className="space-y-6">
            <div className="space-y-2">
               <label className="text-[11px] font-black uppercase text-neutral-400 tracking-[0.15em] pl-1 block">Full Name</label>
               <input type="text" placeholder="John Doe" className="w-full bg-neutral-50/50 border-2 border-neutral-100 rounded-[1.5rem] px-5 py-4.5 text-base font-bold transition-all focus:border-blue-600 focus:bg-white focus:outline-none placeholder:text-neutral-300" />
            </div>
            <div className="space-y-2">
               <label className="text-[11px] font-black uppercase text-neutral-400 tracking-[0.15em] pl-1 block">Mobile Number</label>
               <div className="flex bg-neutral-50/50 border-2 border-neutral-100 rounded-[1.5rem] px-5 py-4.5 focus-within:border-blue-600 focus-within:bg-white transition-all shadow-sm">
                 <span className="text-base font-black text-neutral-400 mr-3">+91</span>
                 <input type="tel" maxLength={10} placeholder="9000000000" className="bg-transparent text-base font-bold w-full focus:outline-none placeholder:text-neutral-300" />
               </div>
            </div>
            
            {role === 'driver' && (
               <div className="space-y-2 animate-in fade-in slide-in-from-bottom-2">
                 <label className="text-[11px] font-black uppercase text-neutral-400 tracking-[0.15em] pl-1 block">Driving License</label>
                 <input type="text" placeholder="MH12 2012XXXXXXX" className="w-full bg-neutral-50/50 border-2 border-neutral-100 rounded-[1.5rem] px-5 py-4.5 text-sm font-bold border-dashed focus:border-blue-600 focus:bg-white focus:outline-none placeholder:text-neutral-300" />
               </div>
            )}
            
            <button type="submit" className="w-full bg-neutral-900 text-white rounded-[1.5rem] py-5 font-black uppercase tracking-widest text-[13px] flex items-center justify-center gap-2 active:scale-95 transition-all mt-10 shadow-2xl shadow-black/10">
              SUBMIT APPLICATION <Shield size={18} strokeWidth={3} />
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default VendorRegister;
