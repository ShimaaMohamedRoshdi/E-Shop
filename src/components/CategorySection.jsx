// import React from 'react';
// import { FaStar, FaHeart, FaRegHeart } from 'react-icons/fa';
// import { useDispatch, useSelector } from 'react-redux';
// import { addToCart } from '../redux/cartSlice';
// import { addToWishlist, removeFromWishlist } from '../redux/WishlistSlice';
// import Image21 from '../assets/Images/phone-2.png';
// import Image22 from '../assets/Images/phone-3.png';
// import Image23 from '../assets/Images/sport-running-shoes.jpg';
// import Image24 from '../assets/Images/shoes.jpg';
// import { useNavigate } from 'react-router-dom';
// const products = [
//   {
//     id: 1,
//     name: "Apple iPhone 11 Pro max",
//     price: 120,
//     oldPrice: 160,
//     discount: 40,
//     rating: 4,
//     image: Image21,
//     reviews: 88,
//   },
//   {
//     id: 2,
//     name: "Samsung Galaxy Note 10",
//     price: 960,
//     oldPrice: 1160,
//     discount: 35,
//     rating: 3.5,
//     image: Image22,
//     reviews: 75,
//   },
//   {
//     id: 3,
//     name: "Sport running shoes",
//     price: 370,
//     oldPrice: 400,
//     discount: 30,
//     rating: 5,
//     image: Image23,
//     reviews: 99,
//   },
//   {
//     id: 4,
//     name: "Converse shoes for sport",
//     price: 375,
//     oldPrice: 400,
//     discount: 25,
//     rating: 5,
//     image: Image24,
//     reviews: 99,
//   },
// ];

// const ProductGrid = () => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const wishlist = useSelector((state) => state.wishlist.wishlist);

//   const handleAddToCart = (product) => {
//     dispatch(addToCart(product));
//     alert('Product Added to Cart');
//   };

//   const isInWishlist = (productId) =>
//     wishlist.some((item) => item.id === productId);

//   const handleWishlistToggle = (product) => {
//     if (isInWishlist(product.id)) {
//       dispatch(removeFromWishlist(product));
//       alert('Removed from Wishlist');
//     } else {
//       dispatch(addToWishlist(product));
//       alert('Added to Wishlist');
//     }
//   };

//   return (
//     <div className='container mx-auto py-8'>
//       <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
//         {products.map((product) => (
//           <div
//             key={product.id}
//             className='bg-white border border-gray-200 rounded-lg shadow-lg relative p-4 hover:shadow-xl transition-transform duration-300 transform hover:-translate-y-1'
//           >
//             {/* Discount Badge */}
//             {product.discount > 0 && (
//               <div className='absolute top-2 left-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-tr-lg rounded-bl-lg'>
//                 -{product.discount}%
//               </div>
//             )}

//             {/* Wishlist Icon */}
//             <div
//               className='absolute top-2 right-2 cursor-pointer'
//               onClick={() => handleWishlistToggle(product)}
//             >
//               {isInWishlist(product.id) ? (
//                 <FaHeart className='text-red-600' />
//               ) : (
//                 <FaRegHeart className='text-gray-400' />
//               )}
//             </div>

//             {/* Product Image */}
//             <img
//               src={product.image}
//               alt={product.name}
//               className='w-full h-40 object-contain mb-4'
//             />

//             {/* Product Info */}
//             <div className='text-center'>
//               <h3 className='text-lg font-semibold mb-2'>{product.name}</h3>
//               <div className='flex justify-center items-center mb-2'>
//                 <span className='text-red-500 font-bold text-xl'>
//                   ${product.price}
//                 </span>
//                 {product.oldPrice && (
//                   <span className='text-gray-500 line-through ml-2'>
//                     ${product.oldPrice}
//                   </span>
//                 )}
//               </div>

//               {/* Ratings */}
//               <div className='flex justify-center items-center mb-2'>
//                 {[...Array(Math.floor(product.rating))].map((_, index) => (
//                   <FaStar key={index} className='text-yellow-500' />
//                 ))}
//                 {product.rating % 1 !== 0 && (
//                   <FaStar className='text-yellow-500 opacity-50' />
//                 )}
//                 <span className='text-gray-600 ml-2'>({product.reviews})</span>
//               </div>

