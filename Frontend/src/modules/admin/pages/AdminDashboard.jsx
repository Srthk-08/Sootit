import { motion } from "framer-motion";
import { Users, Briefcase, Activity, ShieldCheck, TrendingUp, AlertTriangle } from "lucide-react";
import logo from "../../../assets/logo.png";

/**
 * Super Admin Panel (Ultra Compact Desktop/Mobile Hybrid)
 * Focuses on high-level system metrics.
 */
const AdminDashboard = () => {
  return (
    <div className="bg-neutral-50 min-h-screen pb-24 font-sans">
      <section className="px-5 py-8 bg-neutral-900 text-white rounded-b-[2.5rem] shadow-2xl">
        <div className="flex items-center gap-4 mb-8">
          <div className="h-12 w-12 bg-white rounded-2xl overflow-hidden flex items-center justify-center border border-white/10 shadow-xl">
            <img src={logo} alt="Logo" className="w-full h-full object-cover p-2" />
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-[10px] font-black uppercase text-white/30 tracking-[0.2em]">System Status</span>
            <h1 className="text-2xl font-black italic tracking-tighter">Admin Panel.</h1>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {[
            { label: "Active Revenue", val: "₹12.4L", icon: TrendingUp, clr: "text-white" },
            { label: "System Uptime", val: "99.98%", icon: Activity, clr: "text-slate-400" },
          ].map((stat, i) => (
            <div key={i} className="p-4 bg-white/5 border border-white/10 rounded-2xl">
              <div className="flex items-center gap-2 mb-2">
                <stat.icon size={12} className={stat.clr} strokeWidth={3} />
                <span className="text-[9px] font-black uppercase tracking-widest text-white/40">{stat.label}</span>
              </div>
              <span className="text-xl font-black">{stat.val}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="px-4 py-8">
        <div className="flex items-center justify-between mb-6 px-1">
          <h2 className="text-xs font-black text-neutral-900 uppercase tracking-[0.2em]">Module Health</h2>
          <div className="h-5 w-5 rounded-full bg-slate-900/20 flex items-center justify-center">
            <div className="h-2 w-2 rounded-full bg-slate-900 animate-pulse" />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-3">
          {[
            { label: "User Management", count: "14.2k Active Users", icon: Users },
            { label: "Vendor Verification", count: "152 Pending Requests", icon: ShieldCheck, alert: true },
            { label: "Job Postings", count: "890 Ongoing Trips", icon: Briefcase },
          ].map((item, i) => (
            <motion.div 
              key={i}
              whileTap={{ scale: 0.98 }}
              className="bg-white p-5 rounded-3xl border border-black/5 shadow-sm flex items-center gap-4 relative"
            >
              <div className="h-11 w-11 bg-neutral-100 rounded-2xl flex items-center justify-center text-neutral-900 border border-black/5">
                <item.icon size={22} strokeWidth={2.5} />
              </div>
              <div className="flex flex-col">
                <h3 className="text-sm font-black tracking-tight">{item.label}</h3>
                <span className="text-[10px] font-bold text-neutral-400 capitalize">{item.count}</span>
              </div>
              {item.alert && (
                <div className="absolute top-4 right-4 h-6 w-6 bg-slate-50 border border-slate-100 rounded-lg flex items-center justify-center text-slate-900">
                  <AlertTriangle size={14} strokeWidth={3} />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AdminDashboard;
