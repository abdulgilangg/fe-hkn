import React from 'react';
import RoleBasedLayout from '../../../layout/RoleBasedLayout';

const Payment: React.FC = () => {
  return (
    <>
      <RoleBasedLayout role="dealer">
        <h1>Payment</h1>
      </RoleBasedLayout>
    </>
  );
};

export default Payment;
