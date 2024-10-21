import React from 'react';
import RoleBasedLayout from '../../layout/RoleBasedLayout';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import OrderHistory from '../../components/AdminComponents/OrderHistory';
import AnnouncementSlider from '../../components/Announcement/Announcement';

const Home: React.FC = () => {
  return (
    <>
      <RoleBasedLayout role="admin">
        <div className="mx-auto max-w-242.5">
          <Breadcrumb pageName="Home" role="admin" />
          <AnnouncementSlider />
          <OrderHistory />
        </div>
      </RoleBasedLayout>
    </>
  );
};

export default Home;
