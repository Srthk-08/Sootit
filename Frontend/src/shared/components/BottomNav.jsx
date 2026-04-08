import { motion } from "framer-motion";
import { Search, MapPin, Grid, Heart, User, Briefcase, DollarSign, Activity, Settings, LayoutDashboard, ShieldCheck } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const AppBottomNav = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const isVendor = currentPath.startsWith('/vendor');
  const isAdmin = currentPath.startsWith('/admin');

  // Hide Bottom Navigation on Auth Pages
  const authRoutes = ['/', '/vendor/login', '/vendor/register', '/user/login', '/user/register'];
  const hideNav = authRoutes.includes(currentPath);
  
  if (hideNav) return null;

  const NavItem = ({ to, icon: Icon, label }) => {
    const isActive = currentPath === to;
    return (
      <Link to={to} className="flex flex-col items-center gap-0.5 group flex-1">
        <motion.div 
          animate={isActive ? { scale: 1.05, y: -2 } : { scale: 1, y: 0 }}
          className={`h-9 w-9 rounded-2xl flex items-center justify-center transition-all ${
            isActive ? "bg-slate-900 shadow-xl shadow-slate-900/20" : "bg-transparent text-neutral-300"
          }`}
        >
          <Icon size={16} strokeWidth={isActive ? 3 : 2.5} className={isActive ? "text-white" : ""} />
        </motion.div>
        <span className={`text-[8px] font-black tracking-widest uppercase transition-colors ${
          isActive ? "text-slate-900" : 'text-neutral-300'
        }`}>
          {label}
        </span>
      </Link>
    );
  };

  return (
    <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[375px] z-[100] px-3 pb-3 pointer-events-none font-inter">
      <motion.nav 
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="bg-white/90 backdrop-blur-2xl rounded-[1.5rem] px-2 py-1.5 flex items-center justify-around shadow-2xl shadow-black/5 pointer-events-auto border border-white/50"
      >
        {!isVendor && !isAdmin && (
          <>
            <NavItem to="/user" icon={LayoutDashboard} label="Home" />
            <NavItem to="/user/find" icon={MapPin} label="Find" />
            <NavItem to="/user/search" icon={Search} label="Search" />
            <NavItem to="/user/profile" icon={User} label="Profile" />
          </>
        )}
        {isVendor && (
          <>
            <NavItem to="/vendor" icon={Grid} label="PANEL" />
            <NavItem to="/vendor/jobs" icon={Briefcase} label="JOBS" />
            <NavItem to="/vendor/earnings" icon={DollarSign} label="PAY" />
            <NavItem to="/vendor/settings" icon={Settings} label="ACC" />
          </>
        )}
        {isAdmin && (
          <>
            <NavItem to="/admin" icon={LayoutDashboard} label="STATUS" />
            <NavItem to="/admin/users" icon={User} label="USERS" />
            <NavItem to="/admin/vendors" icon={ShieldCheck} label="PRO" />
            <NavItem to="/admin/settings" icon={Activity} label="LOGS" />
          </>
        )}
      </motion.nav>
    </div>
  );
};

export default AppBottomNav;
