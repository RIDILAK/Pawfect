import axios from "axios";
import React, { createContext, useContext, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [allproducts, setAllProducts] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const navigate = useNavigate();
  const { id } = useParams();

  const userid = localStorage.getItem("userId");
  console.log("userid", userid);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BASEURL}/api/Product/GetALl`)
      .then((response) => setAllProducts(response.data))
      .catch((error) => console.error("Error fetching products", error));
  }, []);

  const GetWishlist = () => {
    axios
      .get(`${import.meta.env.VITE_BASEURL}/api/WishList/Get-All`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        params: {
          id: id,
        },
      })
      .then((response) => setWishlist(response.data.data))
      .catch((error) => console.error("error fetching wishlist", error));
  };

  useEffect(() => {
    if (userid) {
      axios
        .get(`http://localhost:3032/users/${userid}`)
        .then((response) => setCart(response.data.cart || []))
        .catch((error) => console.error("Error fetching user cart:", error));
    }
    console.log("cart", cart);
    GetWishlist();
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
  };

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
    return cart.reduce(
      (total, item) => total + item.price * (item.quantity || 1),
      0
    );
  };

  const addToWishlist = (idw) => {
    console.log(idw);
    
    axios
      .post(
        `${import.meta.env.VITE_BASEURL}/api/WishList/Add-or-Remove`,
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          params: {
            ProductId: idw,
          },
        }
      )
      .then((response) => {
        GetWishlist();
        console.log("Wishlist updated on server");
        console.log(response);
       Swal.fire(response.data.message)
        // navigate("/wishlist");
      })
      .catch((error) => console.error("Error updating wishlist:", error));
   
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
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
