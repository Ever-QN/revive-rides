'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

const AdminPage = () => {
  const router = useRouter();

  // Redirect to admin/dashboard immediately on page load
  router.push('/admin/dashboard');

  // Check for authorized user before rendering the layout (commented out for now)
  //if (!isAuthenticated()) {
  //  router.push('/login');
  //  return null;
  //}

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Admin header and content will not be rendered due to redirect */}
    </div>
  );
};

export default AdminPage;