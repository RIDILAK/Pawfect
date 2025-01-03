
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { useCart } from "../../Context/CartContext";
import Footer from "../Pages/Footer";
import Swal from "sweetalert2";



const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart(); 
  const [product, setProduct] = useState({});
  const user = localStorage.getItem("userId") 

  useEffect(() => {
    axios
      .get(`http://localhost:3032/products/${id}`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.error("Error fetching product details:", error);
      });
  }, [id]);

  const handleAddToCart = (id) => {
    if (!user) {
      
      Swal.fire("Please login to add items to your cart.");
      navigate("/signin");
      return;
    }else{
      addToCart(id); 
      
    }
  };

  return (
    <>
      <div className="bg-gray-100 text-gray-800 min-h-screen flex flex-col">
        <div className="flex-grow mt-32">
          <div className="container mx-auto p-6">
            <div className="flex flex-col lg:flex-row items-center bg-fourth rounded-lg shadow-md p-6 gap-6">
              <div className="w-full lg:w-1/2 flex justify-center">
                <div className="relative w-full h-64 lg:h-80 overflow-hidden rounded-lg shadow-lg">
                  <img
                    src={product.url}
                    alt={product.heading}
                    className="absolute inset-0 w-full h-full object-contain hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
              <div className="w-full lg:w-1/2">
              
                <h1 className="text-3xl font-bold text-primary mb-4">{product.heading}</h1>
                <p className="text-xl text-secondary mb-4 font-semibold">
                  Price: $ <span className="text-primary">{product.price}</span>
                </p>
                <p className="text-lg text-gray-700 mb-4">
                  Rating: <span className="text-yellow-500 font-bold">{product.rating} ★</span>
                </p>
                <p className="text-gray-700 mb-6">{product.discription}</p>
                <div className="flex gap-4">
                  <button
                    onClick={()=> handleAddToCart(product.id)}
                    className="px-6 py-2 bg-primary text-white font-semibold rounded-md shadow hover:bg-secondary hover:shadow-lg transform hover:scale-105 transition duration-300"
                  >
                    Add to Cart
                  </button>
                
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    </>
  );
};

export default ProductDetails;
