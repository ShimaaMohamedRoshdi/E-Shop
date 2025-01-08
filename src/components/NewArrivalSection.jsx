import React from 'react';
import img1 from '../assets/Images/11.jpg';
import img2 from '../assets/Images/12.jpg';
import img3 from '../assets/Images/13.jpg';
import img4 from '../assets/Images/14.jpg';
import img5 from '../assets/Images/15.jpg';

const NewArrival = () => {
  const products = [
    {
      id: 1,
      image: img1,
      title: 'PlayStation 5',
      description: 'Black and White version of the PS5 coming out on sale.',
      
    },
    {
      id: 2,
      image: img2,
      title: 'Women\'s Collections',
      description: 'Featured women\'s collections that give you another vibe.',
      
    },
    {
      id: 3,
      image: img3,
      title: 'Speakers',
      description: 'Amazon wireless speakers',
      
    },
    {
      id: 4,
      image: img4,
      title: 'Perfume',
      description: 'GUCCI INTENSE OUD EDP',
      
    },
    {
      id: 5,
      image: img5,
      title: 'Smart Watches',
      description: 'Latest Smart Watches available',
      
    },
  ];

  return (
    <div className="container mx-auto px-4 md:px-8 lg:px-16 py-8">
      {/* Section Header */}
      <div className="mb-8">
        <span className="text-red-500 font-semibold text-sm inline-block mb-2">Featured</span>
        <h2 className="text-3xl font-bold">New Arrival</h2>
      </div>

      {/* Product Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Large Product */}
        <div className="lg:col-span-2 relative">
          <div className="relative overflow-hidden rounded-lg h-[400px] sm:h-[400px]">
            <img
              src={products[0].image}
              alt={products[0].title}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-4 left-4 text-white bg-black bg-opacity-50 p-4 rounded">
              <h3 className="text-xl font-semibold">{products[0].title}</h3>
              <p className="text-sm">{products[0].description}</p>
              <a href="#" className="text-sm underline mt-2 inline-block">{products[0].linkText}</a>
            </div>
          </div>
        </div>

        {/* Smaller Products - 2x2 Grid */}
        <div className="grid grid-cols-2 gap-4">
          {products.slice(1).map((product) => (
            <div key={product.id} className="relative overflow-hidden rounded-lg h-[200px] sm:h-[250px]">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-4 text-white bg-black bg-opacity-50 p-3 rounded">
                <h3 className="text-lg font-semibold">{product.title}</h3>
                <p className="text-sm">{product.description}</p>
                <a href="#" className="text-sm underline mt-2 inline-block">{product.linkText}</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewArrival;
