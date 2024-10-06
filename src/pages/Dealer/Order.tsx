import React from 'react';
import RoleBasedLayout from '../../layout/RoleBasedLayout';
import OrderDealer from '../../components/DealerComponents/Order';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import OrderDetails from '../../components/DealerComponents/OrderDetails';

const Order: React.FC = () => {
  return (
    <>
      <RoleBasedLayout role="dealer">
        <div className="mx-auto max-w-242.5">
          <Breadcrumb pageName="Order" role="dealer" />
          <OrderDetails />
          {/* Order History*/}
          <OrderDealer />
          {/* End Order History */}
        </div>
      </RoleBasedLayout>
    </>
  );
};

export default Order;
