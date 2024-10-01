import React from 'react';
import RoleBasedLayout from '../../layout/RoleBasedLayout';
import Notification from '../../components/Notification/Notification';
import OrderHistory from '../../components/AdminComponents/OrderHistory';

const Home: React.FC = () => {
  return (
    <>
      <RoleBasedLayout role="dealer">
        <div className="mx-auto max-w-242.5">
          {/* Notification */}
          <Notification />
          {/* End Notification */}

          {/* Order History*/}
          <OrderHistory />
          {/* End Order History */}
        </div>
      </RoleBasedLayout>
    </>
  );
};

export default Home;
