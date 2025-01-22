import React from 'react';
import RoleBasedLayout from '../../layout/RoleBasedLayout';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import StatusOrder from '../../components/DealerComponents/StatusOrder';
import Orders from '../../components/DealerComponents/Order';

const Order: React.FC = () => {
  return (
    <>
      <RoleBasedLayout role="dealer">
        <div className="mx-auto max-w-242.5">
          <Breadcrumb pageName="Order" role="dealer" />
          <StatusOrder />
          <Orders />
        </div>
      </RoleBasedLayout>
    </>
  );
};

export default Order;
