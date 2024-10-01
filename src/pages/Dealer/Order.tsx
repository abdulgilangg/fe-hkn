import React from 'react';
import RoleBasedLayout from '../../layout/RoleBasedLayout';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import OrderDealer from '../../components/DealerComponents/OrderV2';

const Order: React.FC = () => {
  return (
    <>
      <RoleBasedLayout role="dealer">
        <div className="mx-auto max-w-242.5">
          <Breadcrumb pageName="Order" role="dealer" />

          {/* Notification */}
          <OrderDealer />
          {/* End Notification */}
        </div>
      </RoleBasedLayout>
    </>
  );
};

export default Order;
