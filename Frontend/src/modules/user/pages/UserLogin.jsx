import { motion } from "framer-motion";
import { ArrowRight, User } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { initUserState } from "../utils/userStore";

import logo from "../../../assets/logo.png";

const UserLogin = ({ isEmbedded = false }) => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1); // 1: Phone, 2: OTP
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState(["", "", "", ""]);

  const handleSendOTP = (e) => {
    e.preventDefault();
    if (phoneNumber.length === 10) {
      setStep(2);
    } else {
      alert("Please enter a valid 10-digit number");
    }
  };

  const handleVerifyOTP = (e) => {
    e.preventDefault();
    initUserState({
      name: "Arjun Dev",
      location: "Connaught Place",
      id: "USR-7721"
    });
    navigate('/user'); 
  };

  const handleOtpChange = (index, value) => {
    if (isNaN(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    // Auto-focus next input
    if (value && index < 3) {
      const nextInput = document.getElementById(`user-otp-${index + 1}`);
      if (nextInput) nextInput.focus();
    }
  };

  const containerClasses = isEmbedded 
    ? "px-6 py-4 text-neutral-900 font-inter" 
    : "h-screen bg-white px-6 flex flex-col justify-center overflow-hidden text-neutral-900 font-inter";

  return (
    <div className={containerClasses}>
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="w-full max-w-sm mx-auto">
        {!isEmbedded && (
          <div className="h-28 w-28 flex items-center justify-center mx-auto mb-6 overflow-hidden">
            <img src={logo} alt="Sootit" className="w-full h-full object-contain" />
          </div>
        )}
        <h1 className={`${isEmbedded ? 'text-3xl' : 'text-5xl'} font-black tracking-tighter leading-tight mb-2`}>
          {isEmbedded ? "Customer Login" : <>Welcome<br/>Back.</>}
        </h1>
        <p className={`${isEmbedded ? 'text-sm' : 'text-lg'} font-medium text-neutral-400 mb-8 tracking-tight opacity-90`}>
           {step === 1 ? "Enter your phone number to receive OTP" : `Enter the 4-digit code sent to +91 ${phoneNumber}`}
        </p>

        {step === 1 ? (
          <form onSubmit={handleSendOTP} className="space-y-4">
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase text-neutral-400 tracking-[0.15em] pl-1 block">Phone Number</label>
              <div className="flex bg-neutral-50/50 border-2 border-neutral-100 rounded-[1.2rem] px-5 py-4 focus-within:border-slate-900 focus-within:bg-white transition-all shadow-sm">
                 <span className="text-base font-black text-neutral-400 mr-3">+91</span>
                 <input 
                   type="tel" 
                   maxLength={10}
                   value={phoneNumber}
                   onChange={(e) => setPhoneNumber(e.target.value)}
                   placeholder="00000 00000" 
                   className="bg-transparent text-base font-bold w-full focus:outline-none placeholder:text-neutral-300"
                 />
              </div>
            </div>
            
            <button type="submit" className="w-full bg-slate-900 text-white rounded-[1.2rem] py-4 font-black uppercase tracking-widest text-[12px] flex items-center justify-center gap-2 active:scale-95 transition-all mt-6 shadow-xl shadow-slate-900/10">
              GET OTP <ArrowRight size={18} strokeWidth={3} />
            </button>
          </form>
        ) : (
          <form onSubmit={handleVerifyOTP} className="space-y-6">
            <div className="flex justify-between gap-3">
              {otp.map((digit, idx) => (
                <input 
                  key={idx}
                  id={`user-otp-${idx}`}
                  type="text"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleOtpChange(idx, e.target.value)}
                  onKeyUp={(e) => e.key === 'Backspace' && idx > 0 && !digit && document.getElementById(`user-otp-${idx-1}`).focus()}
                  className="w-14 h-16 bg-neutral-50 border-2 border-neutral-100 rounded-xl text-center text-2xl font-black focus:outline-none focus:border-slate-900 focus:bg-white transition-all shadow-sm"
                />
              ))}
            </div>

            <div className="text-center">
               <button type="button" onClick={() => setStep(1)} className="text-[10px] font-black uppercase text-slate-500 tracking-widest border-b-2 border-slate-100 pb-0.5">Resend OTP ?</button>
            </div>

            <button type="submit" className="w-full bg-slate-900 text-white rounded-[1.2rem] py-4 font-black uppercase tracking-widest text-[12px] flex items-center justify-center gap-2 active:scale-95 transition-all mt-4 shadow-xl shadow-slate-900/10">
              VERIFY & LOGIN
            </button>
          </form>
        )}

        <div className="text-center mt-10">
          <p className="text-[11px] font-bold text-neutral-400">
            New to Sootit? <Link to="/user/register" className="text-slate-900 border-b-2 border-slate-200 pb-0.5 ml-1">Create Account</Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default UserLogin;
