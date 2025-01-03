import React from 'react';

function Footer() {
  return (
    <footer className="bg-primary text-white py-8">
      <div className="container mx-auto px-6 md:px-12">
        
        <div className="flex flex-col md:flex-row justify-between items-start mb-8">
        
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h2 className="text-2xl font-bold text-third">Pawfect</h2>
            <p className="text-lg text-third mt-2">
              Your one-stop shop for premium pet food and supplies.
            </p>
          </div>

         
          <div className="flex flex-col space-y-2 md:space-y-4">
            <h3 className="text-xl font-bold text-third">Quick Links</h3>
            <a href="#" className="text-third hover:text-fourth transition-colors duration-300">
              About Us
            </a>
            <a href="/contact" className="text-third hover:text-fourth transition-colors duration-300">
              Contact
            </a>
            <a href="#" className="text-third hover:text-fourth transition-colors duration-300">
              FAQs
            </a>
            <a href="#" className="text-third hover:text-fourth transition-colors duration-300">
              Privacy Policy
            </a>
          </div>

       
          <div className="flex flex-col space-y-2 md:space-y-4">
            <h3 className="text-xl font-bold text-third">Contact Us</h3>
            <p className="text-third">Email: <a href="mailto:support@pawfect.com" className="hover:text-fourth">support@pawfect.com</a></p>
            <p className="text-third">Phone: <a href="tel:+1234567890" className="hover:text-fourth">+1 (234) 567-890</a></p>
            <p className="text-third">Address: <span className="hover:text-fourth">123 Pawfect St, Petville, PA 12345</span></p>
          </div>
        </div>

      
        <div className="border-t border-third pt-6">
          <div className="flex justify-center items-center space-x-6">
            <p className="text-center text-third text-lg">
              © 2024 Pawfect. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
