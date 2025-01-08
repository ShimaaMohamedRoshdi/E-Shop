import React, { useRef } from 'react';
import { FaMobileAlt, FaDesktop, FaTabletAlt, FaCamera, FaHeadphones, FaGamepad } from 'react-icons/fa';
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md';

const categories = [
  { id: 1, name: 'Phones', icon: <FaMobileAlt /> },
  { id: 2, name: 'Computers', icon: <FaDesktop /> },
  { id: 3, name: 'SmartWatch', icon: <FaTabletAlt /> },
  { id: 4, name: 'Camera', icon: <FaCamera />, active: true },
  { id: 5, name: 'HeadPhones', icon: <FaHeadphones /> },
  { id: 6, name: 'Gaming', icon: <FaGamepad /> },
];

const Categories = () => {
  const scrollRef = useRef(null);

  // Function to handle scrolling
  const scroll = (direction) => {
    const { current } = scrollRef;
    if (direction === 'left') {
      current.scrollLeft -= 200;
    } else {
      current.scrollLeft += 200;
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <span className="text-red-500 font-semibold text-sm">Categories</span>
          <h2 className="text-3xl font-bold">Browse By Category</h2>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => scroll('left')}
            className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300"
          >
            <MdArrowBackIos />
          </button>
          <button
            onClick={() => scroll('right')}
            className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300"
          >
            <MdArrowForwardIos />
          </button>
        </div>
      </div>

      {/* Categories Centered */}
      <div className="flex justify-center">
        <div
          ref={scrollRef}
          className="flex overflow-x-auto gap-4 scrollbar-hide justify-center"
        >
          {categories.map((category) => (
            <div
              key={category.id}
              className={`flex flex-col items-center justify-center min-w-[150px] h-[120px] border rounded-lg ${
                category.active ? 'bg-red-500 text-white' : 'bg-white text-black'
              } cursor-pointer transition-colors duration-300 hover:shadow-lg`}
            >
              <div className="text-3xl">{category.icon}</div>
              <span className="mt-2 text-lg">{category.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
