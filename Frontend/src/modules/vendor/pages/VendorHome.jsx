import { motion } from "framer-motion";
import { Star, Shield, Zap, TrendingUp, Settings, DollarSign, Activity, Briefcase, Wallet, MapPin, CheckCircle2, Wrench, Truck, FileText, Navigation } from "lucide-react";
import { useState, useEffect } from "react";
import { getVendorData } from "../utils/vendorStore";
import { getVendorConfig } from "../utils/vendorConfig";

const VendorHome = () => {
  const [vendor, setVendor] = useState(getVendorData() || {
    profile: { name: "Sharma Garage", role: "mechanic" },
    wallet: 0
  });

  const config = getVendorConfig(vendor.profile.role);

  useEffect(() => {
    const handleUpdate = () => setVendor(getVendorData());
    window.addEventListener('vendor_data_updated', handleUpdate);
    return () => window.removeEventListener('vendor_data_updated', handleUpdate);
  }, []);

  const serviceRoles = [
    { label: "Driver Service", icon: Navigation, color: "text-slate-900", bg: "bg-slate-50", status: vendor.profile.role === 'driver' ? 'ACTIVE' : 'INACTIVE' },
    { label: "Mechanic Shop", icon: Wrench, color: "text-slate-700", bg: "bg-slate-100", status: vendor.profile.role === 'mechanic' ? 'ACTIVE' : 'PENDING' },
    { label: "Towing Help", icon: Truck, color: "text-slate-800", bg: "bg-neutral-100", status: vendor.profile.role === 'towing' ? 'ACTIVE' : 'INACTIVE' },
    { label: "RTO Agent", icon: FileText, color: "text-slate-900", bg: "bg-slate-50", status: vendor.profile.role === 'rto' ? 'ACTIVE' : 'CLOSED' },
    { label: "Legal Advisor", icon: Briefcase, color: "text-slate-700", bg: "bg-slate-100", status: vendor.profile.role === 'legal' ? 'ACTIVE' : 'INACTIVE' },
  ];

  return (
    <div className="bg-white min-h-screen pb-24 font-inter">
      {/* Earnings & Success Rate (Top Bar) */}
      <section className="px-4 pt-6 pb-8 bg-slate-900 text-white rounded-b-[2.5rem] shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 h-40 w-40 bg-white/5 rounded-full blur-3xl -mr-20 -mt-10" />
        <div className="grid grid-cols-2 gap-4 relative z-10">
          <div className="bg-white/10 p-5 rounded-3xl border border-white/5 backdrop-blur-md">
            <div className="flex items-center gap-2 mb-2">
              <DollarSign size={14} className="text-white/40" />
              <span className="text-[9px] font-black uppercase tracking-[0.2em] text-white/30">Earnings</span>
            </div>
            <span className="text-2xl font-black tracking-tighter italic">₹4,290.00</span>
          </div>
          <div className="bg-white/10 p-5 rounded-3xl border border-white/5 backdrop-blur-md">
            <div className="flex items-center gap-2 mb-2">
              <Zap size={14} className="text-white/40" />
              <span className="text-[9px] font-black uppercase tracking-[0.2em] text-white/30">Success Rate</span>
            </div>
            <span className="text-2xl font-black tracking-tighter italic">98.4%</span>
          </div>
        </div>
      </section>

      {/* Role Profile Card with Toggle */}
      <section className="px-4 py-6 -mt-3 relative z-20">
         <div className="bg-neutral-900 text-white p-5 rounded-[2rem] flex items-center justify-between shadow-2xl shadow-black/10">
            <div className="flex items-center gap-4">
               <div className="h-12 w-12 bg-white/10 rounded-2xl flex items-center justify-center border border-white/5">
                  <config.icon size={22} className="text-white/80" strokeWidth={2.5} />
               </div>
               <div>
                  <h3 className="text-[11px] font-black uppercase tracking-[0.2em] mb-0.5">{config.label} Profile</h3>
                  <p className="text-[10px] font-medium text-neutral-400">Receiving leads in {config.leadsRange}</p>
               </div>
            </div>
            <div className="h-6 w-11 bg-slate-800 rounded-full relative cursor-pointer shadow-inner">
               <div className="absolute right-0.5 top-0.5 h-5 w-5 bg-white rounded-full shadow-lg"></div>
            </div>
         </div>
      </section>

      {/* Active Services Grid */}
      <section className="px-4 py-4">
        <h2 className="text-[11px] font-black text-neutral-900 uppercase tracking-[0.25em] mb-6 pl-1 border-l-4 border-slate-900 h-4 flex items-center">Active Services</h2>
        <div className="grid grid-cols-2 gap-4">
          {serviceRoles.map((role, idx) => (
            <motion.div 
              key={idx}
              whileTap={{ scale: 0.96 }}
              className="bg-white p-5 rounded-[2.5rem] border border-black/5 shadow-xl shadow-black/[0.01] flex flex-col gap-4 relative group"
            >
              <div className={`h-12 w-12 rounded-2xl flex items-center justify-center ${role.bg} ${role.color} shadow-inner`}>
                <role.icon size={22} strokeWidth={2.5} />
              </div>
              <div>
                <h3 className="text-xs font-black tracking-tight text-neutral-900 mb-1">{role.label}</h3>
                <span className={`text-[8px] font-black uppercase tracking-widest ${role.status === 'ACTIVE' ? 'text-green-500' : 'text-neutral-300'}`}>
                  {role.status}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Direct Hire Requests */}
      <section className="px-4 py-6">
        <h2 className="text-[11px] font-black text-neutral-900 uppercase tracking-[0.25em] mb-6 pl-1 border-l-4 border-neutral-900 h-4 flex items-center">Direct Hire Requests</h2>
        {config.directRequests.map((req, idx) => (
          <div key={idx} className="bg-neutral-50 border border-neutral-100 p-6 rounded-[2.5rem] relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4">
              <span className="text-[9px] font-black text-neutral-400">{req.time}</span>
            </div>
            <div className="mb-4">
               <span className="text-[9px] font-black uppercase text-slate-800 bg-slate-100 px-2.5 py-1 rounded-xl mb-2 inline-block">New Request</span>
               <h3 className="text-xl font-black tracking-tighter text-neutral-900">{req.name}</h3>
            </div>
            <div className="flex items-center gap-1.5 text-neutral-600 mb-6">
               <MapPin size={14} className="text-neutral-400" />
               <span className="text-[11px] font-bold">{req.location} • <span className="text-slate-900">{req.service}</span></span>
            </div>
            <div className="flex gap-2">
               <button className="flex-1 bg-slate-900 text-white font-black uppercase text-[11px] tracking-widest py-4 rounded-2xl active:scale-95 transition-all shadow-xl shadow-black/10 flex items-center justify-center gap-2">
                  <CheckCircle2 size={16} /> Accept Booking
               </button>
            </div>
          </div>
        ))}
      </section>

      {/* Role Specialized Leads */}
      <section className="px-4 py-4">
        <div className="flex justify-between items-center mb-6 pl-1 pr-1 border-l-4 border-slate-900 h-4 flex-row">
           <h2 className="text-[11px] font-black text-neutral-900 uppercase tracking-[0.25em]">Nearby Leads</h2>
           <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">{config.featuredJobs.length} New</span>
        </div>
        
        <div className="space-y-4">
          {config.featuredJobs.map((job, i) => (
            <div key={i} className="bg-white p-5 rounded-[2.5rem] border border-black/5 shadow-xl shadow-black/[0.01] flex flex-col gap-4">
              <div className="flex justify-between items-start">
                 <div className="flex-1">
                    <span className="text-[9px] font-black text-neutral-400 uppercase tracking-[0.15em] mb-1 block">{job.id}</span>
                    <h3 className="text-sm font-black tracking-tight mb-2">{job.task}</h3>
                    <div className="flex items-center gap-2">
                        <MapPin size={10} className="text-neutral-400" />
                        <span className="text-[10px] font-bold text-neutral-500">{job.name} • <span className="text-slate-900 font-extrabold">{job.distance}</span></span>
                    </div>
                 </div>
                 <span className="text-[9px] font-bold text-neutral-300">{job.time}</span>
              </div>
              
              <div className="bg-neutral-50 p-3 rounded-2xl flex items-center justify-between border border-neutral-100">
                 <div className="flex items-center gap-2 pl-1">
                    <Wallet size={12} className="text-slate-900" />
                    <span className="text-[9px] font-black uppercase text-slate-900 tracking-tighter">Token Fee: ₹{job.fee}</span>
                 </div>
                 <button className="bg-slate-900 text-white px-6 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest active:scale-95 transition-all shadow-lg">
                    Apply
                 </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default VendorHome;
