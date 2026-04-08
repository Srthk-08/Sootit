import { motion } from "framer-motion";
import { Bell, MapPin, Search, ChevronDown, User, ShieldCheck, Globe, LogOut, Wallet } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { getUserData } from "../../modules/user/utils/userStore";
import { getVendorData } from "../../modules/vendor/utils/vendorStore";

const AppHeader = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const isVendor = currentPath.startsWith('/vendor');
  const isAdmin = currentPath.startsWith('/admin');

  const [data, setData] = useState(isVendor ? getVendorData() : getUserData());

  useEffect(() => {
    const handleUpdate = () => {
      setData(isVendor ? getVendorData() : getUserData());
    };
    window.addEventListener('user_data_updated', handleUpdate);
    window.addEventListener('vendor_data_updated', handleUpdate);
    return () => {
      window.removeEventListener('user_data_updated', handleUpdate);
      window.removeEventListener('vendor_data_updated', handleUpdate);
    };
  }, [isVendor]);

  // Hide Top Header on Auth & Profile Pages for custom headers
  const hideHeaderRoutes = ['/', '/vendor/login', '/vendor/register', '/user/login', '/user/register', '/user/profile', '/user/orders', '/user/reviews', '/user/preferences', '/user/history'];
  const shouldHideHeader = hideHeaderRoutes.includes(currentPath) || currentPath.startsWith('/user/category/');
  if (shouldHideHeader) return null;

  return (
    <motion.header 
      initial={{ y: -40 }}
      animate={{ y: 0 }}
      className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-black/[0.03] py-2 px-3 flex items-center justify-between h-16 font-inter"
    >
      <div className="flex items-center gap-3 group">
        <div className={`h-10 w-10 rounded-2xl flex items-center justify-center font-black text-white text-xs shadow-lg ${isAdmin ? 'bg-neutral-900 shadow-black/20' : 'bg-slate-900 shadow-slate-900/20'}`}>
          {isVendor ? 'V' : isAdmin ? 'A' : 'D'}
        </div>
        <div className="flex flex-col">
          <span className="text-[10px] font-black text-neutral-400 leading-none mb-1 uppercase tracking-widest">{isAdmin ? 'System' : isVendor ? 'Partner' : 'Service'}</span>
          <div className="flex items-center gap-1.5 cursor-pointer">
            <span className="text-sm font-black text-neutral-900 leading-none tracking-tight">
              {isAdmin ? 'DeepMind' : data?.profile?.name || (isVendor ? 'Partner' : 'Service')}
            </span>
            <ChevronDown size={12} className="text-slate-900" strokeWidth={3} />
          </div>
        </div>
      </div>

      <div className="flex items-center gap-3">
        {/* Wallet Widget in Header */}
        {!isAdmin && !isVendor && (
          <div className="bg-slate-50 border border-slate-100 px-3 py-1.5 rounded-2xl flex items-center gap-2 shadow-sm scale-90 origin-right transition-transform active:scale-95">
            <Wallet size={14} className="text-slate-900" strokeWidth={2.5} />
            <span className="text-xs font-black text-slate-900 leading-none tracking-tighter">₹{data?.wallet?.toFixed(1) || "0.0"}</span>
          </div>
        )}
        
        <div className="h-10 w-10 overflow-hidden rounded-2xl border-2 border-white ring-1 ring-black/5 shadow-md">
          <img src={`https://i.pravatar.cc/80?u=${isAdmin ? 'admin' : isVendor ? 'vendor' : 'user'}`} alt="P" className="w-full h-full object-cover" />
        </div>
      </div>
    </motion.header>
  );
};

export default AppHeader;
