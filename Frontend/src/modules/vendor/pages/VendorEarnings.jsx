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
    <div className="bg-neutral-50 min-h-screen pb-24">
      <div className="bg-blue-700 pt-8 pb-10 px-4 rounded-b-[2.5rem] shadow-xl text-white outline-none">
         <div className="flex justify-between items-start mb-6">
            <div>
               <span className="text-[10px] font-black uppercase tracking-widest text-white/50 mb-1 block">Available Wallet Balance</span>
               <h1 className="text-4xl font-black tracking-tighter">₹{vendor.wallet.toFixed(2)}</h1>
            </div>
            <button className="h-10 w-10 bg-white/10 rounded-xl flex items-center justify-center border border-white/20 active:scale-90 transition-transform">
               <RefreshCw size={18} />
            </button>
         </div>
         
         <div className="flex gap-3">
            <button 
              onClick={handleRecharge}
              className="flex-1 bg-white text-blue-800 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest flex items-center justify-center gap-2 active:scale-95 transition-transform shadow-lg"
            >
               Recharge Wallet (₹50)
            </button>
            <button className="flex-1 bg-blue-800/30 border py-3 rounded-xl border-blue-400/30 text-[10px] font-black uppercase tracking-widest flex items-center justify-center gap-2 active:scale-95 transition-transform">
               Withdraw
            </button>
         </div>
      </div>

      <div className="p-4">
         <h2 className="text-xs font-black text-neutral-900 uppercase tracking-widest mb-4 pl-2 border-l-4 border-blue-600 mt-2">Recent Transactions</h2>
         
         <div className="space-y-3">
            {vendor?.transactions?.length > 0 ? (
               vendor.transactions.map((tx, i) => (
                  <div key={tx.id || i} className="bg-white p-4 rounded-2xl border border-neutral-100 flex items-center justify-between shadow-sm">
                     <div className="flex items-center gap-3">
                        <div className={`h-10 w-10 flex items-center justify-center rounded-xl ${tx.isDeduct ? 'bg-red-50 text-red-600' : 'bg-green-50 text-green-600'}`}>
                           {tx.isDeduct ? <ArrowUpRight size={18} /> : <ArrowDownRight size={18} />}
                        </div>
                        <div>
                           <h4 className="text-[11px] font-black uppercase tracking-tight text-neutral-800">{tx.type}</h4>
                           <span className="text-[9px] font-bold text-neutral-400">{tx.date} • {tx.id}</span>
                        </div>
                     </div>
                     <span className={`text-sm font-black ${tx.isDeduct ? 'text-red-600' : 'text-green-600'}`}>
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
