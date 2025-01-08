import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaStar, FaHeart } from 'react-icons/fa';
import { addToCart } from '../redux/cartSlice';
import { removeFromWishlist } from '../redux/WishlistSlice';

const Wishlist = () => {
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.wishlist.wishlist);

  const handleAddToCart = (e, product) => {
    e.stopPropagation();
    e.preventDefault();
    dispatch(addToCart(product));
    alert('Product Added Successfully');
  };

  const handleWishlistToggle = (e, product) => {
    e.stopPropagation();
    e.preventDefault();
    dispatch(removeFromWishlist(product));
    alert('Removed from Wishlist');
  };

  return (
    <div className="container mx-auto py-8 px-12">
      <h2 className="text-3xl font-bold mb-8 text-center">My Wishlist</h2>
      {wishlist.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {wishlist.map((product) => (
            <div key={product.id} className="bg-white p-3 shadow-md rounded relative border transform transition-transform duration-300 hover:scale-105">
              <Link to={`/product/${product.id}`}>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-32 object-contain mb-4"
                />
                <h3 className="text-sm font-semibold">{product.name}</h3>
                <p className="flex items-center mt-2 text-sm">${product.price}</p>

                {/* Star Rating */}
                <div className="flex items-center mt-2">
                  <FaStar className="text-yellow-500 text-xs" />
                  <FaStar className="text-yellow-500 text-xs" />
                  <FaStar className="text-yellow-500 text-xs" />
                  <FaStar className="text-yellow-500 text-xs" />
                </div>
              </Link>

              {/* Add to Cart Button */}
              <div
                className="absolute bottom-2 right-2 flex items-center justify-center w-6 h-6 bg-red-600 group text-white text-xs rounded-full hover:w-24 hover:bg-red-700 transition-all"
                onClick={(e) => handleAddToCart(e, product)}
              >
                <span className="group-hover:hidden">+</span>
                <span className="hidden group-hover:block">Add to Cart</span>
              </div>

              {/* Wishlist Icon */}
              <div
                className="absolute top-2 right-2 cursor-pointer"
                onClick={(e) => handleWishlistToggle(e, product)}
              >
                <FaHeart className="text-red-600 text-lg" />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500 text-center text-lg">Your wishlist is empty.</p>
      )}
    </div>
  );
};

export default Wishlist;
