
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { FaTrashAlt } from 'react-icons/fa';
import EmptyCart from '../assets/Images/emptycart.png';
import Modal from '../components/Modal';
import ChangeAddress from '../components/ChangeAddress';
import { decreaseQuantity, increaseQuantity, removeFromCart } from '../redux/cartSlice';

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const [address, setAddress] = useState('Main Street, 0012');
  const [isModelOpen, setIsModelOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="container mx-auto py-8 min-h-96 px-4 md:px-8 lg:px-16">
      {cart.products.length > 0 ? (
        <div>
          <h3 className="text-2xl font-semibold mb-6 text-center md:text-left">SHOPPING CART</h3>

          <div className="flex flex-col md:flex-row justify-between md:space-x-8">
            {/* Cart Items Section */}
            <div className="md:w-2/3">
              <div className="hidden md:flex justify-between border-b items-center mb-4 text-xs font-bold">
                <p>PRODUCT</p>
                <div className="flex space-x-8">
                  <p>PRICE</p>
                  <p>QUANTITY</p>
                  <p>SUBTOTAL</p>
                  <p>REMOVE</p>
                </div>
              </div>

              <div>
                {cart.products.map((product) => (
                  <div key={product.id} className="flex flex-col md:flex-row items-center justify-between p-3 border-b space-y-4 md:space-y-0">
                    {/* Product Details */}
                    <div className="flex items-center space-x-4 w-full md:w-auto">
                      <img src={product.image} alt={product.name} className="w-20 h-20 object-contain rounded" />
                      <div className="flex-1 md:ml-4">
                        <h3 className="text-base font-semibold">{product.name}</h3>
                      </div>
                    </div>

                    {/* Price, Quantity, Subtotal, Remove */}
                    <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-8 mt-4 md:mt-0">
                      <p className="text-sm">${product.price}</p>
                      <div className="flex items-center border">
                        <button
                          className="text-lg font-bold px-2 border-r"
                          onClick={() => dispatch(decreaseQuantity(product.id))}
                        >
                          -
                        </button>
                        <p className="text-lg px-3">{product.quantity}</p>
                        <button
                          className="text-lg font-bold px-2 border-l"
                          onClick={() => dispatch(increaseQuantity(product.id))}
                        >
                          +
                        </button>
                      </div>
                      <p className="text-sm">${(product.quantity * product.price).toFixed(2)}</p>
                      <button
                        className="text-red-500 hover:text-red-700"
                        onClick={() => dispatch(removeFromCart(product.id))}
                      >
                        <FaTrashAlt />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Cart Summary Section */}
            <div className="md:w-1/3 bg-white p-5 rounded-lg shadow-md border mt-8 md:mt-0">
              <h3 className="text-sm font-semibold mb-4">CART TOTALS</h3>
              <div className="flex justify-between mb-4 border-b pb-2">
                <span className="text-sm">Total Items:</span>
                <span>{cart.totalQuantity}</span>
              </div>
              <div className="mb-4 border-b pb-4">
                <p>Shipping:</p>
                <p className="ml-2">Shipping to:</p>
                <span className="text-xs font-bold">{address}</span>
                <button
                  className="text-blue-500 hover:underline ml-2"
                  onClick={() => setIsModelOpen(true)}
                >
                  Change address
                </button>
              </div>
              <div className="flex justify-between mb-4">
                <span>Total Price:</span>
                <span>${cart.totalPrice.toFixed(2)}</span>
              </div>
              <button
                className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700 transition"
                onClick={() => navigate('/checkout')}
              >
                Proceed to Checkout
              </button>
            </div>
          </div>

          {/* Address Modal */}
          <Modal isModelOpen={isModelOpen} setIsModelOpen={setIsModelOpen}>
            <ChangeAddress setAddress={setAddress} setIsModelOpen={setIsModelOpen} />
          </Modal>
        </div>
      ) : (
        <div className="flex justify-center">
          <img src={EmptyCart} alt="Empty Cart" className="h-64 w-auto" />
        </div>
      )}
    </div>
  );
};

export default Cart;
