import React from 'react';
import RoleBasedLayout from '../../layout/RoleBasedLayout';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import AnnouncementSlider from '../../components/Announcement/Announcement';

const UserApproval: React.FC = () => {
  return (
    <>
      <RoleBasedLayout role="admin">
        <div className="mx-auto max-w-242.5">
          <Breadcrumb pageName="User Approval" role="admin" />
          <AnnouncementSlider />
        </div>
      </RoleBasedLayout>
    </>
  );
};

export default UserApproval;
