import React from 'react';
import RoleBasedLayout from '../../layout/RoleBasedLayout';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import AnnouncementSlider from '../../components/Announcement/Announcement';

const Announcement: React.FC = () => {
  return (
    <>
      <RoleBasedLayout role="admin">
        <div className="mx-auto max-w-242.5">
          <Breadcrumb pageName="Announcement" role="admin" />
          <AnnouncementSlider />
        </div>
      </RoleBasedLayout>
    </>
  );
};

export default Announcement;
