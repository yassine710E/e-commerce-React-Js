import React from 'react';

const Drawer = ({ isDrawerOpen, setIsDrawerOpen, basket, setBasket }) => {
    return (


        <div
        className={`fixed top-0 right-0 h-full bg-gray-100 shadow-lg z-50 transform transition-transform duration-300 
            ${isDrawerOpen ? "translate-x-0" : "translate-x-full"} 
            w-full sm:w-3/4 md:w-2/3 lg:w-[40%]`}
    >
        {/* Drawer Header */}
        <div className="flex justify-between items-center p-4 border-b">
            <h2 className="text-xl font-semibold">Your Basket</h2>
            <button
                onClick={() => setIsDrawerOpen(false)} // Close drawer
                className="text-xl font-bold"
            >
                &times;
            </button>
        </div>
    
        {/* Drawer Content */}
        <div className="p-4">
            {basket?.length > 0 ? (
                basket.map((el) => (
                    <div
                        key={el.id}
                        className="flex items-center justify-between gap-4 py-2 border-b border-gray-200"
                    >
                        {/* Product Image */}
                        <div className="w-20 h-16 overflow-hidden rounded-md border border-gray-300">
                            <img
                                alt={el.title}
                                src={el.thumbnail}
                                className="h-full w-full object-cover"
                            />
                        </div>
    
                        {/* Product Details */}
                        <div className="flex-1">
                            <p className="font-medium text-gray-700 truncate">{el.title}</p>
                            <p className="text-sm text-gray-500">{el.category}</p>
                        </div>
    
                        {/* Product Price */}
                        <div>
                            <p className="font-semibold text-gray-900">
                                ${(el.price * el.quantity).toFixed(2)}
                            </p>
                        </div>
    
                        {/* Remove Button */}
                        <div>
                            <button
                                onClick={() => {
                                    const new_data = basket.filter((e) => e.id !== el.id);
                                    setBasket(new_data);
                                }}
                                className="text-red-500 hover:text-red-700 transition-colors duration-200"
                                title="Remove item"
                            >
                                ✕
                            </button>
                        </div>
                    </div>
                ))
            ) : (
                <p className="text-center text-gray-500">Your basket is empty</p>
            )}
        </div>
    </div>
    
    );
};

export default Drawer;
