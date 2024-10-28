import React from 'react';
import RoleBasedLayout from '../../layout/RoleBasedLayout';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import AnnouncementSlider from '../../components/Announcement/Announcement';
import OrderHistory from '../../components/AdminComponents/OrderHistory';

const HistoryOrder: React.FC = () => {
  return (
    <>
      <RoleBasedLayout role="admin">
        <div className="mx-auto max-w-242.5">
          <Breadcrumb pageName="History Order" role="admin" />
          <AnnouncementSlider />
          <OrderHistory />
        </div>
      </RoleBasedLayout>
    </>
  );
};

export default HistoryOrder;
