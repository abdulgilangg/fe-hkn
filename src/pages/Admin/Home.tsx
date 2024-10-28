import React from 'react';
import RoleBasedLayout from '../../layout/RoleBasedLayout';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import DetailNotification from '../../components/AdminComponents/DetailNotification';

const Home: React.FC = () => {
  return (
    <>
      <RoleBasedLayout role="admin">
        <div className="mx-auto max-w-242.5">
          <Breadcrumb pageName="Notification" role="admin" />
          <DetailNotification />
        </div>
      </RoleBasedLayout>
    </>
  );
};

export default Home;
