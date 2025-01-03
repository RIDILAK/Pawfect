
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { NavBarMenu } from './MockData';
import { CiShoppingCart } from "react-icons/ci"; 
import { MdMenu } from "react-icons/md";
import { BiPackage } from "react-icons/bi"; 
import { FaUserCircle } from "react-icons/fa"; 
import ResponsiveMenu from './ResponsiveMenu';
import MainLogo from '../../assets/logo.png';

function NavBar() {
  const [open, setOpen] = useState(false);
  const [showLogout, setShowLogout] = useState(false); 
  const navigate = useNavigate();
  
 
  const person = localStorage.getItem("userId");
  const userName = localStorage.getItem("userName");

  
  const handleLog = () => {
    localStorage.clear();
    navigate('/signin');
  };

  
  const toggleLogoutMenu = () => {
    setShowLogout(!showLogout);
  };

  return (
    <>
      <nav className="bg-fourth shadow-md fixed top-0 left-0 w-full z-50">
        <div className="container mx-auto flex justify-between items-center py-4 px-4">
          <div className="flex items-center gap-2 font-bold text-primary">
            <img src={MainLogo} alt="Logo" className="w-12 h-12 object-contain" />
            <span className="text-xl">Pawfect</span>
          </div>

          <div className="hidden md:block">
            <ul className="flex items-center gap-6">
              {NavBarMenu.map((item) => (
                <li key={item.id}>
                  <Link
                    to={item.link}
                    className="inline-block py-1 px-3 text-primary hover:text-secondary font-semibold"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate('/cart')}
              className="text-2xl text-primary hover:bg-secondary hover:text-white rounded-full p-2 duration-200"
            >
              <CiShoppingCart />
            </button>

            <button
              onClick={() => navigate('/orders')}
              className="text-2xl text-primary hover:bg-secondary hover:text-white rounded-full p-2 duration-200"
            >
              <BiPackage /> 
            </button>

          
            {person ? (
              <div className="relative flex items-center gap-2">
                <button
                  className="flex items-center text-primary"
                  onClick={toggleLogoutMenu} 
                >
                  <FaUserCircle className="text-2xl" />
                  <span className="ml-2 text-primary">{userName}</span>
                </button>

               
                {showLogout && (
                  <button
                    onClick={handleLog}
                    className="h-10 px-4 text-center text-primary bg-transparent border-2 border-primary rounded-full hover:bg-secondary hover:text-white focus:outline-none"
                  >
                    Logout
                  </button>
                )}
              </div>
            ) : (
              <button
                onClick={() => navigate('/signin')}
                className="hidden md:block bg-primary text-white font-semibold rounded-md px-6 py-2 hover:bg-secondary duration-200"
              >
                Login
              </button>
            )}
          </div>

          <div className="md:hidden" onClick={() => setOpen(!open)}>
            <MdMenu className="text-4xl text-primary cursor-pointer" />
          </div>
        </div>
      </nav>
      <ResponsiveMenu open={open} onClose={() => setOpen(false)} />
      <div className="pt-16"></div>
    </>
  );
}

export default NavBar;

