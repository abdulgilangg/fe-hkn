import React from 'react';
import RoleBasedLayout from '../../layout/RoleBasedLayout';
import Notifikasi from '../../components/Notification/Notification';
import DataPesanan from '../../components/AdminComponents/OrderHistory';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';

const Home: React.FC = () => {
  return (
    <>
      <RoleBasedLayout role="admin">
        <div className="mx-auto max-w-242.5">
          <Breadcrumb pageName="Home" role="admin" />
          {/* Notification */}
          <Notifikasi />
          {/* End Notification */}
          {/* Notification */}
          <DataPesanan />
          {/* End Notification */}
        </div>
      </RoleBasedLayout>
    </>
  );
};

export default Home;
