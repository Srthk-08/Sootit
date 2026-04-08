import { MapPin, Search, Filter, Briefcase, Clock, Wallet } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { applyForJob } from "../utils/vendorStore";

const VendorJobs = () => {
  const [success, setSuccess] = useState(null);

  const handleApply = (id) => {
    const ok = applyForJob(id);
    if (ok) {
      setSuccess(id);
      setTimeout(() => setSuccess(null), 3000);
    } else {
      alert("Insufficient Balance! Please recharge your wallet.");
    }
  };

  return (
    <div className="bg-neutral-50 min-h-screen pb-24">
      {/* Toast */}
      <AnimatePresence>
        {success && (
          <motion.div initial={{ y: -100 }} animate={{ y: 20 }} exit={{ y: -100 }} className="fixed top-0 left-0 w-full px-4 z-[100]">
            <div className="bg-green-600 text-white rounded-xl p-4 shadow-xl text-center font-black uppercase text-[10px] tracking-widest">
              Successfully Applied! ₹5 Deducted.
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="bg-white px-4 pt-6 pb-4 border-b border-neutral-100 sticky top-0 z-10 shadow-sm shadow-black/5">
         <h1 className="text-xl font-black italic mb-3 text-neutral-900">Job Board.</h1>
         <div className="flex gap-2">
            <div className="flex-1 bg-neutral-100 rounded-xl px-3 py-2 flex items-center gap-2">
               <Search size={16} className="text-neutral-400" />
               <input type="text" placeholder="Search nearby requests..." className="bg-transparent text-xs font-bold w-full focus:outline-none" />
            </div>
         </div>
      </div>

      <div className="p-4 space-y-4">
        {[
          { id: "R-8821", name: "Sunil Verma", title: "Car Battery Dead", desc: "Need jump start. Swift Dzire parked at basement.", distance: "1.2 km", time: "2 mins ago", fee: "₹5", type: "Urgent" },
          { id: "R-8825", name: "Anjali M.", title: "Outstation Driver", desc: "Need a driver for 2 days round trip to Jaipur.", distance: "4.5 km", time: "15 mins ago", fee: "₹5", type: "Scheduled" },
          { id: "T-9901", name: "Kunal P.", title: "Accident Recovery", desc: "Front bumper damaged, need flatbed towing to nearest service center.", distance: "2.8 km", time: "Just now", fee: "₹5", type: "Urgent" }
        ].map((job, i) => (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            key={job.id} 
            className="bg-white border border-neutral-200 rounded-[1.5rem] p-4 shadow-sm"
          >
             <div className="flex justify-between items-start mb-2">
                <span className={`text-[9px] font-black uppercase px-2 py-0.5 rounded ${job.type === 'Urgent' ? 'bg-red-100 text-red-600' : 'bg-blue-100 text-blue-600'}`}>{job.type}</span>
                <span className="text-[10px] font-bold text-neutral-400 flex items-center gap-1"><Clock size={10} /> {job.time}</span>
             </div>
             <h3 className="text-base font-black tracking-tight leading-tight mb-1">{job.title}</h3>
             <p className="text-xs font-medium text-neutral-500 mb-3">{job.desc}</p>
             <div className="flex items-center gap-1.5 text-neutral-500 mb-4 pb-4 border-b border-neutral-100">
                <MapPin size={12} className="text-neutral-400" />
                <span className="text-[10px] font-bold">{job.name} • <span className="text-orange-500">{job.distance} away</span></span>
             </div>
             
             <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                   <Wallet size={14} className="text-blue-600" />
                   <span className="text-[9px] font-black uppercase text-blue-900 tracking-tighter">Apply Token: {job.fee}</span>
                </div>
                <button 
                  onClick={() => handleApply(job.id)}
                  className="bg-neutral-900 text-white px-5 py-2 rounded-xl text-[10px] font-black uppercase active:scale-95 transition-transform"
                >
                   {success === job.id ? 'Applied!' : 'Apply Now'}
                </button>
             </div>
          </motion.div>
        ))}
        
        <div className="text-center py-8">
           <Briefcase size={32} className="mx-auto text-neutral-200 mb-2" />
           <p className="text-xs font-bold text-neutral-400 uppercase tracking-widest">No more jobs in your area</p>
        </div>
      </div>
    </div>
  );
};

export default VendorJobs;
