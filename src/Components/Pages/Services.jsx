import React from 'react';
import Footer from './Footer';
import { FaCat, FaDog, FaBone, FaFish, FaHeart, FaPaw } from 'react-icons/fa';

function Services() {
  return (
    <div className="bg-fourth w-full h-auto pt-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-full">
        <h2 className="text-4xl font-bold text-primary text-center mb-8 sm:text-3xl md:text-4xl">Our Services</h2>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
        
          <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow border border-third">
            <div className="flex items-center mb-4">
              <FaCat className="text-primary text-3xl mr-3" />
              <h3 className="text-2xl font-semibold text-secondary text-lg sm:text-xl md:text-2xl">Premium Cat Foods</h3>
            </div>
            <p className="text-gray-700 text-sm sm:text-base md:text-lg">
              Nutritious, delicious, and tailored for your feline friends. Our cat food range is rich in essential vitamins and minerals to keep your cats purring with satisfaction.
            </p>
          </div>
         
          <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow border border-third">
            <div className="flex items-center mb-4">
              <FaDog className="text-primary text-3xl mr-3" />
              <h3 className="text-2xl font-semibold text-secondary text-lg sm:text-xl md:text-2xl">Premium Dog Foods</h3>
            </div>
            <p className="text-gray-700 text-sm sm:text-base md:text-lg">
              High-quality dog food options designed for every breed, age, and size. From energetic pups to wise old dogs, we’ve got something for everyone.
            </p>
          </div>
          
          <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow border border-third">
            <div className="flex items-center mb-4">
              <FaBone className="text-primary text-3xl mr-3" />
              <h3 className="text-2xl font-semibold text-secondary text-lg sm:text-xl md:text-2xl">Exciting Pet Toys</h3>
            </div>
            <p className="text-gray-700 text-sm sm:text-base md:text-lg">
              Keep your pets entertained and active with our range of toys! Choose from interactive toys for cats and durable chew toys for dogs to keep tails wagging.
            </p>
          </div>
        
          <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow border border-third">
            <div className="flex items-center mb-4">
              <FaFish className="text-primary text-3xl mr-3" />
              <h3 className="text-2xl font-semibold text-secondary text-lg sm:text-xl md:text-2xl">Healthy Treats</h3>
            </div>
            <p className="text-gray-700 text-sm sm:text-base md:text-lg">
              Reward your pets with our delicious and nutritious treats! Perfect for training or just showing love to your furry companions.
            </p>
          </div>
       
          <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow border border-third">
            <div className="flex items-center mb-4">
              <FaHeart className="text-primary text-3xl mr-3" />
              <h3 className="text-2xl font-semibold text-secondary text-lg sm:text-xl md:text-2xl">Pet Care Products</h3>
            </div>
            <p className="text-gray-700 text-sm sm:text-base md:text-lg">
              Discover a variety of grooming and hygiene products to ensure your pets stay clean, healthy, and happy every day.
            </p>
          </div>
         
          <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow border border-third">
            <div className="flex items-center mb-4">
              <FaPaw className="text-primary text-3xl mr-3" />
              <h3 className="text-2xl font-semibold text-secondary text-lg sm:text-xl md:text-2xl">Custom Accessories</h3>
            </div>
            <p className="text-gray-700 text-sm sm:text-base md:text-lg">
              Personalized collars, leashes, and pet beds tailored to your pet’s unique style and comfort needs.
            </p>
          </div>
        </div>
        <div className="mt-12 text-center">
          <p className="text-gray-800 text-lg sm:text-base md:text-lg">
            Whether you’re looking to nourish your pet, keep them entertained, or care for them with love, we’re here to support you in every step of your pet parenting journey!
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Services;
