import React from 'react';
import RoleBasedLayout from '../../layout/RoleBasedLayout';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import AnnouncementTrf from '../../components/AdminComponents/Announcement';

const Announcement: React.FC = () => {
  return (
    <>
      <RoleBasedLayout role="admin">
        <div className="mx-auto max-w-242.5">
          <Breadcrumb pageName="Announcement" role="admin" />
          <AnnouncementTrf />
        </div>
      </RoleBasedLayout>
    </>
  );
};

export default Announcement;
