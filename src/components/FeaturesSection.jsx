import React from 'react';
import { FaShippingFast, FaHeadset, FaShieldAlt } from 'react-icons/fa';

const FeaturesSection = () => {
  return (
    <section className="bg-white py-12">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
  Why Shop With Us?
</h2>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          {/* Free and Fast Delivery */}
          <div className="flex flex-col items-center">
            <div className="bg-gray-200 p-5 rounded-full mb-4">
              <FaShippingFast className="text-black text-3xl" />
            </div>
            <h3 className="text-xl font-semibold"> Free and Fast Delivery</h3>
            <p className="text-gray-500">Free delivery for all orders over $140</p>
          </div>

          {/* 24/7 Customer Service */}
          <div className="flex flex-col items-center">
            <div className="bg-gray-200 p-5 rounded-full mb-4">
              <FaHeadset className="text-black text-3xl" />
            </div>
            <h3 className="text-xl font-semibold">24/7  Customer Service</h3>
            <p className="text-gray-500">Friendly 24/7 customer support</p>
          </div>

          {/* Money Back Guarantee */}
          <div className="flex flex-col items-center">
            <div className="bg-gray-200 p-5 rounded-full mb-4">
              <FaShieldAlt className="text-black text-3xl" />
            </div>
            <h3 className="text-xl font-semibold">Money Back Guarantee E</h3>
            <p className="text-gray-500">We return money within 30 days</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
