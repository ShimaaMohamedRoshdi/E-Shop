import React, { useState } from 'react';
import { FaUserCog, FaBox, FaBan, FaStar, FaHeart } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const ProfileEdit = () => {
  const [formData, setFormData] = useState({
    firstName: 'Shimaa',
    lastName: 'Mohamed',
    email: 'ShimaaMohamed123@gmail.com',
    address: 'Cairo, 5236, NasrCity',
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const navigate = useNavigate();

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Profile Updated:', formData);
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row ">
      <aside className="bg-white w-full lg:w-1/4 px-10 py-10 ">
        <nav>
          <ul className="space-y-4">
            <li
              className="text-red-500 font-semibold flex items-center cursor-pointer"
              onClick={() => navigate('/ProfileEdit')}
            >
              <FaUserCog className="mr-2" />
              My Profile
            </li>
            <li
              className="text-gray-600 hover:text-red-500 cursor-pointer flex items-center"
              onClick={() => navigate('/order')}
            >
              <FaBox className="mr-2" />
              My Orders
            </li>
            <li
              className="text-gray-600 hover:text-red-500 cursor-pointer flex items-center"
              onClick={() => navigate('/cancellations')}
            >
              <FaBan className="mr-2" />
              My Cancellations
            </li>
            <li
              className="text-gray-600 hover:text-red-500 cursor-pointer flex items-center"
              onClick={() => navigate('/wishlist')}
            >
              <FaHeart className="mr-2" />
              My Wishlist
            </li>
            <li
              className="text-gray-600 hover:text-red-500 cursor-pointer flex items-center"
              onClick={() => navigate('/reviews')}
            >
              <FaStar className="mr-2" />
              My Reviews
            </li>
          </ul>
        </nav>
      </aside>

      {/* Profile Edit Form */}
      <main className="flex-grow bg-white p-8 shadow-lg my-10 max-w-3xl rounded-md">
        <h2 className="text-2xl font-semibold text-red-500 mb-8 text-center lg:text-left">
          Edit Your Profile
        </h2>
        <form onSubmit={handleSubmit}>
          {/* Name Fields */}
          <div className="grid gap-6 mb-6 md:grid-cols-2">
            <div>
              <label className="block text-gray-600">First Name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>
            <div>
              <label className="block text-gray-600">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>
          </div>

          {/* Email Field */}
          <div className="mb-6">
            <label className="block text-gray-600">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>

          {/* Address Field */}
          <div className="mb-6">
            <label className="block text-gray-600">Address</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>

          {/* Password Fields */}
          <h3 className="text-lg font-semibold text-gray-700 mt-8 mb-4">
            Password Changes
          </h3>
          <div className="grid gap-6 mb-6">
            <input
              type="password"
              name="currentPassword"
              placeholder="Current Password"
              value={formData.currentPassword}
              onChange={handleChange}
              className="p-2 w-full border rounded-md"
            />
            <input
              type="password"
              name="newPassword"
              placeholder="New Password"
              value={formData.newPassword}
              onChange={handleChange}
              className="p-2 w-full border rounded-md"
            />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm New Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="p-2 w-full border rounded-md"
            />
          </div>

          {/* Save Button */}
          <div className="flex justify-end gap-4">
            <button
              type="button"
              className="bg-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-400"
              onClick={() => navigate('/')}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-red-500 text-white py-2 px-6 rounded-md hover:bg-red-600"
            >
              Save Changes
            </button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default ProfileEdit;
