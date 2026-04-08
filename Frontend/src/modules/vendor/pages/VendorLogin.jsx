import { motion } from "framer-motion";
import { ArrowRight, Briefcase } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { initVendorState } from "../utils/vendorStore";
import { useState } from "react";

const VendorLogin = () => {
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
    // Initialize mock state
    initVendorState({
      name: "Sharma Garage",
      role: "mechanic",
      id: "VND-48201A"
    });
    navigate('/vendor'); 
  };

  const handleOtpChange = (index, value) => {
    if (isNaN(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    // Auto-focus next input
    if (value && index < 3) {
      document.getElementById(`otp-${index + 1}`).focus();
    }
  };

  return (
    <div className="h-screen bg-white px-6 flex flex-col justify-center overflow-hidden text-neutral-900 font-inter">
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="w-full max-w-sm mx-auto">
        <div className="h-20 w-20 bg-blue-600 rounded-[2rem] flex items-center justify-center mb-8 shadow-2xl shadow-blue-600/40">
          <Briefcase size={36} className="text-white" strokeWidth={2.5} />
        </div>
        <h1 className="text-5xl font-black tracking-tighter leading-tight mb-2">Partner<br/>Login.</h1>
        <p className="text-lg font-medium text-neutral-400 mb-12 tracking-tight opacity-90">
           {step === 1 ? "Enter your phone number to receive OTP" : `Enter the 4-digit code sent to +91 ${phoneNumber}`}
        </p>

        {step === 1 ? (
          <form onSubmit={handleSendOTP} className="space-y-6">
            <div className="space-y-2">
              <label className="text-[11px] font-black uppercase text-neutral-400 tracking-[0.15em] pl-1 block">Phone Number</label>
              <div className="flex bg-neutral-50/50 border-2 border-neutral-100 rounded-[1.5rem] px-5 py-5 focus-within:border-blue-600 focus-within:bg-white transition-all shadow-sm">
                 <span className="text-base font-black text-neutral-400 mr-3">+91</span>
                 <input 
                   type="tel" 
                   maxLength={10}
                   value={phoneNumber}
                   onChange={(e) => setPhoneNumber(e.target.value)}
                   placeholder="Enter 10 digit number" 
                   className="bg-transparent text-base font-bold w-full focus:outline-none placeholder:text-neutral-300"
                 />
              </div>
            </div>
            
            <button type="submit" className="w-full bg-blue-600 text-white rounded-[1.5rem] py-5 font-black uppercase tracking-widest text-[13px] flex items-center justify-center gap-2 active:scale-95 transition-all mt-10 shadow-2xl shadow-blue-600/30">
              GET OTP <ArrowRight size={18} strokeWidth={3} />
            </button>
          </form>
        ) : (
          <form onSubmit={handleVerifyOTP} className="space-y-8">
            <div className="flex justify-between gap-4">
              {otp.map((digit, idx) => (
                <input 
                  key={idx}
                  id={`otp-${idx}`}
                  type="text"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleOtpChange(idx, e.target.value)}
                  onKeyUp={(e) => e.key === 'Backspace' && idx > 0 && !digit && document.getElementById(`otp-${idx-1}`).focus()}
                  className="w-16 h-20 bg-neutral-50 border-2 border-neutral-100 rounded-2xl text-center text-3xl font-black focus:outline-none focus:border-blue-600 focus:bg-white transition-all shadow-sm"
                />
              ))}
            </div>

            <div className="text-center pt-2">
               <button type="button" onClick={() => setStep(1)} className="text-[11px] font-black uppercase text-blue-600 tracking-widest border-b-2 border-blue-100 pb-0.5">Resend OTP ?</button>
            </div>

            <button type="submit" className="w-full bg-neutral-900 text-white rounded-[1.5rem] py-5 font-black uppercase tracking-widest text-[13px] flex items-center justify-center gap-2 active:scale-95 transition-all mt-4 shadow-2xl shadow-black/10">
              VERIFY & LOGIN <CheckCircle2 size={18} className="text-green-400" strokeWidth={3} />
            </button>
          </form>
        )}

        <div className="text-center mt-12">
          <p className="text-xs font-bold text-neutral-400">
            Not a registered vendor? <Link to="/vendor/register" className="text-blue-600 border-b-2 border-blue-100 pb-0.5">Apply here</Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default VendorLogin;
