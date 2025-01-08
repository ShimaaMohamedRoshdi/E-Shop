
import React from 'react';
import { FaHeadset, FaLock, FaShippingFast, FaTag } from 'react-icons/fa'; 
import { FaMoneyBill1Wave } from 'react-icons/fa6'
import  '../css/style.css'
const InfoSection = () => {
    const infoItems = [
        {
            icon: <FaShippingFast className='text-3xl text-red-600' />,
            title: 'Free Shipping',
            description: 'Get your orders delivered with no extra cost',
        },
        {
            icon: <FaHeadset className='text-3xl text-red-600' />,
            title: 'Support 24/7',
            description: 'We are here to assist you anytime',
        },
        {
            icon: <FaMoneyBill1Wave className='text-3xl text-red-600' />,
            title: '100% Money Back',
            description: 'Full refund if you are not satisfied',
        },
        {
            icon: <FaLock className='text-3xl text-red-600' />,
            title: 'Secure Payment',
            description: 'Your payment is secure with us',
        },
        {
            icon: <FaTag className="text-3xl text-red-600" />,
            title: 'Discount',
            description: 'Enjoy the best prices on our products',
        }
    ];

    return (

        <div className='bg-white pb-8 pt-12 hide-scrollbar'>
        <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4'>
    

                {infoItems.map((item, index) => (
                    <div key={index} className='flex flex-col items-center text-center p-4 border rounded-lg shadow-md 
                        transform transition-transform duration-300 hover:scale-105 cursor-pointer'>
                        {item.icon}
                        <h3 className='mt-4 text-xl font-semibold'>{item.title}</h3>
                       
                    </div>
                ))}
            </div>
        </div>
    );
};

export default InfoSection;
