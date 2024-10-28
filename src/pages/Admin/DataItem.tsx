import React from 'react';
import RoleBasedLayout from '../../layout/RoleBasedLayout';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import MenuBarang from '../../components/AdminComponents/MenuBarang';

const DataItem: React.FC = () => {
  return (
    <>
      <RoleBasedLayout role="admin">
        <div className="mx-auto max-w-242.5">
          <Breadcrumb pageName="Data Item" role="admin" />
          <MenuBarang />
        </div>
      </RoleBasedLayout>
    </>
  );
};

export default DataItem;
