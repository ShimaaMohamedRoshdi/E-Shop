// import React, { useEffect, useState } from 'react';
// import { FaQuestion, FaTruck } from 'react-icons/fa';
// import { useSelector } from 'react-redux';
// import { useParams } from 'react-router-dom';

// const ProductDetails = () => {
//     const { id } = useParams();
//     const products = useSelector(state => state.product.products || []);
//     const [product, setProduct] = useState();

//     useEffect(() => {
//         const newProduct = products.find(product => product.id.toString() === id);
//         setProduct(newProduct);
//     }, [id, products]);

//     if (!product) return <div>Loading ....</div>;

//     return (
//         <div className='container mx-auto py-8 px-4 md:px-16 lg:px-24'>
//             <div className='flex flex-col md:flex-row gap-x-16'>
//                 {/* Product Image */}
//                 <div className='md:w-1/2 py-4 shadow-md md:px-8 h-96 flex justify-center'>
//                     {product.image ? (
//                         <img src={product.image} alt={product.name} className='h-full' />
//                     ) : (
//                         <div className='h-full flex items-center justify-center text-gray-500'>No Image Available</div>
//                     )}
//                 </div>
                
//                 {/* Product Information */}
//                 <div className='md:w-1/2 p-4 shadow-md md:p-16 flex flex-col items-center gap-y-2'>
//                     <h2 className='text-3xl font-semibold mb-2'>{product.name}</h2>
//                     <p className='text-xl font-semibold text-gray-800 mb-4'>${product.price}</p>
//                     <div className='flex items-center mb-4 gap-x-2'>
//                         <input 
//                             type="number" 
//                             id="quantity" 
//                             min="1" 
//                             className='border p-1 w-16' 
//                             defaultValue={1}
//                         />
//                         <button className='bg-red-600 text-white py-1.5 px-4 hover:bg-red-800'>
//                             Add to Cart
//                         </button>
//                     </div>
//                     <div className='flex flex-col gap-y-4 mt-4'>
//                         <p className='flex items-center'>
//                             <FaTruck className="mr-1" />
//                             Delivery & Return    
//                         </p> 
//                         <p className='flex items-center'>
//                             <FaQuestion className='mr-1'/>
//                             Ask a Question
//                         </p>
//                     </div>
//                 </div>
//             </div>
            
//             <div className='mt-8'>
//                 <h3 className='text-xl font-bold mb-2'>Product Description</h3>
//                 <p>{product.description || "Product description will go here"}</p>
//             </div>
//         </div>
//     );
// };

// export default ProductDetails;











import React, { useEffect, useState } from 'react';
import { FaQuestion, FaTruck } from 'react-icons/fa';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { addToCart } from '../redux/cartSlice'; // Import your action to add to cart
import RelatedProducts from '../components/RelatedProducts';


const ProductDetails = () => {
   
    const navigate=useNavigate()
    const { id } = useParams();
    const products = useSelector(state => state.product.products || []);
    const dispatch = useDispatch();
    const [product, setProduct] = useState();
    const [quantity, setQuantity] = useState(1);
    const [isModalVisible, setIsModalVisible] = useState(false);

    useEffect(() => {
        const newProduct = products.find(product => product.id.toString() === id);
        setProduct(newProduct);
    }, [id, products]);

    if (!product) return <div>Loading ....</div>;

    const handleQuantityChange = (type) => {
        if (type === 'increase') setQuantity(quantity + 1);
        if (type === 'decrease' && quantity > 1) setQuantity(quantity - 1);
    };

    const handleAddToCart = () => {
        const itemToAdd = { ...product, quantity };
        dispatch(addToCart(itemToAdd)); // Add product to the Redux store (cart)
        setIsModalVisible(true); // Show the modal
    };

    const closeModal = () => {
        setIsModalVisible(false); // Close the modal
    };

    const handleContinueShopping = () => {
        navigate('/shop');
        closeModal(); // Close the modal and let the user continue shopping
    };

    const handleGoToCart = () => {
        // Navigate to the cart page (you can use `useNavigate` from `react-router-dom` for this)
        // Example:
        navigate('/cart');
        closeModal(); // Close the modal
    };

    return (
        <div className="container mx-auto py-8 px-4 md:px-16 lg:px-24">
            {/* Modal */}
            {isModalVisible && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-xl font-semibold mb-4">Product added to cart</h2>
                        <div className="flex justify-between">
                            <button 
                                onClick={handleContinueShopping} 
                                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 mr-2"
                            >
                                Continue Shopping
                            </button>
                            <button 
                                 onClick={handleGoToCart} 
                                className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
                              
                            >
                                Go to Cart
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <div className="flex flex-col md:flex-row gap-x-16">
                {/* Product Image */}
                <div className="md:w-1/2 py-4 shadow-md md:px-8 h-96 flex justify-center">
                    {product.image ? (
                        <img src={product.image} alt={product.name} className="h-full" />
                    ) : (
                        <div className="h-full flex items-center justify-center text-gray-500">No Image Available</div>
                    )}
                </div>

                {/* Product Information */}
                <div className="md:w-1/2 p-4 shadow-md md:p-16 flex flex-col items-center gap-y-2">
                    <h2 className="text-3xl font-semibold mb-2">{product.name}</h2>
                    <p className="text-xl font-semibold text-gray-800 mb-4">${product.price}</p>
                    <div className="flex items-center mb-4 gap-x-2">
                        <button onClick={() => handleQuantityChange('decrease')} className="border p-1">
                            <AiOutlineMinus />
                        </button>
                        <input
                            type="number"
                            id="quantity"
                            min="1"
                            className="border p-1 w-16 text-center"
                            value={quantity}
                            readOnly
                        />
                        <button onClick={() => handleQuantityChange('increase')} className="border p-1">
                            <AiOutlinePlus />
                        </button>
                    </div>
                    <button
                        onClick={handleAddToCart}
                        className="bg-red-600 text-white py-2 px-8 hover:bg-red-700 transition-colors"
                    >
                        Add to Cart
                    </button>
                    <div className="flex flex-col gap-y-4 mt-4">
                        <p className="flex items-center">
                            <FaTruck className="mr-1" />
                            Delivery & Return
                        </p>
                        <p className="flex items-center">
                            <FaQuestion className="mr-1" />
                            Ask a Question
                        </p>
                    </div>
                </div>
            </div>

            <div className="mt-8">
                <h3 className="text-xl font-bold mb-2">Product Description</h3>
                <p>{product.description || 'Product description will go here'}</p>
            </div>

               {/* Related Products Section */}
               <RelatedProducts currentProduct={product} />
        </div>
    );
};

export default ProductDetails;



















