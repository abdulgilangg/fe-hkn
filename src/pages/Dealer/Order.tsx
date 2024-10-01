import React from 'react';
import RoleBasedLayout from '../../layout/RoleBasedLayout';
import OrderDealer from '../../components/DealerComponents/OrderV1';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';

const Order: React.FC = () => {
  return (
    <>
      <RoleBasedLayout role="dealer">
        <div className="mx-auto max-w-242.5">
          <Breadcrumb pageName="Order" role="dealer" />
          {/* Order History*/}
          <OrderDealer />
          {/* End Order History */}
        </div>
      </RoleBasedLayout>
    </>
  );
};

export default Order;
