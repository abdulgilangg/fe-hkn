import React from 'react';
import RoleBasedLayout from '../../layout/RoleBasedLayout';
import HistoriPesanan from '../../components/DealerComponents/HistoriPesanan';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import Notifikasi from '../../components/Notification/Notification';

const Home: React.FC = () => {
  return (
    <>
      <RoleBasedLayout role="dealer">
        <div className="mx-auto max-w-242.5">
          <Breadcrumb pageName="Home" role="dealer" />

          {/* Notification */}
          <Notifikasi />
          {/* End Notification */}

          {/* Order History*/}
          <HistoriPesanan />
          {/* End Order History */}
        </div>
      </RoleBasedLayout>
    </>
  );
};

export default Home;
