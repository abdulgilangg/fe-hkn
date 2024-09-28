import React from 'react';
import RoleBasedLayout from '../../../layout/RoleBasedLayout';
import Breadcrumb from '../../../components/Breadcrumbs/Breadcrumb';

const TambahKategori: React.FC = () => {
  return (
    <>
      <RoleBasedLayout role="admin">
        <div className="mx-auto max-w-242.5">
          <Breadcrumb pageName="Taambah Kategori" role="admin" />
          <p>Page tambah kategori</p>
        </div>
      </RoleBasedLayout>
    </>
  );
};

export default TambahKategori;
