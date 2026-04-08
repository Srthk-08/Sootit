import { motion } from "framer-motion";
import { ArrowLeft, User, Mail, Phone, Lock } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const UserRegister = ({ isEmbedded = false, onSwitchToLogin }) => {
  const navigate = useNavigate();

  const containerClasses = isEmbedded 
    ? "px-8 pt-4 pb-8 flex-1 flex flex-col font-inter" 
    : "h-screen bg-white overflow-hidden flex flex-col font-inter";

  return (
    <div className={containerClasses}>
      {!isEmbedded && (
        <div className="px-6 py-8">
          <Link to="/user/login" className="inline-block p-1 active:scale-90 transition-transform">
            <ArrowLeft size={28} className="text-neutral-900" strokeWidth={3} />
          </Link>
        </div>
      )}

      <div className={`${!isEmbedded ? 'px-8 flex-1 flex flex-col justify-center -mt-16' : ''}`}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="w-full max-w-sm mx-auto">
          <h1 className={`${isEmbedded ? 'text-3xl' : 'text-5xl'} font-black text-neutral-900 tracking-tighter leading-tight mb-2 italic`}>
            Create<br/>Account.
          </h1>
          <p className={`${isEmbedded ? 'text-sm' : 'text-lg'} font-medium text-neutral-400 mb-8 tracking-tight opacity-90 leading-tight`}>
            Start finding verified vehicle services near you.
          </p>

          <form className="space-y-4">
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase text-neutral-400 tracking-[0.15em] pl-1 block">Full Name</label>
              <input 
                type="text" 
                placeholder="John Doe" 
                className="w-full bg-neutral-50/50 border-2 border-neutral-100 rounded-[1.2rem] px-5 py-4 text-base font-bold transition-all focus:border-slate-900 focus:bg-white focus:outline-none shadow-sm placeholder:text-neutral-300" 
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase text-neutral-400 tracking-[0.15em] pl-1 block">Phone Number</label>
              <div className="flex bg-neutral-50/50 border-2 border-neutral-100 rounded-[1.2rem] px-5 py-4 focus-within:border-slate-900 focus-within:bg-white transition-all shadow-sm">
                 <span className="text-base font-black text-neutral-400 mr-3">+91</span>
                 <input 
                   type="tel" 
                   maxLength={10}
                   placeholder="00000 00000" 
                   className="bg-transparent text-base font-bold w-full focus:outline-none placeholder:text-neutral-300"
                 />
              </div>
            </div>
            
            <button 
              type="button" 
              onClick={() => isEmbedded ? onSwitchToLogin() : navigate('/user/login')} 
              className="w-full bg-slate-900 font-black text-white rounded-[1.2rem] py-4 uppercase tracking-widest text-[12px] active:scale-95 transition-all mt-6 shadow-xl shadow-slate-900/10"
            >
              CREATE ACCOUNT
            </button>
          </form>

          <div className="text-center mt-8">
            <p className="text-[11px] font-bold text-neutral-400">
              Already have an account? 
              <button 
                onClick={() => isEmbedded ? onSwitchToLogin() : navigate('/user/login')} 
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

export default UserRegister;
