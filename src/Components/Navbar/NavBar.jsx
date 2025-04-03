import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { NavBarMenu } from "./MockData";
import { CiSearch, CiShoppingCart } from "react-icons/ci";
import { MdMenu } from "react-icons/md";
import { BiPackage } from "react-icons/bi";
import { FaHeart, FaUserCircle } from "react-icons/fa";
import ResponsiveMenu from "./ResponsiveMenu";
import MainLogo from "../../assets/logo.png";
import { div } from "framer-motion/client";
import { useCart } from "../../Context/CartContext";


function NavBar() {
  const [open, setOpen] = useState(false);
  const [showLogout, setShowLogout] = useState(false);
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);
  // const [user, setUser] = useState([]);
  const{user,handleUser,setUser}=useCart();
  const [filteredProducts, setFilteredProducts] = useState([]);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  // const person = localStorage.getItem("userId");
  // const userName = localStorage.getItem("userName");

  // const handleUser = async () => {
  //   await axios
  //     .get(`${import.meta.env.VITE_BASEURL}/api/Admin/GetUser`, {
  //       headers: {
  //         Authorization: `Bearer ${localStorage.getItem("token")}`,
  //       },
  //     })
  //     .then((res) => setUser(res.data.data))
  //     .catch((error) => console.error("Error in user", error));
  // };

  const handleProduct = () => {
    axios
      .get(`${import.meta.env.VITE_BASEURL}/api/Product/GetALl`)
      .then((res) => setProducts(res.data.data))
      .catch((err) => console.error("Error fetching products:", err));
  };

  const handleSearch = () => {
    axios
      .get(`${import.meta.env.VITE_BASEURL}/api/Product/Search`)
      .then((res) => setSearch(res.data.data))
      .catch((err) => console.error("Error in search", err));
  };

  useEffect(() => {
    handleProduct();
    handleSearch();
  }, []);
  // useEffect(() => {
  //   handleUser();
  // }, [user]);
  // useEffect(() => {
  //   if (user.length > 0 && person) {
  //     // Find the logged-in user by matching the ID
  //     const loggedInUser = user.find((u) => u.id === person);
  //     if (loggedInUser) {
  //       setUser(loggedInUser); // Update state with logged-in user details
  //     }
  //   }
  // }, [user, person]);

  useEffect(() => {
    if (search.length > 0) {
      const filtered = products.filter((product) =>
        product.productName.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredProducts(filtered);
      console.log("searced", filteredProducts);
    } else {
      setFilteredProducts([]);
    }
  }, [search, products]);

  // logout
  const handleLog = () => {
    localStorage.clear();
    setUser([]);
    navigate("/signin");
    handleUser()
    setShowLogout(false);
  };

  const toggleLogoutMenu = () => {
    setShowLogout(!showLogout);
  };

  return (
    <>
      <nav className="bg-fourth shadow-md fixed top-0 left-0 w-full z-50">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          <div className="flex items-center gap-2 font-bold text-primary">
            <img
              src={MainLogo}
              alt="Logo"
              className="w-12 h-12 object-contain"
            />
            <span className="text-xl">Pawfect</span>
          </div>

          <div className="hidden md:flex gap-6">
            {NavBarMenu.map((item) => (
              <Link
                key={item.id}
                to={item.link}
                className="text-primary hover:text-secondary font-semibold"
              >
                {item.title}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={() => navigate("/wishlist")}
              className="text-2xl text-primary hover:bg-secondary hover:text-white rounded-full p-2 duration-200"
            >
              <FaHeart />
            </button>

            <div className="relative">
              <div className="flex items-center border border-primary rounded-md px-4 py-1 w-48 justify-between">
                <input
                  type="text"
                  placeholder="Search..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="outline-none bg-transparent text-primary flex-grow px-2"
                />
                <CiSearch className="text-2xl text-primary cursor-pointer" />
              </div>

              {search.length > 0 &&
                (filteredProducts.length > 0 ? (
                  <div className="absolute left-0 mt-2 w-56 bg-white border border-gray-300 shadow-lg rounded-md max-h-60 overflow-y-auto">
                    {filteredProducts.map((product) => (
                      <div
                        key={product.id}
                        className="flex items-center gap-2 p-2 hover:bg-gray-100 cursor-pointer"
                        onClick={() => {
                          navigate(`/productDetails/${product.id}`);
                          setSearch("");
                        }}
                      >
                        <img
                          src={product.url}
                          alt={product.heading}
                          className="w-12 h-12 object-cover rounded"
                        />
                        <div className="flex flex-col">
                          <span className="text-sm font-semibold">
                            {product.productName}
                          </span>
                          <span className="text-xs text-gray-500">
                            ${product.price}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="absolute left-0 mt-2 w-56 bg-white border border-gray-300 shadow-lg rounded-md p-2 text-center text-gray-500">
                    No Results Found
                  </div>
                ))}
            </div>

            <button
              onClick={() => navigate("/cart")}
              className="text-2xl text-primary hover:bg-secondary hover:text-white rounded-full p-2 duration-200"
            >
              <CiShoppingCart />
            </button>

            <button
              onClick={() => navigate("/orders")}
              className="text-2xl text-primary hover:bg-secondary hover:text-white rounded-full p-2 duration-200"
            >
              <BiPackage />
            </button>

            {token ? (
              <div className="relative flex items-center gap-2">
                <button
                  className="flex items-center text-primary"
                  onClick={toggleLogoutMenu}
                >
                  <FaUserCircle className="text-2xl" />
                  <span className="ml-2 text-primary">{user.name}</span>
                </button>

                {showLogout && (
                  <button
                    onClick={handleLog}
                    className="absolute top-10 right-0 bg-white border border-primary px-4 py-2 rounded-md text-primary hover:bg-secondary hover:text-white"
                  >
                    Logout
                  </button>
                )}
              </div>
            ) : (
              <button
                onClick={() => navigate("/signin")}
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
