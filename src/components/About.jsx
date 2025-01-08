// AboutUs.js
import React from 'react';
import { FaShoppingCart, FaUsers, FaGift, FaChartLine, FaTruck, FaHeadset, FaRedo } from 'react-icons/fa';
import image1 from '../assets/Images/img1.jpg';
import image2 from '../assets/Images/img2.jpg';
import image3 from '../assets/Images/img3.jpg';
import happygirls from '../assets/Images/happy-girls.jpg';


const AboutUs = () => {
  return (
    <div className="container mx-auto py-12 px-4 md:px-16 lg:px-24">
      
      {/* Our Story Section */}
      <div className="flex flex-col md:flex-row gap-8 items-center mb-12">
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold mb-4">Our Story</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Launched in 2015, Exclusive is South Asia’s premier online shopping marketplace with an active presence in Bangladesh. Supporting the rapid growth of e-commerce, Exclusive delivers a diverse and ever-growing product range including electronics, apparel, and more.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Exclusive now features more than 10 million products on site, growing at a very fast rate. Our aim is to create a diverse environment in categories ranging from consumer goods to electronics.
          </p>
        </div>
        <div className="md:w-1/2">
          <img src={happygirls} alt="Our Story" className="w-full rounded-lg shadow-lg" />
        </div>
      </div>
      
      {/* Statistics Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center mb-12">
        <div className="bg-white shadow-lg p-6 rounded-lg flex flex-col items-center">
          <FaShoppingCart className="text-red-600 text-4xl mb-3" />
          <h3 className="text-2xl font-bold">10.5k</h3>
          <p className="text-gray-600">Sales on our site</p>
        </div>
        <div className="bg-red-600 text-white shadow-lg p-6 rounded-lg flex flex-col items-center">
          <FaChartLine className="text-4xl mb-3" />
          <h3 className="text-2xl font-bold">33k</h3>
          <p>Monthly Product Sale</p>
        </div>
        <div className="bg-white shadow-lg p-6 rounded-lg flex flex-col items-center">
          <FaUsers className="text-red-600 text-4xl mb-3" />
          <h3 className="text-2xl font-bold">45.5k</h3>
          <p className="text-gray-600">Customer active on our site</p>
        </div>
        <div className="bg-white shadow-lg p-6 rounded-lg flex flex-col items-center">
          <FaGift className="text-red-600 text-4xl mb-3" />
          <h3 className="text-2xl font-bold">25k</h3>
          <p className="text-gray-600">Annual gross sale in our site</p>
        </div>
      </div>

      {/* Team Section */}
<div className="flex flex-col md:flex-row justify-evenly gap-8 mb-12">
  {/* Team Member 1 */}
  <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col items-center">
    <img src={image1} alt="Tom Cruise" className="w-full h-64 object-cover" />
    <div className="p-6 text-center space-y-4">
      <h3 className="text-2xl font-bold">Tom Cruise</h3>
      <p className="text-gray-600">Founder & Chairman</p>
      <div className="flex justify-center space-x-4">
        <a href="#" className="text-gray-500 hover:text-red-600"><i className="fab fa-twitter"></i></a>
        <a href="#" className="text-gray-500 hover:text-red-600"><i className="fab fa-facebook"></i></a>
        <a href="#" className="text-gray-500 hover:text-red-600"><i className="fab fa-linkedin"></i></a>
      </div>
    </div>
  </div>

  {/* Team Member 2 */}
  <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col items-center">
    <img src={image2} alt="Emma Watson" className="w-full h-64 object-cover" />
    <div className="p-6 text-center space-y-4">
      <h3 className="text-2xl font-bold">Emma Watson</h3>
      <p className="text-gray-600">Managing Director</p>
      <div className="flex justify-center space-x-4">
        <a href="#" className="text-gray-500 hover:text-red-600"><i className="fab fa-twitter"></i></a>
        <a href="#" className="text-gray-500 hover:text-red-600"><i className="fab fa-facebook"></i></a>
        <a href="#" className="text-gray-500 hover:text-red-600"><i className="fab fa-linkedin"></i></a>
      </div>
    </div>
  </div>

  {/* Team Member 3 */}
  <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col items-center">
    <img src={image3} alt="Will Smith" className="w-full h-64 object-cover" />
    <div className="p-6 text-center space-y-4">
      <h3 className="text-2xl font-bold">Will Smith</h3>
      <p className="text-gray-600">Product Designer</p>
      <div className="flex justify-center space-x-4">
        <a href="#" className="text-gray-500 hover:text-red-600"><i className="fab fa-twitter"></i></a>
        <a href="#" className="text-gray-500 hover:text-red-600"><i className="fab fa-facebook"></i></a>
        <a href="#" className="text-gray-500 hover:text-red-600"><i className="fab fa-linkedin"></i></a>
      </div>
    </div>
  </div>
</div>


      {/* Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div className="bg-white shadow-lg p-6 flex items-center space-x-4 rounded-lg">
          <FaTruck className="text-red-600 text-4xl" />
          <div>
            <h3 className="font-bold">Free and Fast Delivery</h3>
            <p className="text-gray-600">Free delivery on all orders over $50</p>
          </div>
        </div>
        <div className="bg-white shadow-lg p-6 flex items-center space-x-4 rounded-lg">
          <FaHeadset className="text-red-600 text-4xl" />
          <div>
            <h3 className="font-bold">24/7 Customer Service</h3>
            <p className="text-gray-600">Friendly 24/7 customer support</p>
          </div>
        </div>
        <div className="bg-white shadow-lg p-6 flex items-center space-x-4 rounded-lg">
          <FaRedo className="text-red-600 text-4xl" />
          <div>
            <h3 className="font-bold">Money Back Guarantee</h3>
            <p className="text-gray-600">We return money within 30 days</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
