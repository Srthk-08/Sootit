import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2, AlertCircle, FileText, Upload, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getVendorData } from "../utils/vendorStore";
import { getVendorConfig } from "../utils/vendorConfig";

const VendorKYC = () => {
  const [vendor, setVendor] = useState(getVendorData() || {
    profile: { name: "Guest", role: "driver" }
  });

  const config = getVendorConfig(vendor.profile.role);

  return (
    <div className="bg-neutral-50 min-h-screen pb-24 text-neutral-900 font-inter">
      <div className="bg-white px-6 py-8 border-b border-neutral-100 flex items-center gap-4 sticky top-0 z-10 shadow-sm shadow-black/[0.01]">
        <Link to="/vendor/settings" className="h-10 w-10 bg-neutral-50 rounded-xl flex items-center justify-center border border-neutral-100 active:scale-90 transition-transform">
          <ArrowLeft size={20} />
        </Link>
        <h1 className="text-xl font-black italic tracking-tighter">Identity & Trust.</h1>
      </div>

      <div className="px-6 py-8">
        <div className="bg-slate-900 text-white rounded-[2.5rem] p-8 mb-10 shadow-2xl shadow-black/20 relative overflow-hidden group">
           <div className="absolute top-0 right-0 h-40 w-40 bg-white/5 rounded-full blur-3xl -mr-10 -mt-10 group-hover:scale-110 transition-transform duration-700" />
           <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                 <div className="h-12 w-12 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-md">
                    <CheckCircle2 size={24} className="text-white/80" />
                 </div>
                 <div>
                    <span className="text-[10px] font-black uppercase text-white/40 tracking-[0.2em] mb-0.5 block">Verification Score</span>
                    <h2 className="text-2xl font-black tracking-tight italic">Trust: 85%</h2>
                 </div>
              </div>
              <p className="text-xs font-medium text-white/60 mb-8 leading-relaxed">Complete your <span className="text-white font-black">{config.label}</span> specific documents to unlock premium service leads and instant payouts.</p>
              <div className="w-full bg-white/10 h-3 rounded-full overflow-hidden border border-white/5">
                 <motion.div 
                   initial={{ width: 0 }}
                   animate={{ width: "85%" }}
                   className="bg-white/40 h-full rounded-full" 
                 />
              </div>
           </div>
        </div>

        <div className="flex items-center justify-between mb-6 px-1">
          <h3 className="text-[11px] font-black uppercase text-neutral-400 tracking-[0.25em]">{config.label} Documents</h3>
          <span className="text-[10px] font-black text-slate-900 uppercase tracking-widest bg-slate-50 px-2 py-0.5 rounded-lg border border-slate-100">Action Required</span>
        </div>

        <div className="space-y-4">
           {config.kycDocs.map((doc, idx) => (
              <motion.div 
                whileTap={{ scale: 0.98 }}
                key={idx} 
                className="bg-white p-5 rounded-[2rem] border border-black/5 flex items-center justify-between shadow-xl shadow-black/[0.01] hover:shadow-black/[0.03] transition-all"
              >
                  <div className="flex items-center gap-4">
                     <div className={`h-12 w-12 rounded-2xl flex items-center justify-center ${doc.status === 'Verified' ? 'bg-slate-900 text-white' : doc.status === 'Pending' ? 'bg-slate-50 text-slate-800 shadow-inner' : 'bg-neutral-50 text-neutral-200'}`}>
                        <FileText size={22} strokeWidth={2.5} />
                     </div>
                     <div>
                        <h4 className="text-sm font-black tracking-tight leading-none mb-1.5">{doc.title}</h4>
                        <span className={`text-[9px] font-black uppercase tracking-widest ${doc.status === 'Verified' ? 'text-slate-900' : doc.status === 'Pending' ? 'text-slate-400' : 'text-neutral-300'}`}>
                           {doc.status}
                        </span>
                     </div>
                  </div>
                 {doc.status === 'Not Uploaded' ? (
                    <div className="h-10 w-10 bg-neutral-900 rounded-xl flex items-center justify-center text-white shadow-lg shadow-black/10 active:scale-90 transition-transform cursor-pointer">
                       <Upload size={16} strokeWidth={3} />
                    </div>
                 ) : (
                    <div className="h-10 w-10 bg-neutral-50 rounded-xl flex items-center justify-center text-neutral-200">
                      <ChevronRight size={18} strokeWidth={3} />
                    </div>
                 )}
              </motion.div>
           ))}
        </div>

        <div className="mt-12 p-8 border-2 border-dashed border-neutral-100 rounded-[3rem] flex flex-col items-center text-center bg-white/50 relative overflow-hidden group">
           <div className="absolute -bottom-10 -right-10 h-32 w-32 bg-neutral-900/5 rounded-full blur-2xl" />
           <AlertCircle size={32} className="text-neutral-200 mb-4" strokeWidth={2.5} />
           <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-400 mb-2 pl-1">Data Sovereignty</h4>
           <p className="text-[10px] font-bold text-neutral-400 leading-relaxed max-w-[200px]">Your professional data is strictly encrypted & never shared with third parties.</p>
        </div>
      </div>
    </div>
  );
};

export default VendorKYC;
