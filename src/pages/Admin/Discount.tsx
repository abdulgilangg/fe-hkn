import React from 'react';
import RoleBasedLayout from '../../layout/RoleBasedLayout';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import Discounts from '../../components/AdminComponents/Discount';

const Discount: React.FC = () => {
  return (
    <>
      <RoleBasedLayout role="admin">
        <div className="mx-auto max-w-242.5">
          <Breadcrumb pageName="Discount" role="admin" />
          <Discounts />
        </div>
      </RoleBasedLayout>
    </>
  );
};

export default Discount;
