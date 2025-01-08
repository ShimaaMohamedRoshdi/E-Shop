import React, { useState } from 'react';
import { FaArrowRight, FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [email, setEmail] = useState('');

  // Handle email submission
  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) {
      alert('Please enter your email address');
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert('Please enter a valid email address');
      return;
    }

    console.log('Subscribed Email:', email);
    setEmail('');
  };

  return (
    <footer className="bg-black text-white py-10 px-10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 text-sm">
          
          {/* Exclusive Section */}
          <div className="md:col-span-1">
            <h3 className="font-semibold text-lg">E-SHOP</h3>
            <p className="mt-4 mb-2">Subscribe</p>
            <p className="mb-4">Get 10% off your first order</p>
            <form onSubmit={handleSubscribe} className="flex items-center">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="p-2 bg-gray-700 text-white rounded-l-md outline-none focus:ring-2 focus:ring-blue-500 mr-1"
                required
              />
              <button
                type="submit"
                className="bg-gray-600 p-2 rounded-r-md hover:bg-gray-500 flex items-center justify-center"
                aria-label="Subscribe"
              >
                <FaArrowRight />
              </button>
            </form>
          </div>

          {/* Support Section */}
          <div className="md:col-span-1">
            <h3 className="font-semibold text-lg">Support</h3>
            <address className="mt-4 not-italic">
             Egypt, Cairo ,Nasr City 
              <br />
              <a href="mailto:exclusive@gmail.com" className="block hover:underline">
                shimaamohamed873@gmail.com
              </a>
              <a href="tel:+20" className="block hover:underline">
                01066585154
              </a>
            </address>
          </div>

          {/* Account Section */}
          <div className="md:col-span-1">
            <h3 className="font-semibold text-lg">Account</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="hover:underline">My Account</a></li>
              <li><Link to="/register">Login / Register</Link></li>
              <li><Link to="/cart">Cart</Link></li>
              <li><Link to="/wishlist">Wishlist</Link></li>
              <li><Link to="/shop">shop</Link></li>
        
            </ul>
          </div>

          {/* Quick Link Section */}
          <div className="md:col-span-1">
            <h3 className="font-semibold text-lg">Quick Link</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
              <li><a href="#" className="hover:underline">Terms Of Use</a></li>
              <li><a href="#" className="hover:underline">FAQ</a></li>
              <li><a href="#" className="hover:underline">Contact</a></li>
            </ul>
          </div>

          {/* Download App Section */}
          <div className="md:col-span-1">
            <h3 className="font-semibold text-lg">Download App</h3>
            <p className="mt-4">Save $3 with App New User Only</p>
            <div className="flex space-x-4 mt-6 text-2xl">
              
              <a href="https://www.facebook.com/profile.php?id=100071288824312" aria-label="Facebook" className="hover:text-gray-400">
                <FaFacebook />
              </a>
              <a href="https://github.com/ShimaaMohamedRoshdi" aria-label="Twitter" className="hover:text-gray-400">
                <FaGithub />
              </a>
              <a href="https://www.instagram.com/shimaa__mohamed2003/profilecard/?igsh=MTBwc3gzeG40dnRybA==" aria-label="Instagram" className="hover:text-gray-400">
                <FaInstagram />
              </a>
              <a href="https://www.linkedin.com/in/shimaa-mohamed-502aab27b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" aria-label="LinkedIn" className="hover:text-gray-400">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="text-center text-gray-500 text-xs mt-10 border-t border-gray-700 pt-4">
          © {new Date().getFullYear()} ShimaaMohamed. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
