import React from 'react';
import RoleBasedLayout from '../../layout/RoleBasedLayout';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';

const TaambahDataBarang: React.FC = () => {
  return (
    <>
      <RoleBasedLayout role="admin">
        <div className="mx-auto max-w-242.5">
          <Breadcrumb pageName="Taambah Data Barang" role="admin" />
        </div>
      </RoleBasedLayout>
    </>
  );
};

export default TaambahDataBarang;
