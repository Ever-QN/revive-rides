
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client with your project's URL and anonymous public key
const supabase = createClient(
 process.env.NEXT_PUBLIC_SUPABASE_URL,
 process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

const AdminDashboardPage: React.FC = () => {
 const router = useRouter();
 const [isAdmin, setIsAdmin] = useState(false);
 const [userStats, setUserStats] = useState(null);
 const [error, setError] = useState(null); // State to hold error messages

 useEffect(() => {
    const checkAdminStatus = async () => {
      try {
        const { data: user, error } = await supabase.auth.user();
        if (error || !user) {
          router.push('/login');
          return;
        }

        const { data: roles, error: rolesError } = await supabase
          .from('users')
          .select('role')
          .eq('id', user.id)
          .single();
        if (rolesError) {
          throw new Error('Error fetching user roles');
        }

        setIsAdmin(roles?.role === 'admin');
      } catch (error) {
        setError(error.message);
      }
    };

    checkAdminStatus();
 }, [router]);

 useEffect(() => {
    const fetchUserStats = async () => {
      try {
        const { data, error } = await supabase
          .from('user_stats')
          .select('*');
        if (error) {
          throw new Error('Error fetching user stats');
        }
        setUserStats(data);
      } catch (error) {
        setError(error.message);
      }
    };

    if (isAdmin) {
      fetchUserStats();
    }
 }, [isAdmin]);

 return (
    <div>
      {error && <div>Error: {error}</div>} {/* Display error message */}
      {isAdmin ? (
        <>
          <h1>Admin Dashboard</h1>
          {userStats ? (
            <div>
              <h2>User Statistics</h2>
              {/* Render user statistics here */}
            </div>
          ) : (
            <div>Loading user statistics...</div>
          )}
          {/* Add more admin dashboard content here */}
        </>
      ) : (
        <div>Loading...</div>
      )}
    </div>
 );
};

export default AdminDashboardPage;
