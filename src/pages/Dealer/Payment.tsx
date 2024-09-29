import React from 'react';
import RoleBasedLayout from '../../layout/RoleBasedLayout';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import DataBarang from '../../components/AdminComponents/MenuBarang';

const Payment: React.FC = () => {
  return (
    <>
      <RoleBasedLayout role="dealer">
        <div className="mx-auto max-w-242.5">
          <Breadcrumb pageName="Payment" role="dealer" />
          <DataBarang />
        </div>
      </RoleBasedLayout>
    </>
  );
};

export default Payment;
