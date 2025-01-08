
// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom'; 
// import { FaSearch, FaShoppingCart, FaHeart, FaUser } from 'react-icons/fa';
// import { useDispatch, useSelector } from 'react-redux';
// import Modal from './Modal';

// import { setSearchTerm } from '../redux/productSlice';

// const Navbar = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [isLogin, setIsLogin] = useState(true);
//   const [search, setSearch] = useState('');
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const products = useSelector(state => state.cart.products);
//   const wishlistItems = useSelector(state => state.wishlist.wishlist);

//   const handleSearch = (e) => {
//     e.preventDefault();
//     if (search.trim()) {
//       dispatch(setSearchTerm(search));
//       navigate('/filter-data');
//       setSearch('');
//     }
//   };

//   const openSignUp = () => {
//     setIsLogin(false);
//     setIsModalOpen(true);
//   };

//   const openLogin = () => {
//     setIsLogin(true);
//     setIsModalOpen(true);
//   };

//   return (
//     <nav className='bg-white shadow-md'>
//       <div className='container mx-auto px-4 md:px-16 lg:px-24 py-4 flex justify-between items-center'>
//         {/* Logo */}
//         <div className='text-lg font-bold'>
//           <Link to="/">E-SHOP</Link> 
//         </div>

//         {/* Search Bar */}
//         <div className='flex-1 mx-4 relative'>
//           <form onSubmit={handleSearch}> 
//             <input 
//               type="text" 
//               value={search}
//               placeholder='Search Product'
//               className='w-full border py-2 px-4 rounded-l'
//               onChange={(e) => setSearch(e.target.value)}
//               aria-label='Search Products'
//             />
//             <button
//               type="submit"
//               className="absolute top-3 right-3 text-red-500"
//               onClick={handleSearch}
//               aria-label='Search'
//             >
//               <FaSearch />
//             </button>
//           </form>
//         </div>

//         {/* User Options */}
//         <div className='flex items-center space-x-4'>
//           {/* Wishlist Link */}
//           {/* <Link to="/wishlist" className='relative' aria-label='Wishlist'>
//             <FaHeart className='text-lg text-red-500' />
//           </Link> */}
//              <Link to="/wishlist" className='relative'>
//             <FaHeart className='text-lg text-red-500' />
//             {wishlistItems.length > 0 && (
//               <span className="absolute -top-2 -right-2 text-xs w-4 h-4 bg-red-600 rounded-full flex items-center justify-center text-white">
//                 {wishlistItems.length}
//               </span>
//             )}
//           </Link>

//           {/* Cart Icon with Badge */}
//           <Link to="/cart" className='relative'>
//             <FaShoppingCart className='text-lg' />
//             {products.length > 0 && (
//               <span className="absolute -top-2 -right-2 text-xs w-4 h-4 bg-red-600 rounded-full flex items-center justify-center text-white">
//                 {products.length}
//               </span>
//             )}
//           </Link>

//           {/* Login/Register Button */}
//           <button className='hidden md:block' onClick={() => setIsModalOpen(true)}>
//             {isLogin ? 'Login' : 'Register'}
//           </button>
          
//           {/* User Icon for Mobile */}
//           <button className='block md:hidden' onClick={() => setIsModalOpen(true)}>
//             <FaUser />
//           </button>
//         </div>
//       </div>

//       {/* Navbar Links */}
//       <div className='flex items-center justify-center space-x-10 py-4 text-sm font-bold'>
//         <Link to="/" className='hover:underline'>Home</Link>
//         <Link to="/shop" className='hover:underline'>Shop</Link>
//         <Link to="/contact" className='hover:underline'>Contact</Link>
//         <Link to="/about" className='hover:underline'>About</Link>
       
        
       
//       </div>

//       {/* Modal for Login/Register */}
//       {isModalOpen && (
//         <Modal isModelOpen={isModalOpen} setIsModelOpen={setIsModalOpen}>
//           {isLogin ? (
//             <Login openSignUp={openSignUp} />
//           ) : (
//             <Register openLogin={openLogin} />
//           )}
//         </Modal>
//       )}
//     </nav>
//   );
// };

// export default Navbar;


import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaSearch, FaShoppingCart, FaHeart, FaUser, FaBars, FaTimes, FaBox, FaBan, FaStar, FaSignOutAlt, FaUserCog } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchTerm } from '../redux/productSlice'; // Import the action

