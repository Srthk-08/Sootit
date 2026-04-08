import { motion } from "framer-motion";
import { ArrowLeft, User, Mail, Phone, MapPin, Camera, Save } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { getVendorData, setVendorData } from "../utils/vendorStore";

const VendorProfile = () => {
  const navigate = useNavigate();
  const [vendor, setVendor] = useState(getVendorData() || { profile: {} });
  const [formData, setFormData] = useState({
    name: vendor.profile?.name || "",
    email: "sharma.garage@example.com",
    phone: "+91 98765 43210",
    address: "Shop 14, Main Market, Sector 5, Dwarka, Delhi"
  });

  const handleSave = () => {
    const data = getVendorData();
    data.profile = { ...data.profile, name: formData.name };
    setVendorData(data);
    alert("Profile Updated Successfully!");
  };

  return (
    <div className="bg-neutral-50 min-h-screen pb-24 text-neutral-900 font-inter">
      <div className="bg-white px-6 py-6 border-b border-neutral-100 flex items-center gap-4 sticky top-0 z-10 shadow-sm shadow-black/[0.01]">
        <Link to="/vendor/settings" className="h-10 w-10 bg-neutral-50 rounded-xl flex items-center justify-center border border-neutral-100 active:scale-90 transition-transform"><ArrowLeft size={20} /></Link>
        <h1 className="text-xl font-black italic tracking-tighter">My Profile.</h1>
      </div>

      <div className="px-6 py-8">
        <div className="flex flex-col items-center mb-10">
          <div className="relative group">
            <div className="h-24 w-24 bg-slate-900 rounded-[2.5rem] flex items-center justify-center text-white font-black text-2xl border-4 border-white shadow-2xl shadow-black/10 transition-transform group-hover:scale-105">
              {formData.name?.[0] || 'SG'}
            </div>
            <div className="absolute bottom-0 right-0 h-9 w-9 bg-slate-800 rounded-2xl flex items-center justify-center text-white border-2 border-white cursor-pointer active:scale-90 transition-transform shadow-lg">
              <Camera size={14} />
            </div>
          </div>
          <h2 className="mt-5 text-xl font-black tracking-tight">{formData.name}</h2>
          <span className="text-[10px] font-black uppercase text-slate-900 tracking-widest bg-slate-50 px-3 py-1 rounded-xl mt-2 border border-slate-100 shadow-sm">ID: VND-48201A</span>
        </div>

        <div className="space-y-6">
          <div>
             <label className="text-[10px] font-black uppercase text-neutral-400 tracking-[0.2em] pl-1 mb-2 block">Full Name</label>
             <div className="bg-white border border-black/5 rounded-2xl px-5 py-4 flex items-center gap-3 shadow-xl shadow-black/[0.01]">
                <User size={18} className="text-neutral-300" />
                <input 
                  type="text" 
                  value={formData.name} 
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="bg-transparent text-sm font-bold w-full focus:outline-none" 
                />
             </div>
          </div>

          <div>
             <label className="text-[10px] font-black uppercase text-neutral-400 tracking-[0.2em] pl-1 mb-2 block">Email Address</label>
             <div className="bg-white border border-black/5 rounded-2xl px-5 py-4 flex items-center gap-3 opacity-60 shadow-xl shadow-black/[0.01]">
                <Mail size={18} className="text-neutral-300" />
                <input type="email" value={formData.email} disabled className="bg-transparent text-sm font-bold w-full focus:outline-none" />
             </div>
          </div>

          <div>
             <label className="text-[10px] font-black uppercase text-neutral-400 tracking-[0.2em] pl-1 mb-2 block">Phone Number</label>
             <div className="bg-white border border-black/5 rounded-2xl px-5 py-4 flex items-center gap-3 opacity-60 shadow-xl shadow-black/[0.01]">
                <Phone size={18} className="text-neutral-300" />
                <input type="tel" value={formData.phone} disabled className="bg-transparent text-sm font-bold w-full focus:outline-none" />
             </div>
          </div>

          <div>
             <label className="text-[10px] font-black uppercase text-neutral-400 tracking-[0.2em] pl-1 mb-2 block">Service Address</label>
             <div className="bg-white border border-black/5 rounded-2xl px-5 py-4 flex items-start gap-3 shadow-xl shadow-black/[0.01]">
                <MapPin size={18} className="text-neutral-300 mt-1" />
                <textarea 
                  rows={3}
                  value={formData.address}
                  onChange={(e) => setFormData({...formData, address: e.target.value})}
                  className="bg-transparent text-sm font-bold w-full focus:outline-none resize-none" 
                />
             </div>
          </div>

          <button 
            onClick={handleSave}
            className="w-full bg-slate-900 text-white rounded-[1.8rem] py-5 font-black uppercase tracking-widest text-[11px] flex items-center justify-center gap-3 active:scale-95 transition-all mt-10 shadow-2xl shadow-black/10"
          >
             Save Profile <Save size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default VendorProfile;
