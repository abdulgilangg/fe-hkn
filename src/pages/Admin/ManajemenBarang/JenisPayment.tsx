import React from 'react';
import RoleBasedLayout from '../../../layout/RoleBasedLayout';
import Breadcrumb from '../../../components/Breadcrumbs/Breadcrumb';

const JenisPayment: React.FC = () => {
  return (
    <>
      <RoleBasedLayout role="admin">
        <div className="mx-auto max-w-242.5">
          <Breadcrumb pageName="Jenis Payment" role="admin" />
        </div>
      </RoleBasedLayout>
    </>
  );
};

export default JenisPayment;
