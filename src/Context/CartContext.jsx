
import axios from "axios";
import React, { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


import Swal from "sweetalert2";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [allproducts, setAllProducts] = useState([]);
  const [wishlist,setWishlist]=useState([]);
  const navigate=useNavigate();
  
  const userid = localStorage.getItem("userId");
  console.log("userid",userid);
  
 

  
  useEffect(() => {
    axios
      .get("http://localhost:3032/products")
      .then((response) => setAllProducts(response.data))
      .catch((error) => console.error("Error fetching products", error));
  }, []);


  useEffect(() => {
    if (userid) {
      axios
        .get(`http://localhost:3032/users/${userid}`)
        .then((response) => setCart(response.data.cart || []))
        
        .catch((error) => console.error("Error fetching user cart:", error));
    }
    console.log("cart",cart);

  }, [userid]);

  const updateCartOnServer = (updatedCart) => {
    axios
      .patch(`http://localhost:3032/users/${userid}`, { cart: updatedCart })
    

      .then(() => console.log("Cart updated on server"))
      .catch((error) => console.error("Error updating cart on server", error));
  };

 
  const addToCart = (id) => {
  const existingItem = allproducts.find((item) => item.id === id);

  if (existingItem) {
    const isAlreadyInCart = cart.some((item) => item.id === id);
    if (isAlreadyInCart) {
      Swal.fire("This item is already in the cart");
      return;
    }
    
    const updatedCart = [...cart, { ...existingItem, quantity: 1 }];
    setCart(updatedCart);
    updateCartOnServer(updatedCart);

    
    Swal.fire("Product added successfully");
  
  }


      }
  

  const removeFromCart = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    updateCartOnServer(updatedCart);
  };

  const incrementtQuantity = (id) => {
    const updatedCart = cart.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCart(updatedCart);
    updateCartOnServer(updatedCart);
  };

  const decrementQuantity = (id) => {
    const updatedCart = cart.map((item) =>
      item.id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setCart(updatedCart);
    updateCartOnServer(updatedCart);
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * (item.quantity || 1), 0);
  };
  const updateWishlistOnServer = (updatedWishlist) => {
  
    axios
      // .patch(`http://localhost:3032/users/${userid}`, { wishlist: updatedWishlist })
      .patch(`http://localhost:3032/users`)      
      .then(() => console.log("Wishlist updated on server"))
      .catch((error) => console.error("Error updating wishlist:", error));
  };
 
  

  // Add to wishlist
  const addToWishlist = (product) => {
    navigate('/wishlist')
    console.log("product",product);
    
    setWishlist((prevWishlist) => {
      console.log("wishh",setWishlist);
      
      if (prevWishlist.some((item) => item.id === product.id)) {
        Swal.fire("This item is already in your wishlist");
        return prevWishlist;
      }

      const updatedWishlist = [...prevWishlist, product];
      updateWishlistOnServer(updatedWishlist);
      Swal.fire("Product added to wishlist");
      return updatedWishlist;
    });
  };

  // Remove from wishlist
  const removeFromWishlist = (id) => {
    setWishlist((prevWishlist) => {
      const updatedWishlist = prevWishlist.filter((item) => item.id !== id);
      updateWishlistOnServer(updatedWishlist);
      Swal.fire("Product removed from wishlist");
      return updatedWishlist;
    });
  };


  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        incrementtQuantity,
        decrementQuantity,
        getTotalPrice,
        wishlist,
        addToWishlist,
        removeFromWishlist,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};