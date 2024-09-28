import React from 'react';
import RoleBasedLayout from '../../layout/RoleBasedLayout';
import DataBarang from '../../components/AdminComponents/MenuBarang';

const Dashboard: React.FC = () => {
  return (
    <>
      <RoleBasedLayout role="admin">
        {/* Data Barang */}
        <DataBarang />
        {/* End Data Barang */}
      </RoleBasedLayout>
    </>
  );
};

export default Dashboard;
