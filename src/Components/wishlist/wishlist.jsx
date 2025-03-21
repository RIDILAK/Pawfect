import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../Context/CartContext";
import Footer from "../Pages/Footer";

const WishlistPage = () => {
  const navigate = useNavigate();
  const { wishlist,  addTocart} = useCart();

  return (
    <>
      <div className="min-h-screen flex flex-col bg-fourth">
        <div className="container mx-auto py-8 px-4">
          <h1 className="text-3xl font-bold text-primary text-center mb-6">
            Your Wishlist
          </h1>
          {wishlist.length > 0 ? (
            <>
              <ul className="space-y-4">
                {wishlist.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center justify-between bg-third shadow-md p-4 rounded-lg"
                  >
                    <div className="flex items-center space-x-4">
                      <img
                        src={item.url}
                        alt={item.productName}
                        className="w-16 h-16 object-cover rounded-md"
                      />
                      <div>
                        <h2 className="text-lg font-semibold text-primary">
                          {item.productName}
                        </h2>
                        <p className="text-secondary font-medium">
                          ${item.price}
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <button
                        className="px-6 py-2 bg-primary text-white font-semibold rounded-md shadow-md hover:bg-secondary transition-all duration-200"
                        onClick={() => addTocart(item.productId)}
                      >
                        Move to Cart
                      </button>

                     
                    </div>
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <p className="text-center text-secondary text-lg mt-8">
              Your wishlist is empty.
            </p>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default WishlistPage;
