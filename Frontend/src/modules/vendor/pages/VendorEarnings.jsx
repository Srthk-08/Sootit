import { Wallet, ArrowUpRight, ArrowDownRight, IndianRupee, RefreshCw } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { getVendorData, rechargeWallet } from "../utils/vendorStore";

const VendorEarnings = () => {
  const [vendor, setVendor] = useState(() => getVendorData() || { wallet: 0, transactions: [] });

  useEffect(() => {
    const handleUpdate = () => {
      const data = getVendorData();
      if (data) setVendor(data);
    };
    window.addEventListener('vendor_data_updated', handleUpdate);
    return () => window.removeEventListener('vendor_data_updated', handleUpdate);
  }, []);

  const handleRecharge = () => {
    rechargeWallet(50);
  };

  return (
    <div className="bg-neutral-50 min-h-screen pb-24 font-inter">
      <div className="bg-slate-900 pt-10 pb-12 px-6 rounded-b-[3rem] shadow-2xl shadow-black/20 text-white relative overflow-hidden">
         <div className="absolute top-0 right-0 h-40 w-40 bg-white/5 rounded-full blur-3xl -mr-10 -mt-20" />
         <div className="flex justify-between items-start mb-10 relative z-10">
            <div>
               <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30 mb-2 block leading-none">Available Balance</span>
               <h1 className="text-4xl font-black tracking-tighter italic">₹{vendor.wallet.toFixed(2)}</h1>
            </div>
            <button className="h-10 w-10 bg-white/10 rounded-xl flex items-center justify-center border border-white/5 active:scale-90 transition-transform">
               <RefreshCw size={18} />
            </button>
         </div>
         
         <div className="flex gap-3 relative z-10">
            <button 
              onClick={handleRecharge}
              className="flex-1 bg-white text-slate-900 py-4 rounded-2xl text-[11px] font-black uppercase tracking-widest flex items-center justify-center gap-2 active:scale-95 transition-all shadow-xl shadow-white/5"
            >
               Recharge Wallet
            </button>
            <button className="flex-1 bg-white/10 text-white border border-white/5 py-4 rounded-2xl text-[11px] font-black uppercase tracking-widest flex items-center justify-center gap-2 active:scale-95 transition-all backdrop-blur-md">
               Withdrawal
            </button>
         </div>
      </div>

      <div className="p-6">
         <h2 className="text-[11px] font-black text-slate-400 uppercase tracking-[0.25em] mb-6 pl-1 border-l-4 border-slate-900 h-4 flex items-center">Recent Transactions</h2>
         
         <div className="space-y-3">
            {vendor?.transactions?.length > 0 ? (
               vendor.transactions.map((tx, i) => (
                  <div key={tx.id || i} className="bg-white p-5 rounded-[2rem] border border-black/5 flex items-center justify-between shadow-xl shadow-black/[0.01]">
                     <div className="flex items-center gap-4">
                        <div className={`h-11 w-11 flex items-center justify-center rounded-2xl ${tx.isDeduct ? 'bg-slate-50 text-slate-400' : 'bg-slate-100 text-slate-900'}`}>
                           {tx.isDeduct ? <ArrowUpRight size={18} /> : <ArrowDownRight size={18} />}
                        </div>
                        <div>
                           <h4 className="text-[11px] font-black uppercase tracking-[0.1em] text-slate-900 leading-none mb-1.5">{tx.type}</h4>
                           <span className="text-[9px] font-bold text-neutral-400 tracking-tight">{tx.date} • {tx.id}</span>
                        </div>
                     </div>
                     <span className={`text-[13px] font-black tracking-tight ${tx.isDeduct ? 'text-slate-400' : 'text-slate-900'}`}>
                        {tx.sign}₹{tx.amount}
                     </span>
                  </div>
               ))
            ) : (
               <div className="text-center py-20 border-2 border-dashed border-neutral-100 rounded-[2rem]">
                  <p className="text-[10px] font-black uppercase text-neutral-300 tracking-widest">No recent transactions</p>
               </div>
            )}
         </div>
      </div>
    </div>
  );
};

export default VendorEarnings;
