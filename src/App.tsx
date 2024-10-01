import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

// Loader
import Loader from './common/Loader';
// Home
import Homepage from './pages/Homepage';
// Page Title
import PageTitle from './components/Utilities/PageTitle';

// Authentication
import SignUp from './pages/Authentication/SignUp';
import Verify from './pages/Authentication/Verify';
import SignIn from './pages/Authentication/SignIn';
import ForgotPassword from './pages/Authentication/ForgotPassword';
import NewPassword from './pages/Authentication/NewPassword';

// Page Admin
import Profile from './pages/Admin/Profile';

// Page Dealer
import HomeDealer from './pages/Dealer/Home';
import Settings from './pages/Dealer/Settings';

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
            <Homepage />
          </>
        }
      />
      {/* End Route Main */}

      {/* Route Authentication */}
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
        path="/auth/signin"
        element={
          <>
            <PageTitle title="HKN | Signin" />
            <SignIn />
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
            {/* <HomeAdmin /> */}
          </>
        }
      />
      <Route
        path="/admin/histori-transaksi"
        element={
          <>
            <PageTitle title="HKN | Histori Transaksi" />
          </>
        }
      />
      <Route
        path="/admin/pesanan"
        element={
          <>
            <PageTitle title="HKN | Pesanan" />
          </>
        }
      />
      <Route
        path="/admin/pengumuman"
        element={
          <>
            <PageTitle title="HKN | Pengumuman" />
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
            <HomeDealer />
          </>
        }
      />
      <Route
        path="/dealer/order"
        element={
          <>
            <PageTitle title="HKN | Order" />
            {/* <Order /> */}
          </>
        }
      />
      <Route
        path="/dealer/payment"
        element={
          <>
            <PageTitle title="HKN | Payment" />
            {/* <Payment /> */}
          </>
        }
      />
      <Route
        path="/dealer/profile"
        element={
          <>
            <PageTitle title="HKN | Profile" />
            <Profile />
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
