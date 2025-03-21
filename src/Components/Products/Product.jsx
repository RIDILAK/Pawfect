import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Footer from "../Pages/Footer";
import { FaHeart } from "react-icons/fa";
import { useCart } from "../../Context/CartContext"; // Import Cart Context

const Product = () => {
  const [products, setProducts] = useState([]);
  const [filterProduct, setFilterProduct] = useState([]);
  const navigate = useNavigate();
  const { addToWishlist, wishlist } = useCart();

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BASEURL}/api/Product/GetALl`) 
      .then((response) => {
        setFilterProduct(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  const categoryHandle = (category) => {
    const endpoint =
      category === "All"
        ? `${import.meta.env.VITE_BASEURL}/api/Product/GetAll`
        : `${import.meta.env.VITE_BASEURL}/api/Product/GetByCategory?category=${category}`;

    axios
      .get(endpoint)
      .then((response) => {
        setFilterProduct(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  };

  const handleClick = (id) => {
    navigate(`/ProductDetails/${id}`);
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold text-primary text-center mb-10">
          Product Gallery
        </h1>

        <div className="mt-10 flex justify-center gap-6">
          {["All", "dog-food", "cat-food", "pet-toys"].map((category) => (
            <button
              key={category}
              className="px-6 py-3 text-white font-semibold rounded-md bg-primary hover:bg-primary-dark transition duration-300"
              onClick={() => categoryHandle(category)}
            >
              {category.replace("-", " ")}
            </button>
          ))}
        </div>
        <br />

        {filterProduct.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filterProduct.map((item) => {
              const wishlistIds = wishlist?.map((x) => x.wishListId) || [];
              const isInWishlist = wishlistIds?.some(x=>x==item.id);
              console.log(wishlist);
              console.log(isInWishlist);
              
              console.log(wishlistIds);
              
              return (
                <div
                  key={item.id}
                  className="bg-fourth rounded-lg shadow-xl overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:bg-third relative"
                >
                  <div className="flex items-center gap-4 p-4">
                    <button
                      onClick={() => addToWishlist(item.id)}
                      className={`text-2xl hover:bg-secondary hover:text-white rounded-full p-2 duration-200 ${
                        wishlistIds.includes(item.id) ? "text-red-500" : "text-primary"
                      }`}
                    >
                      <FaHeart/>
                    </button>
                  </div>

                  <img
                    src={item.url}
                    alt={item.productName}
                    className="w-full h-56 object-contain transform transition-transform duration-300 hover:scale-110"
                  />

                  <div className="p-4">
                    <h2 className="text-xl font-semibold text-primary">
                      {item.productName}
                    </h2>
                    <p className="text-lg font-semibold text-gray-700">
                      Price: <span className="text-black-500">₹{item.price}</span>
                    </p>

                    <div className="flex gap-4">
                      <button
                        onClick={() => handleClick(item.id)}
                        className="mt-4 ml-32 px-6 py-2 bg-secondary text-white font-semibold rounded-md transition duration-300 hover:bg-secondary-dark hover:text-slate-900"
                      >
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <p className="text-center text-lg text-gray-600">
            No products available
          </p>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Product;
