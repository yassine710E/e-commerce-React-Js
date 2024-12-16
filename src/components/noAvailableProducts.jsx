import React from 'react';

function NoAvailableProducts() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            {/* Icon or Illustration */}
            <div className="bg-red-500 text-white p-5 rounded-full shadow-md">
                <svg
                    className="w-16 h-16"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 10h11M9 21H3v-3a9 9 0 019-9V3a9 9 0 0118 0v6h-3"
                    />
                </svg>
            </div>

            {/* Title */}
            <h1 className="text-2xl md:text-3xl text-gray-800 font-semibold mt-6">
                No Products Available
            </h1>

            {/* Message */}
            <p className="text-gray-600 mt-4 text-center max-w-md">
                We're sorry, but it looks like there are no products available at the moment. 
                Please check back later or explore other categories.
            </p>

            {/* Action Button */}
            <button
                className="p-2 border-2 text-red-500 border-red-500 hover:bg-red-500 hover:text-white px-7"
                onClick={() => window.location.reload()}
            >
                Refresh Page
            </button>
        </div>
    );
}

export default NoAvailableProducts;
