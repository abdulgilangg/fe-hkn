import React from 'react';
import RoleBasedLayout from '../../../layout/RoleBasedLayout';
import Breadcrumb from '../../../components/Breadcrumbs/Breadcrumb';

const Diskon: React.FC = () => {
  return (
    <>
      <RoleBasedLayout role="admin">
        <div className="mx-auto max-w-242.5">
          <Breadcrumb pageName="Diskon" role="admin" />
        </div>
      </RoleBasedLayout>
    </>
  );
};

export default Diskon;
