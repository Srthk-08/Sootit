import { Navigation, Wrench, Truck, FileText, Briefcase } from "lucide-react";

export const VENDOR_TYPES = {
  driver: {
    label: "Driver",
    icon: Navigation,
    color: "text-slate-900",
    bg: "bg-slate-50",
    serviceTitle: "Professional Pilot",
    leadsRange: "5km radius",
    featuredJobs: [
      { id: "J-DR-01", name: "Rahul Singh", task: "Outstation Trip to Jaipur", distance: "2.1 km", time: "Just now", fee: 10 },
      { id: "J-DR-02", name: "Priya D.", task: "Airport Drop (One Way)", distance: "1.5 km", time: "5m ago", fee: 5 },
      { id: "J-DR-03", name: "Amit K.", task: "Local Multi-stop Trip", distance: "0.8 km", time: "12m ago", fee: 5 }
    ],
    directRequests: [
      { id: "REQ-DR-01", name: "Suresh Kumar", location: "Vasant Kunj", service: "Monthly Driver Need", time: "2 mins ago" }
    ],
    kycDocs: [
      { title: "Aadhaar Card", status: "Verified" },
      { title: "PAN Card", status: "Verified" },
      { title: "Driving License", status: "Pending" },
      { title: "Police Verification", status: "Not Uploaded" }
    ]
  },
  mechanic: {
    label: "Mechanic",
    icon: Wrench,
    color: "text-slate-700",
    bg: "bg-slate-100",
    serviceTitle: "Expert Tech Unit",
    leadsRange: "10km radius",
    featuredJobs: [
      { id: "J-MC-01", name: "Sunil Verma", task: "Engine Oil Change", distance: "3.2 km", time: "Just now", fee: 5 },
      { id: "J-MC-02", name: "Anjali M.", task: "Brake Pad Replacement", distance: "4.1 km", time: "8m ago", fee: 8 },
      { id: "J-MC-03", name: "Kunal P.", task: "Full Car Service", distance: "1.2 km", time: "20m ago", fee: 15 }
    ],
    directRequests: [
      { id: "REQ-MC-01", name: "Deepak S.", location: "Saket", service: "Engine Checkup", time: "5 mins ago" }
    ],
    kycDocs: [
      { title: "Aadhaar Card", status: "Verified" },
      { title: "Business PAN", status: "Verified" },
      { title: "Garage Registration", status: "Not Uploaded" },
      { title: "Trade License", status: "Not Uploaded" }
    ]
  },
  towing: {
    label: "Towing",
    icon: Truck,
    color: "text-slate-900",
    bg: "bg-neutral-100",
    serviceTitle: "Towing & Recovery",
    leadsRange: "25km radius",
    featuredJobs: [
      { id: "J-TW-01", name: "Vikram R.", task: "Accident Recovery (Flatbed)", distance: "5.5 km", time: "1m ago", fee: 20 },
      { id: "J-TW-02", name: "Neha S.", task: "Breakdown Towing", distance: "2.8 km", time: "10m ago", fee: 10 },
      { id: "J-TW-03", name: "Rohit L.", task: "Long Distance Towing", distance: "12 km", time: "45m ago", fee: 50 }
    ],
    directRequests: [
      { id: "REQ-TW-01", name: "Manish G.", location: "Gurgaon", service: "Roadside Recovery", time: "Just now" }
    ],
    kycDocs: [
      { title: "Aadhaar Card", status: "Verified" },
      { title: "Vehicle Registration", status: "Verified" },
      { title: "Pollution Certificate", status: "Pending" },
      { title: "Insurance Policy", status: "Not Uploaded" }
    ]
  },
  rto: {
    label: "RTO Agent",
    icon: FileText,
    color: "text-slate-700",
    bg: "bg-slate-50",
    serviceTitle: "Compliance Hub",
    leadsRange: "Zone-wide",
    featuredJobs: [
      { id: "J-RTO-01", name: "Sanjay D.", task: "Driving License Renewal", distance: "Online", time: "3m ago", fee: 5 },
      { id: "J-RTO-02", name: "Meera J.", task: "Vehicle Transfer (HP)", distance: "Online", time: "15m ago", fee: 10 },
      { id: "J-RTO-03", name: "Karan T.", task: "New Vehicle Registration", distance: "Online", time: "1h ago", fee: 15 }
    ],
    directRequests: [
      { id: "REQ-RTO-01", name: "Ajay B.", location: "Delhi RTO", service: "Passing Certificate", time: "10 mins ago" }
    ],
    kycDocs: [
      { title: "Aadhaar Card", status: "Verified" },
      { title: "Agent ID Code", status: "Verified" },
      { title: "RTO Authorization", status: "Not Uploaded" },
      { title: "Office Address Proof", status: "Not Uploaded" }
    ]
  },
  legal: {
    label: "Legal Advisor",
    icon: Briefcase,
    color: "text-slate-900",
    bg: "bg-slate-100",
    serviceTitle: "Legal Ops",
    leadsRange: "City-wide",
    featuredJobs: [
      { id: "J-LG-01", name: "Aditya P.", task: "Accident Claim Advice", distance: "Remote", time: "5m ago", fee: 10 },
      { id: "J-LG-02", name: "Sarah K.", task: "Insurance Settlement", distance: "Remote", time: "25m ago", fee: 20 },
      { id: "J-LG-03", name: "Varun M.", task: "Challan Dispute", distance: "Remote", time: "2h ago", fee: 5 }
    ],
    directRequests: [
      { id: "REQ-LG-01", name: "Ishaan W.", location: "High Court", service: "Legal Consultation", time: "30 mins ago" }
    ],
    kycDocs: [
      { title: "Aadhaar Card", status: "Verified" },
      { title: "Bar Council ID", status: "Verified" },
      { title: "Practice Certificate", status: "Not Uploaded" },
      { title: "Chamber Address", status: "Not Uploaded" }
    ]
  }
};

export const getVendorConfig = (role) => {
  return VENDOR_TYPES[role?.toLowerCase()] || VENDOR_TYPES.driver; // Default to driver if not found
};
