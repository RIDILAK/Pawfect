import React from 'react';
import home from '../../assets/Home/homemain.webp';
import dogfood from '../../assets/Home/dogsfoods.jpeg';
import catfoods from '../../assets/Home/catfood.jpeg';
import pettoys from '../../assets/Home/toys.jpeg';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';



function Home() {
  const navigate=useNavigate()

  const handleClick=()=>{
    navigate('/Product')
  }
  return (
    <div className="relative bg-gray-100">
      
      <div className="relative">
        <img
          src={home}
          alt="Home"
          className="w-full h-[93vh] object-cover" 
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-third via-primary to-fourth bg-clip-text text-transparent drop-shadow-lg animate-pulse">
            Welcome to Pawfect!
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-200 animate-fade-in-up">
            Your one-stop shop for premium pet food and supplies.
          </p>
          <button onClick={()=>handleClick()} className="mt-6 bg-gradient-to-r from-primary to-fourth text-white py-3 px-8 rounded-lg hover:scale-105 hover:shadow-lg duration-300 transform">
            Shop Now
          </button>
        </div>
      </div>

    
      <div className="py-16 px-6 md:px-20 bg-white">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary">
          Why Choose Us?
        </h2>
        <p className="mt-4 text-center text-gray-600 text-lg">
          At Pawfect, we believe every pet deserves the best care. Explore our wide range of healthy and nutritious pet food, specially curated for your furry friends.
        </p>
    
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
  <div className="p-6 bg-gray-100 rounded-lg shadow-md text-center hover:scale-105 hover:shadow-xl transition-transform duration-300">
    <h3 className="text-xl font-bold text-primary">Healthy Ingredients</h3>
    <p className="mt-2 text-gray-600">
      All our products are made from high-quality, natural ingredients to keep your pets healthy and happy.
    </p>
  </div>
  <div className="p-6 bg-gray-100 rounded-lg shadow-md text-center hover:scale-105 hover:shadow-xl transition-transform duration-300">
    <h3 className="text-xl font-bold text-primary">Trusted Brands</h3>
    <p className="mt-2 text-gray-600">
      We partner with the most trusted pet food brands to provide only the best for your pets.
    </p>
  </div>
  <div className="p-6 bg-gray-100 rounded-lg shadow-md text-center hover:scale-105 hover:shadow-xl transition-transform duration-300">
    <h3 className="text-xl font-bold text-primary">Fast Delivery</h3>
    <p className="mt-2 text-gray-600">
      Enjoy fast and reliable delivery straight to your doorstep.
    </p>
  </div>
</div>

      </div>

     
      <div className="py-16 px-6 md:px-20 bg-gray-100">
  <h2 className="text-3xl md:text-4xl font-bold text-center text-primary">
    Products
  </h2>
  <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:scale-105 hover:shadow-xl transition-transform duration-300">
      <div className="w-full h-60 flex items-center justify-center bg-gray-100">
        <img
          src={dogfood}
          alt="Premium Dog Foods"
          className="max-w-full max-h-full object-contain"
        />
      </div>
      <div className="p-4 text-center">
        <h3 className="text-xl font-bold text-primary">Premium Dog Foods</h3>
      </div>
    </div>

    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:scale-105 hover:shadow-xl transition-transform duration-300">
      <div className="w-full h-60 flex items-center justify-center bg-gray-100">
        <img
          src={catfoods}
          alt="Premium Cat Foods"
          className="max-w-full max-h-full object-contain"
        />
      </div>
      <div className="p-4 text-center">
        <h3 className="text-xl font-bold text-primary">Premium Cat Foods</h3>
      </div>
    </div>

    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:scale-105 hover:shadow-xl transition-transform duration-300">
      <div className="w-full h-60 flex items-center justify-center bg-gray-100">
        <img
          src={pettoys}
          alt="Pet Toys"
          className="max-w-full max-h-full object-contain"
        />
      </div>
      <div className="p-4 text-center">
        <h3 className="text-xl font-bold text-primary">Pet Toys</h3>
      </div>
    </div>
  </div>
</div>


      <Footer/>
    </div>
  );
}

export default Home;
