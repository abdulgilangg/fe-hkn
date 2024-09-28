import React from 'react';
import RoleBasedLayout from '../../../layout/RoleBasedLayout';
import Breadcrumb from '../../../components/Breadcrumbs/Breadcrumb';

const Databarang: React.FC = () => {
  return (
    <>
      <RoleBasedLayout role="admin">
        <div className="mx-auto max-w-242.5">
          <Breadcrumb pageName="Data Barang" role="admin" />
        </div>
      </RoleBasedLayout>
    </>
  );
};

export default Databarang;
