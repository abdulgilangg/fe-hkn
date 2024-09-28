import React from 'react';
import RoleBasedLayout from '../../../layout/RoleBasedLayout';

const Order: React.FC = () => {
  return (
    <>
      <RoleBasedLayout role="dealer">
        <h1>Order</h1>
      </RoleBasedLayout>
    </>
  );
};

export default Order;
