

// import React from 'react';
// import { FaStar, FaHeart, FaRegHeart } from 'react-icons/fa';
// import { addToCart } from '../redux/cartSlice';
// import { addToWishlist, removeFromWishlist } from '../redux/WishlistSlice';
// import { useDispatch, useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';

// import { Snackbar, Alert } from '@mui/material';
// const ProductCard = ({ product }) => {
//   const dispatch = useDispatch();
//   const wishlist = useSelector((state) => state.wishlist.wishlist);

//   const handleAddToCart = (e, product) => {
//     e.stopPropagation();
//     e.preventDefault();
//     dispatch(addToCart(product));
//     alert('Product Added Successfully');
//   };

//   const isInWishlist = wishlist.some((item) => item.id === product.id);

//   const handleWishlistToggle = (e) => {
//     e.stopPropagation();
//     e.preventDefault();
//     if (isInWishlist) {
//       dispatch(removeFromWishlist(product));
//       alert('Removed from Wishlist');
//     } else {
//       dispatch(addToWishlist(product));
//       alert('Added to Wishlist');
//     }
//   };

//   return (
//     <Link to={`/product/${product.id}`}>
//       <div className='bg-white p-4 shadow rounded relative border transform transition-transform duration-300 hover:scale-105'>
//         <img
//           src={product.image}
//           alt={product.name}
//           className='w-full h-40 object-contain mb-4'
//         />
//         <h3 className='text-lg font-semibold'>{product.name}</h3>
//         <p className='flex items-center mt-2'>${product.price}</p>
//         <div className='flex items-center mt-2'>
//           <FaStar className='text-yellow-500' />
//           <FaStar className='text-yellow-500' />
//           <FaStar className='text-yellow-500' />
//           <FaStar className='text-yellow-500' />
//         </div>

//         {/* Add to Cart Button */}
//         <div
//           className='absolute bottom-4 right-2 flex items-center justify-center w-8 h-8 bg-red-600 group text-white text-sm rounded-full hover:w-32 hover:bg-red-700 transition-all'
//           onClick={(e) => handleAddToCart(e, product)}
//         >
//           <span className='group-hover:hidden'>+</span>
//           <span className='hidden group-hover:block'>Add to Cart</span>
//         </div>

//         {/* Wishlist Icon */}
//         <div
//           className='absolute top-4 right-4 cursor-pointer'
//           onClick={handleWishlistToggle}
//         >
//           {isInWishlist ? (
//             <FaHeart className='text-red-600' />
//           ) : (
//             <FaRegHeart className='text-gray-400' />
//           )}
//         </div>
//       </div>
//     </Link>
//   );
// };

// export default ProductCard;
import React, { useState } from 'react';
import { FaStar, FaHeart, FaRegHeart } from 'react-icons/fa';
import { addToCart } from '../redux/cartSlice';
import { addToWishlist, removeFromWishlist } from '../redux/WishlistSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Snackbar, Alert } from '@mui/material';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.wishlist.wishlist);

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success', // 'success' | 'error' | 'info' | 'warning'
  });

  const handleSnackbarClose = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  const handleAddToCart = (e, product) => {
    e.stopPropagation();
    e.preventDefault();
    dispatch(addToCart(product));
    setSnackbar({
      open: true,
      message: 'Product Added Successfully',
      severity: 'success',
    });
  };

  const isInWishlist = wishlist.some((item) => item.id === product.id);

  const handleWishlistToggle = (e) => {
    e.stopPropagation();
    e.preventDefault();
    if (isInWishlist) {
      dispatch(removeFromWishlist(product));
      setSnackbar({
        open: true,
        message: 'Removed from Wishlist',
        severity: 'info',
      });
    } else {
      dispatch(addToWishlist(product));
      setSnackbar({
        open: true,
        message: 'Added to Wishlist',
        severity: 'success',
      });
    }
  };

  return (
    <>
      <Link to={`/product/${product.id}`}>
        <div className='bg-white p-4 shadow rounded relative border transform transition-transform duration-300 hover:scale-105'>
          <img
            src={product.image}
            alt={product.name}
            className='w-full h-40 object-contain mb-4'
          />
          <h3 className='text-lg font-semibold'>{product.name}</h3>
          <p className='flex items-center mt-2'>${product.price}</p>
          <div className='flex items-center mt-2'>
            <FaStar className='text-yellow-500' />
            <FaStar className='text-yellow-500' />
            <FaStar className='text-yellow-500' />
            <FaStar className='text-yellow-500' />
          </div>

          {/* Add to Cart Button */}
          <div
            className='absolute bottom-4 right-2 flex items-center justify-center w-8 h-8 bg-red-600 group text-white text-sm rounded-full hover:w-32 hover:bg-red-700 transition-all'
            onClick={(e) => handleAddToCart(e, product)}
          >
            <span className='group-hover:hidden'>+</span>
            <span className='hidden group-hover:block'>Add to Cart</span>
          </div>

          {/* Wishlist Icon */}
          <div
            className='absolute top-4 right-4 cursor-pointer'
            onClick={handleWishlistToggle}
          >
            {isInWishlist ? (
              <FaHeart className='text-red-600' />
            ) : (
              <FaRegHeart className='text-gray-400' />
            )}
          </div>
        </div>
      </Link>

      {/* Snackbar Component */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={handleSnackbarClose}
          severity={snackbar.severity}
          sx={{ width: '100%' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </>
  );
};

export default ProductCard;
