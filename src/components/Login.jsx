import React, { useState } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'; // For navigation after login
import cartphone2 from '../assets/Images/phone-cart2.jpg';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login form submitted:", formData);
    // Simulate successful login
    alert("Login successful! Redirecting to home phone page...");
    navigate('/home/phone'); // Redirect to the /home/phone page
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row items-center bg-white rounded-lg overflow-hidden max-w-4xl w-full md:w-3/4">
        
        {/* Image Section */}
        <div className="hidden md:block w-1/2 p-10">
          <div className="flex flex-col items-center justify-center h-full">
            <div className="w-3/4 mb-6">
              <img src={cartphone2} alt="Shopping and Mobile" className="w-full" />
            </div>
          </div>
        </div>
        
        {/* Form Section */}
        <div className="w-full md:w-1/2 p-8 md:p-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Log in to your account</h2>
          <p className="text-gray-600 mb-8">Enter your credentials below</p>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email or Phone Number"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            
            <button
              type="submit"
              className="w-full p-3 bg-red-500 text-white rounded-lg font-semibold hover:bg-red-600 focus:outline-none"
              onClick={()=> navigate('/') }    >
              Log In
            </button>
          </form>

          <div className="my-6 flex items-center justify-center">
            <span className="border-t border-gray-300 flex-grow mr-2"></span>
            <span className="text-gray-400">or</span>
            <span className="border-t border-gray-300 flex-grow ml-2"></span>
          </div>

          <button
            className="w-full p-3 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-100"
          >
            <FaGoogle className="mr-2 text-red-500" /> Log in with Google
          </button>

          <p className="text-center text-gray-600 mt-6">
            Don't have an account? <a href="/register" className="text-blue-500 hover:underline">Sign up</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
