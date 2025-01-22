import { useState, useEffect } from 'react';
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
import HomeAdmin from './pages/Admin/Home';
import HistoryOrder from './pages/Admin/HistoryOrder';
import DealerOrder from './pages/Admin/DealerOrder';
import Announcement from './pages/Admin/Announcement';
import DataItem from './pages/Admin/DataItem';
import AddItem from './pages/Admin/AddItem';
import Discount from './pages/Admin/Discount';
import AddUser from './pages/Admin/AddUser';
import DataUser from './pages/Admin/DataUser';
import UserApproval from './pages/Admin/UserApproval';

import NotificationDetail from './components/AdminComponents/DetailNotification';
import DropdownNotification from './components/Header/DropdownNotification';

// Page Dealer
import HomeDealer from './pages/Dealer/Home';
import Order from './pages/Dealer/Order';
import Cart from './pages/Dealer/Cart';
import Payment from './pages/Dealer/Payment';
import Settings from './pages/Dealer/Settings';
import Profile from './pages/Dealer/Profile';

// Invoice
import Invoice from './components/DealerComponents/Invoice';

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
            <HomeAdmin />
          </>
        }
      />
      <Route
        path="/admin/history-order"
        element={
          <>
            <PageTitle title="HKN | Histori History Order" />
            <HistoryOrder />
          </>
        }
      />
      <Route
        path="/admin/dealer-order"
        element={
          <>
            <PageTitle title="HKN | Dealer Order" />
            <DealerOrder />
          </>
        }
      />
      <Route
        path="/admin/announcement"
        element={
          <>
            <PageTitle title="HKN | Announcement" />
            <Announcement />
          </>
        }
      />
      <Route
        path="/admin/data-item"
        element={
          <>
            <PageTitle title="HKN | Data Item" />
            <DataItem />
          </>
        }
      />
      <Route
        path="/admin/add-item"
        element={
          <>
            <PageTitle title="HKN | Add Item" />
            <AddItem />
          </>
        }
      />
      <Route
        path="/admin/discount"
        element={
          <>
            <PageTitle title="HKN | Discount" />
            <Discount />
          </>
        }
      />
      <Route
        path="/admin/add-user"
        element={
          <>
            <PageTitle title="HKN | Add User" />
            <AddUser />
          </>
        }
      />
      <Route
        path="/admin/data-user"
        element={
          <>
            <PageTitle title="HKN | Data User" />
            <DataUser />
          </>
        }
      />
      <Route
        path="/admin/user-approval"
        element={
          <>
            <PageTitle title="HKN | User Approval" />
            <UserApproval />
          </>
        }
      />
      <Route
        path="/admin/settings"
        element={
          <>
            <PageTitle title="HKN | Settings" />
          </>
        }
      />
      <Route
        path="/admin/notification/:id"
        element={
          <>
            <PageTitle title="HKN | Notification" />
            <NotificationDetail />
          </>
        }
      />
      <Route
        path="/admin/home"
        element={
          <>
            <PageTitle title="HKN | Notification" />
            <DropdownNotification />
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
            <Order />
          </>
        }
      />
      <Route
        path="/dealer/cart"
        element={
          <>
            <PageTitle title="HKN | Cart" />
            <Cart />
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

      <Route
        path="/dealer/invoice"
        element={
          <>
            <PageTitle title="HKN | Invoice" />
            <Invoice />
          </>
        }
      />
    </Routes>
  );
}
export default App;
