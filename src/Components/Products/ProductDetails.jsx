import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { useCart } from "../../Context/CartContext";
import { FaHeart } from "react-icons/fa";
import Footer from "../Pages/Footer";
import Swal from "sweetalert2";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addTocart, addToWishlist } = useCart();
  const [product, setProduct] = useState({});
  // const user = localStorage.getItem("userId")

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BASEURL}/api/Product/GetById`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        params: {
          id: id,
        },
      })
      .then((response) => {
        setProduct(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching product details:", error);
      });
  }, [id]);

  const handleAddToCart = (id) => {
    addTocart(id);
  };

  return (
    <>
      <div className="bg-gray-100 text-gray-800 min-h-screen flex flex-col">
        <div className="flex-grow mt-32">
          <div className="container mx-auto p-6">
            <div className="flex flex-col lg:flex-row items-center bg-fourth rounded-lg shadow-md p-6 gap-6">
              {/* Product Image with Wishlist Icon */}
              <div className="w-full lg:w-1/2 flex justify-center relative">
                <div className="relative w-full h-64 lg:h-80 overflow-hidden rounded-lg shadow-lg">
                  <img
                    src={product.url}
                    alt={product.productName}
                    className="absolute inset-0 w-full h-full object-contain hover:scale-105 transition-transform duration-300"
                  />
                  {/* Wishlist Icon Positioned in Top-Right */}
                  <button
                    onClick={() => addToWishlist(product.id)}
                    className="absolute top-3 right-3 text-2xl text-primary bg-white p-2 rounded-full shadow-md hover:bg-secondary hover:text-white duration-200"
                  >
                    <FaHeart />
                  </button>
                </div>
              </div>

              {/* Product Details */}
              <div className="w-full lg:w-1/2">
                <h1 className="text-3xl font-bold text-primary mb-4">
                  {product.productName}
                </h1>
                <p className="text-xl text-secondary mb-4 font-semibold">
                  Price: $ <span className="text-primary">{product.price}</span>
                </p>
                <p className="text-lg text-gray-700 mb-4">
                  Rating:{" "}
                  <span className="text-yellow-500 font-bold">
                    {product.rating} ★
                  </span>
                </p>
                <p className="text-gray-700 mb-6">{product.description}</p>
                <div className="flex gap-4">
                  <button
                    onClick={() => handleAddToCart(product.id)}
                    className="px-6 py-2 bg-primary text-white font-semibold rounded-md shadow hover:bg-secondary hover:shadow-lg transform hover:scale-105 transition duration-300"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default ProductDetails;
