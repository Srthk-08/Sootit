import { useState, useEffect, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Lenis from 'lenis';

// Shared Components
import Loader from './shared/components/Loader';
import AppHeader from './shared/components/Header'; // Fixed name
import UserBottomNav from './shared/components/BottomNav'; // Renamed

// Modular Pages (Lazy Loaded for performance)
const UserHome = lazy(() => import('./modules/user/pages/UserHome'));
const UserLogin = lazy(() => import('./modules/user/pages/UserLogin'));
const UserRegister = lazy(() => import('./modules/user/pages/UserRegister'));
const AuthLanding = lazy(() => import('./modules/auth/pages/AuthLanding'));
const UserProfile = lazy(() => import('./modules/user/pages/UserProfile'));
const UserFind = lazy(() => import('./modules/user/pages/UserFind'));
const UserSearch = lazy(() => import('./modules/user/pages/UserSearch'));
const UserOrders = lazy(() => import('./modules/user/pages/UserOrders'));
const UserOrderDetail = lazy(() => import('./modules/user/pages/UserOrderDetail'));
const UserSupport = lazy(() => import('./modules/user/pages/UserSupport'));
const UserReviews = lazy(() => import('./modules/user/pages/UserReviews'));
const UserPreferences = lazy(() => import('./modules/user/pages/UserPreferences'));
const UserHistory = lazy(() => import('./modules/user/pages/UserHistory'));
const UserBookingSuccess = lazy(() => import('./modules/user/pages/UserBookingSuccess'));
const CategoryDetails = lazy(() => import('./modules/user/pages/CategoryDetails'));
const VendorHome = lazy(() => import('./modules/vendor/pages/VendorHome'));
const VendorLogin = lazy(() => import('./modules/vendor/pages/VendorLogin'));
const VendorRegister = lazy(() => import('./modules/vendor/pages/VendorRegister'));
const VendorJobs = lazy(() => import('./modules/vendor/pages/VendorJobs'));
const VendorEarnings = lazy(() => import('./modules/vendor/pages/VendorEarnings'));
const VendorSettings = lazy(() => import('./modules/vendor/pages/VendorSettings'));
const VendorProfile = lazy(() => import('./modules/vendor/pages/VendorProfile'));
const VendorKYC = lazy(() => import('./modules/vendor/pages/VendorKYC'));
const VendorRoles = lazy(() => import('./modules/vendor/pages/VendorRoles'));
const AdminDashboard = lazy(() => import('./modules/admin/pages/AdminDashboard'));

// Page Transition Component
const ModuleWrapper = ({ children, type }) => (
  <motion.div
    initial={{ opacity: 0, x: type === 'vendor' ? 50 : -50 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: 50 }}
    transition={{ duration: 0.4, ease: "easeOut" }}
    className="flex-1 min-h-screen" 
  >
    {children}
  </motion.div>
);

const AppRoutes = () => {
  const location = useLocation();

  return (
    <Suspense fallback={<div className="h-screen w-full flex items-center justify-center bg-white">
      <div className="h-8 w-8 border-4 border-slate-900 border-t-transparent rounded-full animate-spin" />
    </div>}>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          {/* Main Auth Gateway */}
          <Route path="/" element={<AuthLanding />} />

          {/* User App Module */}
          <Route path="/user" element={<ModuleWrapper type="user"><UserHome /></ModuleWrapper>} />
          <Route path="/user/login" element={<ModuleWrapper type="user"><UserLogin /></ModuleWrapper>} />
          <Route path="/user/register" element={<ModuleWrapper type="user"><UserRegister /></ModuleWrapper>} />
          <Route path="/user/profile" element={<ModuleWrapper type="user"><UserProfile /></ModuleWrapper>} />
          <Route path="/user/find" element={<ModuleWrapper type="user"><UserFind /></ModuleWrapper>} />
          <Route path="/user/search" element={<ModuleWrapper type="user"><UserSearch /></ModuleWrapper>} />
          <Route path="/user/orders" element={<ModuleWrapper type="user"><UserOrders /></ModuleWrapper>} />
          <Route path="/user/order/:id" element={<ModuleWrapper type="user"><UserOrderDetail /></ModuleWrapper>} />
          <Route path="/user/support" element={<ModuleWrapper type="user"><UserSupport /></ModuleWrapper>} />
          <Route path="/user/reviews" element={<ModuleWrapper type="user"><UserReviews /></ModuleWrapper>} />
          <Route path="/user/preferences" element={<ModuleWrapper type="user"><UserPreferences /></ModuleWrapper>} />
          <Route path="/user/history" element={<ModuleWrapper type="user"><UserHistory /></ModuleWrapper>} />
          <Route path="/user/category/:category" element={<ModuleWrapper type="user"><CategoryDetails /></ModuleWrapper>} />
          <Route path="/user/booking-success" element={<ModuleWrapper type="user"><UserBookingSuccess /></ModuleWrapper>} />
          
          {/* Vendor App Module (Drivers, Mechanics, RTO, Legal, Towing) */}
          <Route path="/vendor" element={<ModuleWrapper type="vendor"><VendorHome /></ModuleWrapper>} />
          <Route path="/vendor/login" element={<ModuleWrapper type="vendor"><VendorLogin /></ModuleWrapper>} />
          <Route path="/vendor/register" element={<ModuleWrapper type="vendor"><VendorRegister /></ModuleWrapper>} />
          <Route path="/vendor/jobs" element={<ModuleWrapper type="vendor"><VendorJobs /></ModuleWrapper>} />
          <Route path="/vendor/earnings" element={<ModuleWrapper type="vendor"><VendorEarnings /></ModuleWrapper>} />
          <Route path="/vendor/settings" element={<ModuleWrapper type="vendor"><VendorSettings /></ModuleWrapper>} />
          <Route path="/vendor/profile" element={<ModuleWrapper type="vendor"><VendorProfile /></ModuleWrapper>} />
          <Route path="/vendor/kyc" element={<ModuleWrapper type="vendor"><VendorKYC /></ModuleWrapper>} />
          <Route path="/vendor/roles" element={<ModuleWrapper type="vendor"><VendorRoles /></ModuleWrapper>} />
          
          {/* Admin App Module */}
          <Route path="/admin" element={<ModuleWrapper type="admin"><AdminDashboard /></ModuleWrapper>} />
          
          {/* Fallback */}
          <Route path="*" element={<Navigate to="/user" replace />} />
        </Routes>
      </AnimatePresence>
    </Suspense>
  );
};

const AppContent = () => {
  const location = useLocation();
  const authPaths = ['/', '/user/login', '/user/register', '/vendor/login', '/vendor/register'];
  const isAuthPage = authPaths.includes(location.pathname);

  return (
    <div className={`app-shell border-x border-black/5 ring-1 ring-black/[0.02] ${!isAuthPage ? 'pb-20' : ''}`}>
      {!isAuthPage && <AppHeader />}
      <AppRoutes />
      {!isAuthPage && <UserBottomNav />}
    </div>
  );
};

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Lenis instantiation
    const lenis = new Lenis({
      duration: 1,
      smoothWheel: true,
      smoothTouch: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => {
      clearTimeout(timer);
      lenis.destroy();
    };
  }, []);

  return (
    <Router>
      <div className="relative min-h-screen bg-slate-200/50 font-sans selection:bg-slate-900/30 selection:text-slate-900 antialiased">
        <AnimatePresence>
          {isLoading && <Loader key="loader" />}
        </AnimatePresence>

        {!isLoading && <AppContent />}
      </div>
    </Router>
  );
}

export default App;
