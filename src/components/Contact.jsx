// Contact.js
import React from 'react';
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="container mx-auto py-12 px-4 md:px-16 lg:px-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left Section - Contact Information */}
        <div className="bg-white shadow-md p-6 rounded-lg">
          <div className="mb-6">
            <div className="flex items-center space-x-3 mb-4">
              <FaPhoneAlt className="text-red-600 text-2xl" />
              <h3 className="text-xl font-bold">Call To Us</h3>
            </div>
            <p>We are available 24/7, 7 days a week.</p>
            <p className="mt-2">Phone: +8801611112222</p>
          </div>
          <hr className="border-gray-200 mb-6" />
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <FaEnvelope className="text-red-600 text-2xl" />
              <h3 className="text-xl font-bold">Write To Us</h3>
            </div>
            <p>Fill out our form and we will contact you within 24 hours.</p>
            <p className="mt-2">Emails: customer@exclusive.com</p>
            <p>Emails: support@exclusive.com</p>
          </div>
        </div>

        {/* Right Section - Contact Form */}
        <div className="bg-white shadow-md p-6 rounded-lg">
          <form>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <input
                type="text"
                placeholder="Your Name *"
                className="border p-3 rounded w-full focus:outline-none focus:border-red-500"
              />
              <input
                type="email"
                placeholder="Your Email *"
                className="border p-3 rounded w-full focus:outline-none focus:border-red-500"
              />
              <input
                type="text"
                placeholder="Your Phone *"
                className="border p-3 rounded w-full focus:outline-none focus:border-red-500"
              />
            </div>
            <textarea
              rows="5"
              placeholder="Your Message"
              className="border p-3 rounded w-full focus:outline-none focus:border-red-500 mb-4"
            ></textarea>
            <button
              type="submit"
              className="bg-red-600 text-white py-3 px-6 rounded hover:bg-red-700 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
