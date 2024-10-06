import React from 'react';
import RoleBasedLayout from '../../layout/RoleBasedLayout';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
// import Notification from '../../components/Notification/Notification';
import OrderHistory from '../../components/AdminComponents/OrderHistory';
import AnnouncementSlider from '../../components/Announcement/Announcement';

const Home: React.FC = () => {
  return (
    <>
      <RoleBasedLayout role="dealer">
        <div className="mx-auto max-w-242.5">
          <Breadcrumb pageName="Home" role="dealer" />
          {/* Notification */}
          {/* <Notification /> */}
          <AnnouncementSlider />
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
