import { motion } from "framer-motion";
import { ArrowLeft, User, Navigation, Wrench, Shield, Briefcase, FileText, Truck, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

const VendorRoles = () => {
  const activeRoles = [
    { title: "Mechanic Shop", slug: "mechanic", status: "Active", icon: Wrench, color: "text-orange-600", bg: "bg-orange-50" },
    { title: "Towing Service", slug: "towing", status: "Verification Needed", icon: Truck, color: "text-red-600", bg: "bg-red-50" },
  ];

  const suggestedRoles = [
    { title: "Outstation Driver", slug: "driver", icon: Navigation, color: "text-blue-600", bg: "bg-blue-50" },
    { title: "RTO Compliance", slug: "rto", icon: FileText, color: "text-purple-600", bg: "bg-purple-50" },
    { title: "Legal Consultation", slug: "legal", icon: Briefcase, color: "text-green-600", bg: "bg-green-50" },
  ];

  return (
    <div className="bg-neutral-50 min-h-screen pb-24 text-neutral-900">
      <div className="bg-white px-4 py-6 border-b border-neutral-100 flex items-center gap-4 sticky top-0 z-10">
        <Link to="/vendor/settings"><ArrowLeft size={24} /></Link>
        <h1 className="text-xl font-black italic">Service Roles.</h1>
      </div>

      <div className="px-4 py-8">
        <h3 className="text-[10px] font-black uppercase text-neutral-400 tracking-widest pl-1 mb-4">Your Active Profiles</h3>
        <div className="space-y-4">
           {activeRoles.map((role, idx) => (
              <div key={idx} className="bg-white p-5 rounded-[2rem] border border-neutral-100 flex items-center justify-between shadow-sm relative overflow-hidden group">
                 <div className="flex items-center gap-5">
                    <div className={`h-14 w-14 rounded-2xl flex items-center justify-center ${role.bg} ${role.color}`}>
                       <role.icon size={28} />
                    </div>
                    <div>
                       <h4 className="text-base font-black tracking-tight">{role.title}</h4>
                       <span className={`text-[9px] font-black uppercase tracking-tight ${role.status === 'Active' ? 'text-green-500' : 'text-red-500'}`}>
                          {role.status}
                       </span>
                    </div>
                 </div>
                 {role.status === 'Active' ? (
                    <div className="bg-green-500 h-6 w-11 rounded-full relative">
                       <div className="absolute right-0.5 top-0.5 h-5 w-5 bg-white rounded-full shadow-sm"></div>
                    </div>
                 ) : (
                    <button className="bg-neutral-900 text-white px-3 py-1.5 rounded-lg text-[9px] font-black uppercase tracking-widest active:scale-95 transition-transform">
                       Verify
                    </button>
                 )}
              </div>
           ))}
        </div>

        <h3 className="text-[10px] font-black uppercase text-neutral-400 tracking-widest pl-1 mt-10 mb-4">Add More Services</h3>
        <div className="grid grid-cols-1 gap-3">
           {suggestedRoles.map((role, idx) => (
              <div key={idx} className="bg-white p-4 rounded-2xl border border-neutral-100 flex items-center justify-between shadow-sm active:scale-95 transition-transform">
                 <div className="flex items-center gap-4">
                    <div className={`h-10 w-10 rounded-xl flex items-center justify-center ${role.bg} ${role.color}`}>
                       <role.icon size={20} />
                    </div>
                    <h4 className="text-sm font-black tracking-tight">{role.title}</h4>
                 </div>
                 <button className="bg-blue-50 text-blue-600 px-4 py-1.5 rounded-xl text-[9px] font-black uppercase tracking-widest">
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
