import React from 'react';
import RoleBasedLayout from '../../layout/RoleBasedLayout';
import ProfileDealer from '../../components/DealerComponents/Profile';

const Profile: React.FC = () => {
  return (
    <>
      <RoleBasedLayout role="dealer">
        <div className="mx-auto max-w-242.5">
          <ProfileDealer />
        </div>
      </RoleBasedLayout>
    </>
  );
};

export default Profile;
