import React from 'react';
import RoleBasedLayout from '../../layout/RoleBasedLayout';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import SettingsDealer from '../../components/DealerComponents/Settings';

const Settings: React.FC = () => {
  return (
    <>
      <RoleBasedLayout role="dealer">
        <div className="mx-auto max-w-242.5">
          <Breadcrumb pageName="Settings" role="dealer" />
          <SettingsDealer />
        </div>
      </RoleBasedLayout>
    </>
  );
};
export default Settings;
