
import React, { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import SideBar from './SideBar';

const AdminMain = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const isAdmin = localStorage.getItem('isAdmin') === 'true'; 
    if (!isAdmin) {
      Swal.fire({
        icon: 'error',
        title: 'Access Denied',
        text:' You do not have permission to access this page.',
        
      })
      .then(() => {
        navigate('/'); 
      });
    } else {
      setIsAdmin(true);
    }
  }, [navigate]);

  if (!isAdmin) {
    return null; 
  }

  return (
    <div className="flex min-h-screen bg-fourth">
      <div className="w-64">
        <SideBar />
      </div>
      <div className="flex-1 p-6 bg-white shadow-md">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminMain;
