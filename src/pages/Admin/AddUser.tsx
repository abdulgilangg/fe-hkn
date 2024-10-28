import React from 'react';
import RoleBasedLayout from '../../layout/RoleBasedLayout';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import AnnouncementSlider from '../../components/Announcement/Announcement';

const AddUser: React.FC = () => {
  return (
    <>
      <RoleBasedLayout role="admin">
        <div className="mx-auto max-w-242.5">
          <Breadcrumb pageName="Add User" role="admin" />
          <AnnouncementSlider />
        </div>
      </RoleBasedLayout>
    </>
  );
};

export default AddUser;
