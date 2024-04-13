import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from '@/components/Nav';
import UserManagement from '@/components/UserManagement'; 
import DashboardHome from '@/components/DashboardHome'; 

const Dashboard: React.FC = () => {
 return (
    <Router>
        <Nav />
        <Routes>
          <Route path="/dashboard/user-management" element={<UserManagement />} />
          <Route path="/dashboard" element={<DashboardHome />} />
        </Routes>
      </div>
    </Router>
 );
}

export default Dashboard;
