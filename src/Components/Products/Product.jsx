import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { useNavigate } from 'react-router-dom';
import Footer from '../Pages/Footer';

const Product = () => {
  const [products, setProducts] = useState([]);  
  const [filterProduct, setFilterProduct] = useState([]);  
  const navigate = useNavigate();

  
  useEffect(() => {                                                                          
    axios
      .get('http://localhost:3032/products')
      .then((response) => {
        setProducts(response.data);  
        setFilterProduct(response.data); 
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
  }, []);

  const handleCategoryClick = (category) => {
    if (category === 'All') {
      setFilterProduct(products);  
    } else {
      setFilterProduct(
        products.filter((product) => product.catogory === category) 
      );
    }
  };

  
  const handleClick = (id) => {
    navigate(`/ProductDetails/${id}`);
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold text-primary text-center mb-10">Product Gallery</h1>

     
        <div className="mt-10 flex justify-center gap-6">
          <button
            className="px-6 py-3 text-white font-semibold rounded-md transform transition duration-300 bg-primary hover:bg-primary-dark focus:outline-none focus:border-2 focus:border-primary focus:ring-2 focus:ring-primary"
            onClick={() => handleCategoryClick('All')} 
          >
            All
          </button>
          <button
            className="px-6 py-3 text-white font-semibold rounded-md transform transition duration-300 bg-primary hover:bg-primary-dark focus:outline-none focus:border-2 focus:border-primary focus:ring-2 focus:ring-primary"
            onClick={() => handleCategoryClick('dog-food')} 
          >
            Dog Foods
          </button>
          <button
            className="px-6 py-3 text-white font-semibold rounded-md transform transition duration-300 bg-primary hover:bg-primary-dark focus:outline-none focus:border-2 focus:border-primary focus:ring-2 focus:ring-primary"
            onClick={() => handleCategoryClick('cat-food')} 
          >
            Cat Foods
          </button>
          <button
            className="px-6 py-3 text-white font-semibold rounded-md transform transition duration-300 bg-primary hover:bg-primary-dark focus:outline-none focus:border-2 focus:border-primary focus:ring-2 focus:ring-primary"
            onClick={() => handleCategoryClick('pet-toys')} 
          >
            Pet Toys
          </button>
        </div>
        <br />

       
        {filterProduct.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filterProduct.map((item) => (
              <div
                key={item.id}
                className="bg-fourth rounded-lg shadow-xl overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:bg-third relative"
              >
               

                
                <img
                  src={item.url}
                  alt={item.heading}
                  className="w-full h-56 object-contain transform transition-transform duration-300 hover:scale-110"
                />
                <div className="p-4">
                 
                  <h2 className="text-xl font-semibold text-primary">{item.heading}</h2>

                 
                  <div className="flex items-center text-gray-700">
                    <p className="text-lg font-semibold mr-4">
                      Price: $ <span className="text-black-500">{item.price}</span>
                    </p>
                  </div>

                 
                  <div className="flex gap-4">
                  
                  
                    <button
                      onClick={() => handleClick(item.id)}
                      className="mt-4 ml-32 px-6 py-2 bg-secondary text-white font-semibold rounded-md transform transition duration-300 hover:bg-secondary-dark hover:text-slate-900 focus:outline-none focus:border-2 focus:border-secondary focus:ring-2 focus:ring-secondary"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-lg text-gray-600">No products available</p>
        )}
      </div>

      
      <Footer/>
    </div>
  );
};

export default Product;
