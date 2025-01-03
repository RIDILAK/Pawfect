import React from 'react';
import Footer from './Footer';


function Contact() {
  return (
    <div className="bg-fourth w-screen h-screen py-12 ">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-full">
        <h2 className="text-4xl font-bold text-primary text-center mb-8">Contact Us</h2>
        <div className="bg-white shadow-lg rounded-lg p-8 border border-third">
          <form  action="https://formsubmit.co/ridilak462@gmail.com" method="POST" className="space-y-6" >
          
            <div>
              <label htmlFor="name" className="block text-lg font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                className="mt-1 block w-full px-4 py-2 border border-third rounded-md shadow-sm focus:ring-secondary focus:border-secondary"
              />
            </div>

           
            <div>
              <label htmlFor="email" className="block text-lg font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="mt-1 block w-full px-4 py-2 border border-third rounded-md shadow-sm focus:ring-secondary focus:border-secondary"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-lg font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                placeholder="Write your message"
                className="mt-1 block w-full px-4 py-2 border border-third rounded-md shadow-sm focus:ring-secondary focus:border-secondary"
              ></textarea>
            </div>

          
            <div className="text-center">
              <button
                type="submit"
                className="bg-primary text-white font-semibold rounded-md px-6 py-2 hover:bg-secondary duration-200"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Contact;
