import React from 'react';
import RoleBasedLayout from '../../../layout/RoleBasedLayout';

const Home: React.FC = () => {
  return (
    <>
      <RoleBasedLayout role="dealer">
        <h1>HOME</h1>
      </RoleBasedLayout>
    </>
  );
};

export default Home;
