import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../Context/CartContext";

import axios from "axios";
import Footer from "../Pages/Footer";

const CartPage = () => {
  const navigate = useNavigate();
  const { cart, RemoveCart, incrementQuantity, decrementQuantity } = useCart();
  console.log("cart", cart);

  useEffect(() => {
    // const user = localStorage.getItem("userId");
    // if (!user) {
    //   alert("Please login to view your cart");
    //   navigate("/signin");
    // } else {
    // axios.get(`http://localhost:3032/users/${user}`)
    //   .then((response) => {
    //     const updatedCart = response.data.cart || []
    //   })
    //   .catch((error) => console.error('Error fetching updated cart:', error));
    //
    // }
    //   setTimeout((resolve)=>{
    // resolve(window.location.reload())
    //   },5000)
  }, [navigate]);

  const handleProceedToPayment = () => {
    navigate("/address");
  };

  return (
    <>
      <div className="min-h-screen flex flex-col bg-fourth">
        <div className="container mx-auto py-8 px-4">
          <h1 className="text-3xl font-bold text-primary text-center mb-6">
            Your Cart
          </h1>
          {cart ? (
            <>
              <ul className="space-y-4">
                {cart?.items?.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center justify-between bg-third shadow-md p-4 rounded-lg"
                  >
                    <div className="flex items-center space-x-4">
                      <img
                        src={item.url}
                        alt={item.ProductName}
                        className="w-16 h-16 object-cover rounded-md"
                      />
                      <div>
                        <h2 className="text-lg font-semibold text-primary">
                          {item.productName}
                        </h2>
                        <p className="text-secondary font-medium">
                        ₹{item.price}
                        </p>
                        <div className="flex items-center mt-2">
                          <button
                            onClick={() => decrementQuantity(item.productId)}
                            className="px-3 py-2 bg-fourth border border-primary rounded-md text-primary hover:bg-primary hover:text-white transition-all"
                          >
                            -
                          </button>
                          <span className="mx-4 text-lg text-primary">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => incrementQuantity(item.productId)}
                            className="px-3 py-2 bg-fourth border border-primary rounded-md text-primary hover:bg-primary hover:text-white transition-all"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>

                    <button
                      className="px-6 py-2 bg-primary text-white font-semibold rounded-md shadow-md hover:bg-secondary transition-all duration-200"
                      onClick={() => RemoveCart(item.productId)}
                    >
                      Remove Item
                    </button>
                  </li>
                ))}
              </ul>
              <div className="mt-8 text-right">
                <h2 className="text-2xl font-bold text-primary">
                  Total Price:{" "}
                  <span className="text-secondary">₹{cart?.totalAmount}</span>
                </h2>

                <button
                  onClick={() => handleProceedToPayment()}
                  className="mt-4 px-6 py-3 bg-primary text-white font-bold rounded-md shadow-md hover:bg-secondary transition-all duration-200"
                >
                  Proceed 
                </button>
              </div>
            </>
          ) : (
            <p className="text-center text-secondary text-lg mt-8">
              Your cart is empty.
            </p>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CartPage;
