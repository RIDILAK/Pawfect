
import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import SignUp from './Components/Registration/SighnUp';
import SignIn from './Components/Registration/SignIn';
import ProductDetails from './Components/Products/ProductDetails';
import CartPage from './Components/Cart/CartPage';
import { CartProvider } from './Context/CartContext';
import Orders from './Payment/Orders';
import NavBar from './Components/Navbar/NavBar';
import Services from './Components/Pages/Services';
import Contact from './Components/Pages/Contact';
import Footer from './Components/Pages/Footer';
import Home from './Components/Pages/Home';
import Product from './Components/Products/Product';
import AdminMain from './Admin/AdminMain';
import Dashboard from './Admin/Dashboard';
import ProductAdmin from './Admin/ProductAdmin';
import ProductEdit from './Admin/ProductEdit';
import AddProduct from './Admin/AddProduct';
import Users from './Admin/Users';
import UserDetails from './Admin/UserDetails';
import Wishlist from './Components/wishlist/wishlist';
import Address from './Payment/Address';
import AddAdress from './Payment/AddAdrs';
import Razorpay from './Payment/RazorPay';


function App() {
  const location = useLocation();

  
  const hideNavBar = location.pathname.startsWith('/admin');

  return (
    <>
      <CartProvider>
       
        {!hideNavBar && <NavBar />}
        <Routes>
          {/* User side  */}
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/productDetails/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/AddAdress" element={<AddAdress />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/services" element={<Services />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path='/wishlist' element={<Wishlist/>}/>
          <Route path='/address' element={<Address/>}/>
          <Route path='/razorPay' element={<Razorpay/>}/>

          {/* Admin Side */}
          <Route path="/admin" element={<AdminMain />}>
            <Route index element={<Dashboard />} />
            <Route path="adminproduct" element={<ProductAdmin />} />
            <Route path="edit/:id" element={<ProductEdit />} />
            <Route path="addproduct" element={<AddProduct />} />
            <Route path="users" element={<Users />} />
            <Route path="userDetails/:id" element={<UserDetails />} />
        


          </Route>
        </Routes>
      </CartProvider>
    </>
  );
}

export default App;
