import { motion } from "framer-motion";
import { ArrowLeft, User, Mail, Phone, Lock } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const UserRegister = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen bg-white overflow-hidden flex flex-col font-inter">
      {/* Back Header */}
      <div className="px-6 py-8">
        <Link to="/user/login" className="inline-block p-1 active:scale-90 transition-transform">
          <ArrowLeft size={28} className="text-neutral-900" strokeWidth={3} />
        </Link>
      </div>

      <div className="px-8 flex-1 flex flex-col justify-center -mt-16">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="w-full max-w-sm mx-auto">
          <h1 className="text-5xl font-black text-neutral-900 tracking-tighter leading-tight mb-2 italic">Create<br/>Account.</h1>
          <p className="text-lg font-medium text-neutral-400 mb-12 tracking-tight opacity-90 leading-tight">Start finding verified vehicle services near you.</p>

          <form className="space-y-6">
            <div className="space-y-2">
              <label className="text-[11px] font-black uppercase text-neutral-400 tracking-[0.15em] pl-1 block">Full Name</label>
              <input 
                type="text" 
                placeholder="John Doe" 
                className="w-full bg-neutral-50/50 border-2 border-neutral-100 rounded-[1.5rem] px-5 py-5 text-base font-bold transition-all focus:border-blue-600 focus:bg-white focus:outline-none shadow-sm placeholder:text-neutral-300" 
              />
            </div>
            <div className="space-y-2">
              <label className="text-[11px] font-black uppercase text-neutral-400 tracking-[0.15em] pl-1 block">Phone Number</label>
              <div className="flex bg-neutral-50/50 border-2 border-neutral-100 rounded-[1.5rem] px-5 py-5 focus-within:border-blue-600 focus-within:bg-white transition-all shadow-sm">
                 <span className="text-base font-black text-neutral-400 mr-3">+91</span>
                 <input 
                   type="tel" 
                   maxLength={10}
                   placeholder="Enter mobile number" 
                   className="bg-transparent text-base font-bold w-full focus:outline-none placeholder:text-neutral-300"
                 />
              </div>
            </div>
            
            <button type="button" onClick={() => navigate('/user/login')} className="w-full bg-neutral-900 font-black text-white rounded-[1.5rem] py-5 uppercase tracking-widest text-[13px] active:scale-95 transition-all mt-10 shadow-2xl shadow-black/10">
              CREATE ACCOUNT
            </button>
          </form>

          <div className="text-center mt-12">
            <p className="text-xs font-bold text-neutral-400">
              Already have an account? <Link to="/user/login" className="text-blue-600 border-b-2 border-blue-100 pb-0.5">Login</Link>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default UserRegister;
