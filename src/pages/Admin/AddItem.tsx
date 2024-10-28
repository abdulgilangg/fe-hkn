import React from 'react';
import RoleBasedLayout from '../../layout/RoleBasedLayout';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import FormAdd from '../../components/AdminComponents/AddItem';

const AddItem: React.FC = () => {
  return (
    <>
      <RoleBasedLayout role="admin">
        <div className="mx-auto max-w-242.5">
          <Breadcrumb pageName="Add Item" role="admin" />
          <FormAdd />
        </div>
      </RoleBasedLayout>
    </>
  );
};

export default AddItem;
