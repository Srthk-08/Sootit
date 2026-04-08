import { motion } from "framer-motion";
import { ArrowLeft, Clock, DollarSign, Wallet, ArrowUpRight, ArrowDownLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const UserHistory = () => {
    const navigate = useNavigate();
    const transactions = [
        { id: "TX-9021", type: "Add Money", amount: "+ ₹500.00", date: "Today, 11:20 AM", status: "Success", icon: ArrowUpRight, clr: "bg-green-100 text-green-600" },
        { id: "TX-8812", type: "Expert Booking", amount: "- ₹150.00", date: "Yesterday, 04:45 PM", status: "Success", icon: ArrowDownLeft, clr: "bg-blue-100 text-blue-600" },
        { id: "TX-7734", type: "Refund", amount: "+ ₹200.00", date: "03 Apr, 2024", status: "Success", icon: ArrowUpRight, clr: "bg-orange-100 text-orange-600" },
    ];

    return (
        <div className="bg-[#FAFBFD] min-h-screen pb-24 font-inter">
            {/* Header */}
            <div className="px-5 pt-10 pb-5 flex items-center gap-3 border-b border-black/[0.03] sticky top-0 bg-[#FAFBFD]/80 backdrop-blur-md z-50">
                <button onClick={() => navigate(-1)} className="h-9 w-9 bg-white border border-black/5 rounded-xl flex items-center justify-center active:scale-90 transition-transform shadow-sm">
                    <ArrowLeft size={16} strokeWidth={3} />
                </button>
                <h1 className="text-lg font-black tracking-tighter italic">Wallet History</h1>
            </div>

            <div className="p-4 space-y-3">
                {transactions.map((tx, idx) => (
                    <motion.div
                        key={idx}
                        whileTap={{ scale: 0.98 }}
                        className="flex items-center justify-between p-4 bg-white border border-black/5 rounded-[1.5rem] shadow-xl shadow-black/[0.01] active:border-blue-600/20 transition-all"
                    >
                        <div className="flex items-center gap-3">
                            <div className={`h-10 w-10 ${tx.clr} rounded-xl flex items-center justify-center shadow-sm`}>
                                <tx.icon size={18} strokeWidth={2.5} />
                            </div>
                            <div className="flex flex-col">
                                <h4 className="text-[11px] font-black text-neutral-900 leading-none mb-1.5">{tx.type}</h4>
                                <span className="text-[8px] font-bold text-neutral-400 uppercase tracking-widest">{tx.date}</span>
                            </div>
                        </div>
                        <div className="text-right">
                            <h4 className={`text-[12px] font-black italic mb-1 ${tx.amount.startsWith('+') ? 'text-green-600' : 'text-neutral-900'}`}>{tx.amount}</h4>
                            <span className="text-[7px] font-black uppercase text-neutral-300 tracking-tighter">TXID: {tx.id}</span>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default UserHistory;
