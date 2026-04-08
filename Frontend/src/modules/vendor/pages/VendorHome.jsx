import { motion } from "framer-motion";
import { Star, Shield, Zap, TrendingUp, Settings, DollarSign, Activity, Briefcase, Wallet, MapPin, CheckCircle2, Wrench, Truck, FileText, Navigation } from "lucide-react";
import { useState, useEffect } from "react";
import { getVendorData } from "../utils/vendorStore";

const VendorHome = () => {
  const [vendor, setVendor] = useState(getVendorData() || {
    profile: { name: "Guest" },
    wallet: 0
  });

  useEffect(() => {
    const handleUpdate = () => setVendor(getVendorData());
    window.addEventListener('vendor_data_updated', handleUpdate);
    return () => window.removeEventListener('vendor_data_updated', handleUpdate);
  }, []);

  return (
    <div className="bg-neutral-50 min-h-screen pb-24">
      {/* Vendor Stats Grid (Micro) */}
      <section className="px-4 py-6 bg-blue-700 text-white rounded-b-[2.5rem] shadow-xl">
        <div className="flex justify-between items-center mb-6">
          <div className="flex flex-col">
            <span className="text-[10px] font-black uppercase text-white/50 tracking-widest">Active Vendor</span>
            <h1 className="text-xl font-black italic text-white leading-none mt-1">Welcome, {vendor.profile.name}!</h1>
          </div>
          <div className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-xl border border-white/20 relative">
             <Wallet size={16} className="text-green-300" />
             <div className="flex flex-col">
               <span className="text-[8px] font-black uppercase text-white/50 tracking-widest leading-none">Wallet</span>
               <span className="text-sm font-black tracking-tight leading-none">₹ {vendor.wallet.toFixed(2)}</span>
             </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="bg-white/10 p-3 rounded-2xl border border-white/10">
            <div className="flex items-center gap-2 mb-1">
              <DollarSign size={14} className="text-white/60" />
              <span className="text-[9px] font-black uppercase tracking-widest text-white/60">Earnings</span>
            </div>
            <span className="text-lg font-black tracking-tight">₹ 4,290.00</span>
          </div>
          <div className="bg-white/10 p-3 rounded-2xl border border-white/10">
            <div className="flex items-center gap-2 mb-1">
              <Activity size={14} className="text-white/60" />
              <span className="text-[9px] font-black uppercase tracking-widest text-white/60">Success Rate</span>
            </div>
            <span className="text-lg font-black tracking-tight">98.4%</span>
          </div>
        </div>
      </section>

      {/* Role Switcher / Active Profile Indicator */}
      <section className="px-4 py-4 mt-2">
         <div className="bg-neutral-900 text-white p-3 rounded-2xl flex items-center justify-between shadow-lg shadow-neutral-900/10">
            <div className="flex items-center gap-3">
               <div className="h-10 w-10 bg-white/10 rounded-xl flex items-center justify-center">
                  <Briefcase size={18} className="text-blue-400" />
               </div>
               <div>
                  <h3 className="text-xs font-black uppercase tracking-widest">Mechanic Profile</h3>
                  <p className="text-[9px] font-medium text-neutral-400">Receiving leads in 15km radius</p>
               </div>
            </div>
            <div className="h-4 w-8 bg-blue-600 rounded-full relative cursor-pointer">
               <div className="absolute right-0.5 top-0.5 h-3 w-3 bg-white rounded-full"></div>
            </div>
         </div>
      </section>

      {/* Role Management / Switcher (Mobile App Style) */}
      <section className="px-4 py-4">
        <h2 className="text-sm font-black text-neutral-900 uppercase tracking-widest mb-4 border-l-4 border-blue-600 pl-3">Active Services</h2>
        <div className="grid grid-cols-2 gap-3">
          {[
            { label: "Driver Service", icon: Navigation, color: "text-blue-600", bg: "bg-blue-100", status: "Active" },
            { label: "Mechanic Shop", icon: Wrench, color: "text-orange-600", bg: "bg-orange-100", status: "Pending" },
            { label: "Towing Help", icon: Truck, color: "text-red-600", bg: "bg-red-100", status: "Inactive" },
            { label: "RTO Agent", icon: FileText, color: "text-purple-600", bg: "bg-purple-100", status: "Closed" },
            { label: "Legal Advisor", icon: Briefcase, color: "text-green-600", bg: "bg-green-100", status: "Inactive" },
          ].map((role, idx) => (
            <motion.div 
              key={idx}
              whileTap={{ scale: 0.96 }}
              className="bg-white p-4 rounded-[2rem] border border-black/5 shadow-sm flex flex-col gap-3 relative overflow-hidden group"
            >
              <div className={`h-10 w-10 rounded-xl flex items-center justify-center ${role.bg} ${role.color}`}>
                <role.icon size={20} strokeWidth={2.5} />
              </div>
              <div>
                <h3 className="text-xs font-black tracking-tight text-neutral-900 leading-none">{role.label}</h3>
                <span className={`text-[8px] font-black uppercase tracking-tighter mt-1 block ${role.status === 'Active' ? 'text-green-500' : 'text-neutral-400'}`}>
                  {role.status}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Direct Hire Requests */}
      <section className="px-4 py-2">
        <h2 className="text-sm font-black text-neutral-900 uppercase tracking-widest mb-3 border-l-4 border-green-500 pl-3">Direct Hire Requests</h2>
        <div className="bg-green-50 border border-green-200 p-4 rounded-[1.5rem] shadow-sm relative overflow-hidden group">
           <div className="absolute -right-6 -top-6 h-20 w-20 bg-green-500/10 rounded-full blur-xl group-hover:scale-150 transition-transform"></div>
           <div className="flex justify-between items-start mb-3">
              <div>
                 <span className="text-[9px] font-black uppercase bg-green-200 text-green-700 px-2 py-0.5 rounded text-[10px]">New Request</span>
                 <h3 className="text-base font-black mt-1">Suresh Kumar</h3>
              </div>
              <span className="text-[10px] font-bold text-neutral-500">2 mins ago</span>
           </div>
           <div className="flex items-center gap-1.5 text-neutral-600 mb-4">
              <MapPin size={12} className="text-neutral-400" />
              <span className="text-[10px] font-bold">Vasant Kunj • Engine Checkup</span>
           </div>
           <div className="flex gap-2">
              <button className="flex-1 bg-green-600 text-white font-black uppercase text-[10px] py-2.5 rounded-xl active:scale-95 transition-transform flex items-center justify-center gap-1.5">
                 <CheckCircle2 size={14} /> Accept Request
              </button>
           </div>
        </div>
      </section>

      {/* Jobs / Leads Board */}
      <section className="px-4 py-4">
        <div className="flex justify-between items-center mb-3">
           <h2 className="text-sm font-black text-neutral-900 uppercase tracking-widest border-l-4 border-blue-600 pl-3">Local Job Board</h2>
           <span className="text-[9px] font-black text-neutral-400 uppercase tracking-widest">3 New</span>
        </div>
        
        <div className="space-y-3">
          {[
            { id: "J-0192", name: "Rahul Singh", task: "Need Car AC Gas Refill", distance: "4.5 km", time: "Just now" },
            { id: "J-0195", name: "Priya D.", task: "Car not starting (Battery)", distance: "2.1 km", time: "5m ago" },
          ].map((job, i) => (
            <div key={i} className="bg-white p-4 rounded-[1.5rem] border border-black/5 shadow-sm flex flex-col gap-3">
              <div className="flex justify-between items-start">
                 <div>
                    <span className="text-[9px] font-black text-neutral-400 uppercase tracking-widest mb-0.5 block">{job.id}</span>
                    <h3 className="text-xs font-black">{job.task}</h3>
                 </div>
                 <span className="text-[9px] font-bold text-neutral-400">{job.time}</span>
              </div>
              
              <div className="flex items-center gap-1.5 text-neutral-500">
                 <MapPin size={10} />
                 <span className="text-[10px] font-bold">{job.name} • <span className="text-orange-500">{job.distance} away</span></span>
              </div>
              
              <div className="bg-neutral-50 p-2.5 rounded-xl border border-neutral-100 flex items-center justify-between mt-1">
                 <div className="flex items-center gap-1.5">
                    <Wallet size={12} className="text-blue-600" />
                    <span className="text-[9px] font-black uppercase text-blue-800">Apply Token Fee: ₹5</span>
                 </div>
                 <button className="bg-neutral-900 text-white px-4 py-1.5 rounded-lg text-[9px] font-black uppercase active:scale-95 transition-transform hover:bg-neutral-800">
                    Apply Now
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
