import React, { useState, ReactNode } from 'react';
import Header from '../components/Header/index';
import Sidebar from '../components/Sidebar/index';
import Footer from '../components/Footer/Footer';

interface RoleBasedLayoutProps {
  children: ReactNode;
  role: 'admin' | 'dealer';
}

const RoleBasedLayout: React.FC<RoleBasedLayoutProps> = ({
  children,
  role,
}) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="dark:bg-boxdark-2 dark:text-bodydark">
      {/* ===== Page Wrapper Start ===== */}
      <div className="flex h-screen overflow-hidden">
        {/* ===== Sidebar Start ===== */}
        <Sidebar
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
          role={role}
        />
        {/* ===== Sidebar End ===== */}

        {/* ===== Content Area Start ===== */}
        <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
          {/* ===== Header Start ===== */}
          <Header
            sidebarOpen={sidebarOpen}
            setSidebarOpen={setSidebarOpen}
            role={role}
          />
          {/* ===== Header End ===== */}

          {/* ===== Main Content Start ===== */}
          <main>
            <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
              {children} {/* Mengoper children sebagai konten utama */}
            </div>
          </main>
          {/* ===== Main Content End ===== */}
          {/* Footer */}
          <Footer />
          {/* End Footer */}
        </div>
        {/* ===== Content Area End ===== */}
      </div>
      {/* ===== Page Wrapper End ===== */}
    </div>
  );
};

export default RoleBasedLayout;
