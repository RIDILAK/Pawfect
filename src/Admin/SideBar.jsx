import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SideBar = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/signin')
    ;
  };

  return (
    <div className="min-h-screen w-64 bg-fourth shadow-lg fixed">
      
      <div className="p-6 text-center bg-primary text-white font-bold text-2xl">
        Admin
      </div>

    
      <div className="p-4">
        <ul className="space-y-4">
          <li>
            <Link
              to="/admin"
              className="flex items-center p-2 rounded-md hover:bg-third text-primary hover:text-secondary"
            >
              <span className="mr-2 text-xl">📊</span>
              <span>Dashboard</span>
            </Link>
          </li>
          <li>
            <Link
              to="/admin/adminproduct"
              className="flex items-center p-2 rounded-md hover:bg-third text-primary hover:text-secondary"
            >
              <span className="mr-2 text-xl">🛍</span>
              <span>Products</span>
            </Link>
          </li>
          <li>
            <Link
              to="/admin/users"
              className="flex items-center p-2 rounded-md hover:bg-third text-primary hover:text-secondary"
            >
              <span className="mr-2 text-xl">👥</span>
              <span>Users</span>
            </Link>
          </li>
        </ul>
      </div>

     
      <div className="p-4 mt-auto">
        <button
          onClick={handleClick}
          className="w-full p-2 bg-primary text-white rounded-md hover:bg-secondary"
        >
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default SideBar;