//               {/* Add to Cart Button */}
//               <button
//                 onClick={() => handleAddToCart(product)}
//                 className='w-full bg-red-700  text-white py-2 rounded hover:bg-gray-800 transition'
//               >
//                 Add to Cart
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* View All Products Button */}
//       <div className='flex justify-center mt-8'>
//         <button className='px-6 py-2 bg-black text-white rounded  transition'
//            onClick={()=>navigate('/shop')}>
//           View All Products
//         </button>
//       </div>
//       <hr className="my-5" />
//     </div>
//   );
// };

// export default ProductGrid;
import React, { useState } from 'react';
import { FaStar, FaHeart, FaRegHeart } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import { addToWishlist, removeFromWishlist } from '../redux/WishlistSlice';
import Image21 from '../assets/Images/phone-2.png';
import Image22 from '../assets/Images/phone-3.png';
import Image23 from '../assets/Images/sport-running-shoes.jpg';
import Image24 from '../assets/Images/shoes.jpg';
import { useNavigate } from 'react-router-dom';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const products = [
  {
    id: 1,
    name: "Apple iPhone 11 Pro max",
    price: 120,
    oldPrice: 160,
    discount: 40,
    rating: 4,
    image: Image21,
    reviews: 88,
  },
  {
    id: 2,
    name: "Samsung Galaxy Note 10",
    price: 960,
    oldPrice: 1160,
    discount: 35,
    rating: 3.5,
    image: Image22,
    reviews: 75,
  },
  {
    id: 3,
    name: "Sport running shoes",
    price: 370,
    oldPrice: 400,
    discount: 30,
    rating: 5,
    image: Image23,
    reviews: 99,
  },
  {
    id: 4,
    name: "Converse shoes for sport",
    price: 375,
    oldPrice: 400,
    discount: 25,
    rating: 5,
    image: Image24,
    reviews: 99,
  },
];

const ProductGrid = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.wishlist.wishlist);

  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });

  const handleSnackbarClose = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    setSnackbar({ open: true, message: 'Product Added to Cart', severity: 'success' });
  };

  const isInWishlist = (productId) =>
    wishlist.some((item) => item.id === productId);

  const handleWishlistToggle = (product) => {
    if (isInWishlist(product.id)) {
      dispatch(removeFromWishlist(product));
      setSnackbar({ open: true, message: 'Removed from Wishlist', severity: 'info' });
    } else {
      dispatch(addToWishlist(product));
      setSnackbar({ open: true, message: 'Added to Wishlist', severity: 'success' });
    }
  };

  return (
    <div className='container mx-auto py-8'>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
        {products.map((product) => (
          <div
            key={product.id}
            className='bg-white border border-gray-200 rounded-lg shadow-lg relative p-4 hover:shadow-xl transition-transform duration-300 transform hover:-translate-y-1'
          >
            {product.discount > 0 && (
              <div className='absolute top-2 left-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-tr-lg rounded-bl-lg'>
                -{product.discount}%
              </div>
            )}

            <div
              className='absolute top-2 right-2 cursor-pointer'
              onClick={() => handleWishlistToggle(product)}
            >
              {isInWishlist(product.id) ? (
                <FaHeart className='text-red-600' />
              ) : (
                <FaRegHeart className='text-gray-400' />
              )}
            </div>

            <img
              src={product.image}
              alt={product.name}
              className='w-full h-40 object-contain mb-4'
            />

            <div className='text-center'>
              <h3 className='text-lg font-semibold mb-2'>{product.name}</h3>
              <div className='flex justify-center items-center mb-2'>
                <span className='text-red-500 font-bold text-xl'>
                  ${product.price}
                </span>
                {product.oldPrice && (
                  <span className='text-gray-500 line-through ml-2'>
                    ${product.oldPrice}
                  </span>
                )}
              </div>

              <div className='flex justify-center items-center mb-2'>
                {[...Array(Math.floor(product.rating))].map((_, index) => (
                  <FaStar key={index} className='text-yellow-500' />
                ))}
                {product.rating % 1 !== 0 && (
                  <FaStar className='text-yellow-500 opacity-50' />
                )}
                <span className='text-gray-600 ml-2'>({product.reviews})</span>
              </div>

              <button
                onClick={() => handleAddToCart(product)}
                className='w-full bg-red-700 text-white py-2 rounded hover:bg-gray-800 transition'
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className='flex justify-center mt-8'>
        <button
          className='px-6 py-2 bg-black text-white rounded transition'
          onClick={() => navigate('/shop')}
        >
          View All Products
        </button>
      </div>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={handleSnackbarClose} severity={snackbar.severity}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default ProductGrid;

