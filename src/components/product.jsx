import React from 'react';
import { FaPlusCircle } from 'react-icons/fa';

function Product({ productData, setBasket, basket }) {
    return (
        <div className="group relative">
            <img
                alt={productData.title}
                src={productData.thumbnail}
                className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
                loading="lazy"
            />
            <div className="mt-4 flex justify-between">
                <div>
                    <h3 className="text-sm text-gray-700">{productData.title}</h3>
                    <p className="mt-1 text-sm text-gray-500">{productData.category}</p>
                </div>
                <div className='flex flex-col items-end '>
                    <p className="text-sm font-medium text-gray-900">{productData.price}$</p>
                    <button
                        onClick={() => {
                            const existingProduct = basket.find((item) => item.id === productData.id);
                            if (existingProduct) {
                                setBasket(basket.map(item =>
                                    item.id === productData.id
                                        ? { ...item, quantity: item.quantity + 1 }
                                        : item
                                ));
                            } else {
                                setBasket([...basket, { ...productData, quantity: 1 }]);
                            }
                        }}
                    >
                        <FaPlusCircle />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Product;
