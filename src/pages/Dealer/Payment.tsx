import React from 'react';
import RoleBasedLayout from '../../layout/RoleBasedLayout';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import NotFound from '../404/NotFound';

const Payment: React.FC = () => {
  return (
    <>
      <RoleBasedLayout role="dealer">
        <div className="mx-auto max-w-242.5">
          <Breadcrumb pageName="Payment" role="dealer" />
          <NotFound />
        </div>
      </RoleBasedLayout>
    </>
  );
};

export default Payment;