const Navbar = () => {
  const [search, setSearch] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Redux selectors to get cart and wishlist data
  const products = useSelector((state) => state.cart.products);
  const wishlistItems = useSelector((state) => state.wishlist.wishlist);

  const handleSearch = (e) => {
    e.preventDefault();
    if (search.trim()) {
      dispatch(setSearchTerm(search)); // Set the search term in Redux
      navigate('/filter-data'); // Navigate to the filter-data page
      setSearch('');
    }
  };

  return (
    <nav className="bg-white shadow-md py-4 relative">
      <div className="container mx-auto flex justify-between items-center px-4 md:px-16 lg:px-24">
        {/* Logo */}
        <div className="text-xl font-bold">
          <Link to="/">E-SHOP</Link>
        </div>

        {/* Search Bar */}
        <form onSubmit={handleSearch} className="hidden md:flex relative">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="What are you looking for?"
            className="border rounded-full py-2 px-4 w-64 focus:outline-none"
          />
          <button
            type="submit"
            className="absolute top-1/2 transform -translate-y-1/2 right-3 text-gray-600"
          >
            <FaSearch />
          </button>
        </form>

        {/* Icons Section */}
        <div className="flex items-center space-x-4 md:space-x-6">
          {/* Wishlist Icon with Counter */}
          <Link to="/wishlist" className="relative text-gray-600 text-xl">
            <FaHeart />
            {wishlistItems.length > 0 && (
              <span className="absolute -top-2 -right-2 text-xs w-5 h-5 bg-red-600 rounded-full flex items-center justify-center text-white">
                {wishlistItems.length}
              </span>
            )}
          </Link>

          {/* Cart Icon with Counter */}
          <Link to="/cart" className="relative text-gray-600 text-xl">
            <FaShoppingCart />
            {products.length > 0 && (
              <span className="absolute -top-2 -right-2 text-xs w-5 h-5 bg-red-600 rounded-full flex items-center justify-center text-white">
                {products.length}
              </span>
            )}
          </Link>

          {/* User Icon with Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
              onBlur={() => setIsUserMenuOpen(false)}
              className="text-gray-600 text-xl hidden md:block"
            >
              <FaUser />
            </button>

            {/* Dropdown Menu */}
            {isUserMenuOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-gray-800 text-white rounded-lg py-2 shadow-lg z-20"  >
{/*                 
                   <button
            onClick={() => {
            
            }}
            className="flex items-center w-full px-4 py-2 hover:bg-gray-700"
       >
            <FaUserCog className="mr-2  " onClick={()=>navigate('/profileEdit')}/> Profile Edit
          </button> */}

        {/* Profile Edit Button */}
        <button
          onClick={() => navigate('/profileEdit')}
          className="flex items-center w-full px-4 py-2 hover:bg-gray-700"
        >
          <FaUserCog className="mr-2" onClick={() => navigate('/profileEdit')} /> Profile Edit
        </button>
                <Link to="/orders" className="flex items-center px-4 py-2 hover:bg-gray-700">
                  <FaBox className="mr-2" /> My Order
                </Link>
                <Link to="/cancellations" className="flex items-center px-4 py-2 hover:bg-gray-700">
                  <FaBan className="mr-2" /> My Cancellations
                </Link>
                <Link to="/reviews" className="flex items-center px-4 py-2 hover:bg-gray-700">
                  <FaStar className="mr-2" /> My Reviews
                </Link>
                <Link to="/logout" className="flex items-center px-4 py-2 hover:bg-gray-700">
                  <FaSignOutAlt className="mr-2" /> Logout
                </Link>
              </div>
            )}
          </div>

          {/* Toggle Menu Icon for Mobile */}
          <button
            className="text-gray-600 text-2xl md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Desktop Navbar Links */}
      <div className="hidden md:flex items-center justify-center space-x-10 py-4 text-sm font-bold">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/shop" className="hover:underline">Shop</Link>
        <Link to="/contact" className="hover:underline">Contact</Link>
        <Link to="/about" className="hover:underline">About</Link>
        <Link to="/register" className="hover:underline">Register</Link>
      </div>

      {/* Mobile Navigation Links */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg py-4">
          <div className="flex flex-col items-center space-y-4">
            <Link to="/" className="hover:underline" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
            <Link to="/shop" className="hover:underline" onClick={() => setIsMobileMenuOpen(false)}>Shop</Link>
            <Link to="/contact" className="hover:underline" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
            <Link to="/about" className="hover:underline" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
            <Link to="/register" className="hover:underline" onClick={() => setIsMobileMenuOpen(false)}>Sign Up</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;






