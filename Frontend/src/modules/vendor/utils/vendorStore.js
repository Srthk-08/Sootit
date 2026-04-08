// A simple local-storage based state manager for Vendor Mock App
export const getVendorData = () => {
  const data = localStorage.getItem('vendor_data');
  if (data) return JSON.parse(data);
  return null;
};

export const setVendorData = (data) => {
  localStorage.setItem('vendor_data', JSON.stringify(data));
  // Dispatch a custom event so other components can listen to changes if needed
  window.dispatchEvent(new Event('vendor_data_updated'));
};

export const initVendorState = (profile) => {
  const initialState = {
    isLoggedIn: true,
    profile,
    wallet: 85.00, // starting balance as per production design
    jobsApplied: [],
    transactions: [
      { id: "TX-901", type: "Application Token Deduction", sign: "-", amount: "5.00", date: "Today, 10:30 AM", isDeduct: true },
      { id: "TX-900", type: "Wallet Recharged", sign: "+", amount: "100.00", date: "Yesterday, 04:00 PM", isDeduct: false },
      { id: "TX-891", type: "Refund: User Cancelled", sign: "+", amount: "5.00", date: "12 Oct, 11:20 AM", isDeduct: false },
    ]
  };
  setVendorData(initialState);
  return initialState;
};

export const logoutVendor = () => {
  localStorage.removeItem('vendor_data');
};

export const applyForJob = (jobId, fee = 5) => {
  const data = getVendorData();
  if (!data || data.wallet < fee) return false;

  data.wallet -= fee;
  data.jobsApplied.push(jobId);
  data.transactions.unshift({
    id: "TX-" + Math.floor(Math.random() * 1000),
    type: "Application Token Deduction",
    sign: "-",
    amount: fee.toFixed(2),
    date: new Date().toLocaleString(),
    isDeduct: true
  });

  setVendorData(data);
  return true;
};

export const rechargeWallet = (amount) => {
  const data = getVendorData();
  if (!data) return;

  data.wallet += amount;
  data.transactions.unshift({
    id: "TX-" + Math.floor(Math.random() * 1000),
    type: "Wallet Recharged",
    sign: "+",
    amount: amount.toFixed(2),
    date: new Date().toLocaleString(),
    isDeduct: false
  });

  setVendorData(data);
};
