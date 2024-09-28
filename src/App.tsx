import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

// Loader
import Loader from './common/Loader';
// Main
import Main from './pages/Main/page';
// Page Title
import PageTitle from './components/PageTitle';

// Authentication
import SignIn from './pages/Authentication/SignIn';
import SignUp from './pages/Authentication/SignUp';
import Verify from './pages/Authentication/Verify';
import ForgotPassword from './pages/Authentication/ForgotPassword';
import NewPassword from './pages/Authentication/NewPassword';

// Page Admin
import Pengumuman from './pages/Admin/Pengumuman';
import Dashboard from './pages/Admin/Dashboard';
import Profile from './pages/Admin/Profile';
import HistoriTransaksi from './pages/Admin/HistoriTransaksi';
import Pesanan from './pages/Admin/Pesanan';

// Page Dealer
import Home from './pages/Dealer/Home/Home';
import Order from './pages/Dealer/Order/Order';
import Payment from './pages/Dealer/Payment/Payment';
import Settings from './pages/Admin/Settings';

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <Routes>
      {/* Route Main */}
      <Route
        index
        element={
          <>
            <PageTitle title="Welcome!" />
            <Main />
          </>
        }
      />
      {/* End Route Main */}

      {/* Route Authentication */}
      <Route
        path="/auth/signin"
        element={
          <>
            <PageTitle title="HKN | Signin" />
            <SignIn />
          </>
        }
      />
      <Route
        path="/auth/signup"
        element={
          <>
            <PageTitle title="HKN | Signup" />
            <SignUp />
          </>
        }
      />
      <Route
        path="/auth/verify"
        element={
          <>
            <PageTitle title="HKN | Verify" />
            <Verify />
          </>
        }
      />
      <Route
        path="/auth/forgot-password"
        element={
          <>
            <PageTitle title="HKN | Forgot Password" />
            <ForgotPassword />
          </>
        }
      />
      <Route
        path="/auth/new-password"
        element={
          <>
            <PageTitle title="HKN | New Password" />
            <NewPassword />
          </>
        }
      />
      {/* End Route Authentication */}

      {/* Route Admin */}
      <Route
        path="/admin/home"
        element={
          <>
            <PageTitle title="HKN | Home" />
            <Dashboard />
          </>
        }
      />
      <Route
        path="/admin/histori-transaksi"
        element={
          <>
            <PageTitle title="HKN | Histori Transaksi" />
            <HistoriTransaksi />
          </>
        }
      />
      <Route
        path="/admin/pesanan"
        element={
          <>
            <PageTitle title="HKN | Pesanan" />
            <Pesanan />
          </>
        }
      />
      <Route
        path="/admin/pengumuman"
        element={
          <>
            <PageTitle title="HKN | Pengumuman" />
            <Pengumuman />
          </>
        }
      />
      <Route
        path="/admin/profile"
        element={
          <>
            <PageTitle title="HKN | Profile " />
            <Profile />
          </>
        }
      />
      <Route
        path="/admin/settings"
        element={
          <>
            <PageTitle title="HKN | Settings" />
            <Settings />
          </>
        }
      />
      {/* End Route Admin */}

      {/* Route Dealer */}
      <Route
        path="/dealer/home"
        element={
          <>
            <PageTitle title="HKN | Home" />
            <Home />
          </>
        }
      />
      <Route
        path="/dealer/order"
        element={
          <>
            <PageTitle title="HKN | Order" />
            <Order />
          </>
        }
      />
      <Route
        path="/dealer/payment"
        element={
          <>
            <PageTitle title="HKN | Payment" />
            <Payment />
          </>
        }
      />
      <Route
        path="/dealer/settings"
        element={
          <>
            <PageTitle title="HKN | Settings" />
            <Settings />
          </>
        }
      />
      {/* End Route Dealer */}
    </Routes>
  );
}

export default App;
