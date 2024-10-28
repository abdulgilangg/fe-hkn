import React from 'react';
import RoleBasedLayout from '../../layout/RoleBasedLayout';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import StatusOrder from '../../components/DealerComponents/StatusOrder';
import Order from '../../components/DealerComponents/Order';

const DealerOrder: React.FC = () => {
  return (
    <>
      <RoleBasedLayout role="admin">
        <div className="mx-auto max-w-242.5">
          <Breadcrumb pageName="Dealer Order" role="admin" />
          <StatusOrder />
          <Order />
        </div>
      </RoleBasedLayout>
    </>
  );
};

export default DealerOrder;
