import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2, AlertCircle, FileText, Upload, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const VendorKYC = () => {
  const documents = [
    { title: "Aadhaar Card", status: "Verified", icon: FileText, color: "text-green-600", bg: "bg-green-50" },
    { title: "PAN Card", status: "Verified", icon: FileText, color: "text-green-600", bg: "bg-green-50" },
    { title: "Driving License", status: "Pending", icon: FileText, color: "text-orange-600", bg: "bg-orange-50" },
    { title: "Garage Registration", status: "Not Uploaded", icon: FileText, color: "text-neutral-400", bg: "bg-neutral-100" },
  ];

  return (
    <div className="bg-neutral-50 min-h-screen pb-24 text-neutral-900">
      <div className="bg-white px-4 py-6 border-b border-neutral-100 flex items-center gap-4 sticky top-0 z-10">
        <Link to="/vendor/settings"><ArrowLeft size={24} /></Link>
        <h1 className="text-xl font-black italic">KYC Documents.</h1>
      </div>

      <div className="px-4 py-8">
        <div className="bg-blue-600 text-white rounded-[2rem] p-6 mb-8 shadow-xl shadow-blue-600/20">
           <div className="flex items-center gap-3 mb-4">
              <CheckCircle2 size={24} className="text-blue-200" />
              <h2 className="text-lg font-black tracking-tight">Trust Score: 85%</h2>
           </div>
           <p className="text-xs font-medium text-blue-100 mb-6">Complete your profile documents to unlock higher ticket jobs and instant withdrawals.</p>
           <div className="w-full bg-blue-800 h-2 rounded-full overflow-hidden">
              <div className="bg-white h-full w-[85%]"></div>
           </div>
        </div>

        <h3 className="text-[10px] font-black uppercase text-neutral-400 tracking-widest pl-1 mb-4">Required Documents</h3>
        <div className="space-y-4">
           {documents.map((doc, idx) => (
              <div key={idx} className="bg-white p-4 rounded-2xl border border-neutral-100 flex items-center justify-between shadow-sm active:scale-95 transition-transform">
                 <div className="flex items-center gap-4">
                    <div className={`h-12 w-12 rounded-xl flex items-center justify-center ${doc.bg} ${doc.color}`}>
                       <doc.icon size={22} />
                    </div>
                    <div>
                       <h4 className="text-sm font-black tracking-tight">{doc.title}</h4>
                       <span className={`text-[9px] font-black uppercase tracking-tight ${doc.status === 'Verified' ? 'text-green-500' : doc.status === 'Pending' ? 'text-orange-500' : 'text-neutral-400'}`}>
                          {doc.status}
                       </span>
                    </div>
                 </div>
                 {doc.status === 'Not Uploaded' ? (
                    <div className="h-8 w-8 bg-neutral-900 rounded-lg flex items-center justify-center text-white">
                       <Upload size={14} />
                    </div>
                 ) : (
                    <ChevronRight size={18} className="text-neutral-200" />
                 )}
              </div>
           ))}
        </div>

        <div className="mt-10 p-6 border-2 border-dashed border-neutral-200 rounded-[2.5rem] flex flex-col items-center text-center bg-white/50">
           <AlertCircle size={32} className="text-neutral-300 mb-3" />
           <h4 className="text-xs font-black uppercase tracking-widest text-neutral-400 mb-1">Safety First</h4>
           <p className="text-[10px] font-bold text-neutral-400">All documents are encrypted & secured with bank-grade AES-256 protocol.</p>
        </div>
      </div>
    </div>
  );
};

export default VendorKYC;
