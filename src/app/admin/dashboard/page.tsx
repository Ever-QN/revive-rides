import React from 'react';

const AdminDashboard = () => {

  // Redirect to admin/dashboard immediately on page load

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

export default AdminDashboard;