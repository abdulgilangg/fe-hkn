import React from 'react';
import RoleBasedLayout from '../../layout/RoleBasedLayout';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';

const HistoriTransaksi: React.FC = () => {
  return (
    <>
      <RoleBasedLayout role="admin">
        <div className="mx-auto max-w-242.5">
          <Breadcrumb pageName="Histori Transaksi" role="admin" />
        </div>
      </RoleBasedLayout>
    </>
  );
};

export default HistoriTransaksi;
