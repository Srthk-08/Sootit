import { motion } from "framer-motion";
import { ArrowLeft, User, Navigation, Wrench, Shield, Briefcase, FileText, Truck, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

const VendorRoles = () => {
  const activeRoles = [
    { title: "Mechanic Shop", slug: "mechanic", status: "Active", icon: Wrench, color: "text-slate-900", bg: "bg-slate-50" },
    { title: "Towing Service", slug: "towing", status: "Verification Needed", icon: Truck, color: "text-slate-400", bg: "bg-neutral-50" },
  ];

  const suggestedRoles = [
    { title: "Outstation Driver", slug: "driver", icon: Navigation, color: "text-slate-900", bg: "bg-slate-100" },
    { title: "RTO Compliance", slug: "rto", icon: FileText, color: "text-slate-900", bg: "bg-slate-50" },
    { title: "Legal Consultation", slug: "legal", icon: Briefcase, color: "text-slate-900", bg: "bg-slate-100" },
  ];

  return (
    <div className="bg-neutral-50 min-h-screen pb-24 text-neutral-900 font-inter">
      <div className="bg-white px-6 py-6 border-b border-neutral-100 flex items-center gap-4 sticky top-0 z-10 shadow-sm shadow-black/[0.01]">
        <Link to="/vendor/settings" className="h-10 w-10 bg-neutral-50 rounded-xl flex items-center justify-center border border-neutral-100 active:scale-90 transition-transform"><ArrowLeft size={20} /></Link>
        <h1 className="text-xl font-black italic tracking-tighter">Service Roles.</h1>
      </div>

      <div className="px-6 py-8">
        <h3 className="text-[10px] font-black uppercase text-neutral-400 tracking-[0.2em] pl-1 mb-6">Your Active Profiles</h3>
        <div className="space-y-4">
           {activeRoles.map((role, idx) => (
              <div key={idx} className="bg-white p-5 rounded-[2.5rem] border border-black/5 flex items-center justify-between shadow-xl shadow-black/[0.01] relative overflow-hidden group">
                 <div className="flex items-center gap-5">
                    <div className={`h-14 w-14 rounded-2xl flex items-center justify-center ${role.bg} ${role.color} shadow-inner`}>
                       <role.icon size={28} strokeWidth={2.5} />
                    </div>
                    <div>
                       <h4 className="text-base font-black tracking-tight leading-none mb-1.5">{role.title}</h4>
                       <span className={`text-[9px] font-black uppercase tracking-widest ${role.status === 'Active' ? 'text-green-500' : 'text-slate-300'}`}>
                          {role.status}
                       </span>
                    </div>
                 </div>
                 {role.status === 'Active' ? (
                    <div className="bg-slate-900 h-6 w-11 rounded-full relative shadow-inner">
                       <div className="absolute right-0.5 top-0.5 h-5 w-5 bg-white rounded-full shadow-lg"></div>
                    </div>
                 ) : (
                    <button className="bg-slate-900 text-white px-5 py-2.5 rounded-xl text-[9px] font-black uppercase tracking-widest active:scale-95 transition-all shadow-xl shadow-black/10">
                       Verify
                    </button>
                 )}
              </div>
           ))}
        </div>

        <h3 className="text-[10px] font-black uppercase text-neutral-400 tracking-[0.2em] pl-1 mt-12 mb-6">Add More Services</h3>
        <div className="grid grid-cols-1 gap-4">
           {suggestedRoles.map((role, idx) => (
              <div key={idx} className="bg-white p-5 rounded-[2.5rem] border border-black/5 flex items-center justify-between shadow-xl shadow-black/[0.01] active:scale-98 transition-all">
                 <div className="flex items-center gap-4">
                    <div className={`h-12 w-12 rounded-2xl flex items-center justify-center ${role.bg} ${role.color} shadow-inner`}>
                       <role.icon size={22} strokeWidth={2.5} />
                    </div>
                    <h4 className="text-sm font-black tracking-tight leading-none uppercase italic">{role.title}</h4>
                 </div>
                 <button className="bg-slate-50 text-slate-900 border border-slate-100 px-6 py-2.5 rounded-xl text-[9px] font-black uppercase tracking-widest active:scale-95 transition-all">
                    Activate
                 </button>
              </div>
           ))}
        </div>
      </div>
    </div>
  );
};

export default VendorRoles;
