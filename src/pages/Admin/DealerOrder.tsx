import React from 'react';
import RoleBasedLayout from '../../layout/RoleBasedLayout';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import DealerOrder from '../../components/AdminComponents/DealerOrder';

const Home: React.FC = () => {
  return (
    <>
      <RoleBasedLayout role="admin">
        <div className="mx-auto max-w-242.5">
          <Breadcrumb pageName="Home" role="admin" />
          <DealerOrder />
        </div>
      </RoleBasedLayout>
    </>
  );
};

export default Home;
