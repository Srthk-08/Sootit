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
    <div className="bg-neutral-50 min-h-screen pb-24 text-neutral-900">
      <div className="bg-white px-4 py-6 border-b border-neutral-100 flex items-center gap-4 sticky top-0 z-10">
        <Link to="/vendor/settings"><ArrowLeft size={24} /></Link>
        <h1 className="text-xl font-black italic">My Profile.</h1>
      </div>

      <div className="px-4 py-8">
        <div className="flex flex-col items-center mb-10">
          <div className="relative group">
            <div className="h-24 w-24 bg-blue-100 rounded-[2rem] flex items-center justify-center text-blue-600 font-black text-2xl border-4 border-white shadow-xl">
              SG
            </div>
            <div className="absolute bottom-0 right-0 h-8 w-8 bg-neutral-900 rounded-xl flex items-center justify-center text-white border-2 border-white cursor-pointer active:scale-90 transition-transform">
              <Camera size={14} />
            </div>
          </div>
          <h2 className="mt-4 text-lg font-black tracking-tight">{formData.name}</h2>
          <span className="text-[10px] font-black uppercase text-blue-600 tracking-widest bg-blue-50 px-2 py-0.5 rounded-lg mt-1">ID: VND-48201A</span>
        </div>

        <div className="space-y-6">
          <div>
             <label className="text-[10px] font-black uppercase text-neutral-400 tracking-widest pl-1 mb-1 block">Full Name</label>
             <div className="bg-white border border-neutral-200 rounded-2xl px-4 py-3 flex items-center gap-3">
                <User size={18} className="text-neutral-400" />
                <input 
                  type="text" 
                  value={formData.name} 
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="bg-transparent text-sm font-bold w-full focus:outline-none" 
                />
             </div>
          </div>

          <div>
             <label className="text-[10px] font-black uppercase text-neutral-400 tracking-widest pl-1 mb-1 block">Email Address</label>
             <div className="bg-white border border-neutral-100 rounded-2xl px-4 py-3 flex items-center gap-3 opacity-60">
                <Mail size={18} className="text-neutral-400" />
                <input type="email" value={formData.email} disabled className="bg-transparent text-sm font-bold w-full focus:outline-none" />
             </div>
          </div>

          <div>
             <label className="text-[10px] font-black uppercase text-neutral-400 tracking-widest pl-1 mb-1 block">Phone Number</label>
             <div className="bg-white border border-neutral-100 rounded-2xl px-4 py-3 flex items-center gap-3 opacity-60">
                <Phone size={18} className="text-neutral-400" />
                <input type="tel" value={formData.phone} disabled className="bg-transparent text-sm font-bold w-full focus:outline-none" />
             </div>
          </div>

          <div>
             <label className="text-[10px] font-black uppercase text-neutral-400 tracking-widest pl-1 mb-1 block">Residential Address</label>
             <div className="bg-white border border-neutral-200 rounded-2xl px-4 py-3 flex items-start gap-3">
                <MapPin size={18} className="text-neutral-400 mt-1" />
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
            className="w-full bg-blue-600 text-white rounded-2xl py-4 font-black uppercase tracking-widest text-xs flex items-center justify-center gap-2 active:scale-95 transition-transform mt-8 shadow-xl shadow-blue-600/20"
          >
             Save Profile <Save size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default VendorProfile;
