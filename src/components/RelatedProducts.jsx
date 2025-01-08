import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const RelatedProducts = ({ currentProduct }) => {
    const products = useSelector((state) => state.product.products || []);

    // Check if currentProduct is correctly passed
    useEffect(() => {
        console.log("Currently Viewed Product:", currentProduct);
    }, [currentProduct]);

    if (!currentProduct) return null;

    // Improved Filtering for Related Products
    const relatedProducts = products.filter((product) => {
        // Ensure the product is not the same as the current product
        if (product.id === currentProduct.id) return false;

        // Check if they share the same category or have matching tags
        const isSameCategory = product.category === currentProduct.category;
        const hasMatchingTags = currentProduct.tags?.some((tag) => product.tags?.includes(tag));

        // Return true if either category matches or tags overlap
        return isSameCategory || hasMatchingTags;
    }).slice(0, 4); // Limit to 4 related products

    // Check if related products are correctly filtered
    useEffect(() => {
        console.log("Filtered Related Products:", relatedProducts);
    }, [relatedProducts]);

    return (
        <div className="mt-16">
            <h3 className="text-2xl font-bold mb-6">Related Products</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {relatedProducts.length > 0 ? (
                    relatedProducts.map((product) => (
                        <div key={product.id} className="bg-white shadow-md p-4 rounded-lg">
                            <Link to={`/product/${product.id}`}>
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-40 object-contain mb-4"
                                />
                                <h4 className="text-lg font-semibold">{product.name}</h4>
                                <p className="text-gray-700">${product.price.toFixed(2)}</p>
                            </Link>
                        </div>
                    ))
                ) : (
                    <p className="text-gray-500">No related products found.</p>
                )}
            </div>
        </div>
    );
};

export default RelatedProducts;

// import React from 'react'

// const RelatedProducts = () => {
//   return (
//     <div> </div>
//   )
// }

// export default RelatedProducts