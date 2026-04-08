import { User, Shield, Briefcase, FileText, Settings, LogOut, ChevronRight } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { logoutVendor } from "../utils/vendorStore";

const VendorSettings = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    logoutVendor();
    navigate('/');
  };

  return (
    <div className="bg-neutral-50 min-h-screen pb-24 font-inter">
      <div className="bg-white px-6 pt-10 pb-8 shadow-sm flex items-center gap-5 border-b border-neutral-100 sticky top-0 z-10">
         <div className="h-16 w-16 bg-slate-900 rounded-[1.8rem] flex items-center justify-center text-white font-black text-xl shadow-xl shadow-black/10">
            SG
         </div>
         <div className="flex flex-col">
            <h1 className="text-xl font-black tracking-tighter leading-none mb-1.5 uppercase italic">Sharma Garage</h1>
            <span className="text-[10px] font-black text-neutral-400 uppercase tracking-widest">ID: VND-48201A</span>
            <div className="flex items-center gap-1.5 mt-2 bg-slate-50 w-auto self-start px-2 py-1 rounded-lg text-[8px] font-black uppercase text-slate-900 border border-slate-100 shadow-sm">
               <Shield size={10} className="fill-slate-900" /> KYC Verified
            </div>
         </div>
      </div>

      <div className="px-6 py-8 space-y-10">
         <section>
            <h3 className="text-[11px] font-black uppercase text-neutral-300 tracking-[0.25em] mb-5 pl-1">Management Console</h3>
            <div className="bg-white border text-sm font-bold border-black/5 rounded-[2.5rem] overflow-hidden shadow-xl shadow-black/[0.01]">
               <Link to="/vendor/profile" className="flex items-center justify-between p-5 border-b border-neutral-50 active:bg-neutral-50 transition-colors group">
                  <div className="flex items-center gap-4">
                     <User size={18} className="text-neutral-300 group-hover:text-slate-900 transition-colors" strokeWidth={2.5} /> 
                     <span className="text-neutral-800">My Profile</span>
                  </div>
                  <ChevronRight size={16} className="text-neutral-200" strokeWidth={3} />
               </Link>
               <Link to="/vendor/roles" className="flex items-center justify-between p-5 border-b border-neutral-50 active:bg-neutral-50 transition-colors group">
                  <div className="flex items-center gap-4">
                     <Briefcase size={18} className="text-neutral-300 group-hover:text-slate-900 transition-colors" strokeWidth={2.5} /> 
                     <span className="text-neutral-800">Service Roles</span>
                  </div>
                  <ChevronRight size={16} className="text-neutral-200" strokeWidth={3} />
               </Link>
               <Link to="/vendor/kyc" className="flex items-center justify-between p-5 active:bg-neutral-50 transition-colors group">
                  <div className="flex items-center gap-4">
                     <FileText size={18} className="text-neutral-300 group-hover:text-slate-900 transition-colors" strokeWidth={2.5} /> 
                     <span className="text-neutral-800">KYC Documents</span>
                  </div>
                  <ChevronRight size={16} className="text-neutral-200" strokeWidth={3} />
               </Link>
            </div>
         </section>

         <section>
            <h3 className="text-[11px] font-black uppercase text-neutral-300 tracking-[0.25em] mb-5 pl-1">Configuration</h3>
            <div className="bg-white border text-sm font-bold border-black/5 rounded-[2.5rem] overflow-hidden shadow-xl shadow-black/[0.01]">
               <div className="flex items-center justify-between p-5 border-b border-neutral-50 active:bg-neutral-50 transition-colors group">
                  <div className="flex items-center gap-4">
                     <Settings size={18} className="text-neutral-300 group-hover:text-slate-900 transition-colors" strokeWidth={2.5} /> 
                     <span className="text-neutral-800">Preferences</span>
                  </div>
                  <ChevronRight size={16} className="text-neutral-200" strokeWidth={3} />
               </div>
               <button 
                onClick={handleLogout}
                className="w-full flex items-center justify-between p-5 text-slate-900 bg-slate-50 active:bg-slate-100 transition-colors group"
               >
                  <div className="flex items-center gap-4">
                     <LogOut size={18} className="text-slate-900" strokeWidth={3} /> 
                     <span className="font-black uppercase tracking-widest text-[10px]">Logout Session</span>
                  </div>
               </button>
            </div>
         </section>
      </div>
    </div>
  );
};

export default VendorSettings;
