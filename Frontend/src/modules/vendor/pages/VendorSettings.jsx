import { User, Shield, Briefcase, FileText, Settings, LogOut, ChevronRight } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { logoutVendor } from "../utils/vendorStore";

const VendorSettings = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    logoutVendor();
    navigate('/vendor/login');
  };

  return (
    <div className="bg-neutral-50 min-h-screen pb-24">
      <div className="bg-white px-4 pt-10 pb-6 shadow-sm flex items-center gap-4 border-b border-neutral-100">
         <div className="h-16 w-16 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 font-black text-xl">
            SG
         </div>
         <div className="flex flex-col">
            <h1 className="text-lg font-black tracking-tighter leading-none mb-1">Sharma Garage</h1>
            <span className="text-[10px] font-bold text-neutral-400">ID: VND-48201A</span>
            <div className="flex items-center gap-1 mt-1 bg-green-50 w-auto self-start px-2 py-0.5 rounded text-[8px] font-black uppercase text-green-600 border border-green-100">
               <Shield size={10} /> KYC Verified
            </div>
         </div>
      </div>

      <div className="px-4 py-6 space-y-6">
         <div>
            <h3 className="text-[10px] font-black uppercase text-neutral-400 tracking-widest pl-1 mb-2">Account Management</h3>
            <div className="bg-white border text-sm font-bold border-neutral-100 rounded-2xl overflow-hidden shadow-sm">
               <Link to="/vendor/profile" className="flex items-center justify-between p-4 border-b border-neutral-50 active:bg-neutral-50 transition-colors">
                  <div className="flex items-center gap-3">
                     <User size={18} className="text-neutral-500" /> My Profile
                  </div>
                  <ChevronRight size={16} className="text-neutral-300" />
               </Link>
               <Link to="/vendor/roles" className="flex items-center justify-between p-4 border-b border-neutral-50 active:bg-neutral-50 transition-colors">
                  <div className="flex items-center gap-3">
                     <Briefcase size={18} className="text-neutral-500" /> Service Roles
                  </div>
                  <ChevronRight size={16} className="text-neutral-300" />
               </Link>
               <Link to="/vendor/kyc" className="flex items-center justify-between p-4 active:bg-neutral-50 transition-colors">
                  <div className="flex items-center gap-3">
                     <FileText size={18} className="text-neutral-500" /> KYC Documents
                  </div>
                  <ChevronRight size={16} className="text-neutral-300" />
               </Link>
            </div>
         </div>

         <div>
            <h3 className="text-[10px] font-black uppercase text-neutral-400 tracking-widest pl-1 mb-2">App Settings</h3>
            <div className="bg-white border text-sm font-bold border-neutral-100 rounded-2xl overflow-hidden shadow-sm">
               <div className="flex items-center justify-between p-4 border-b border-neutral-50 active:bg-neutral-50 transition-colors">
                  <div className="flex items-center gap-3">
                     <Settings size={18} className="text-neutral-500" /> Preferences
                  </div>
                  <ChevronRight size={16} className="text-neutral-300" />
               </div>
               <button 
                onClick={handleLogout}
                className="w-full flex items-center justify-between p-4 text-red-600 active:bg-red-50 transition-colors"
               >
                  <div className="flex items-center gap-3">
                     <LogOut size={18} /> Logout
                  </div>
               </button>
            </div>
         </div>
      </div>
    </div>
  );
};

export default VendorSettings;
