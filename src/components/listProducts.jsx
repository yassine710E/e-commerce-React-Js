import React from 'react';
import Product from './product';
import SkeletonLoader from './loader';
import NoAvailableProducts from './noAvailableProducts';

function ListProducts({ data, isLoading, isError, error, isFetching, setLimit, limit ,isDrawerOpen,setBasket,basket }) {
    if (isLoading) return <SkeletonLoader />;
    if (isError) return <div>Error: {error.message}</div>;

    const hasProducts = data?.products?.length > 0;
 
    //
    return (
        <div className={`py-2  transition-opacity duration-300 ${
            isDrawerOpen ? "opacity-50" : "opacity-100"
        }`}>
            {hasProducts ? (
                <div className="mx-auto max-w-2xl px-4  sm:px-6 lg:max-w-7xl lg:px-8 pb-4">
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900">Products</h2>
                    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 ">
                        {data.products.map((item) => (
                            <Product key={item.id} productData={item} setBasket={setBasket} basket={basket} />
                        ))}
                    </div>
                </div>
            ) : (
                <NoAvailableProducts />
            )}

            {isFetching && <SkeletonLoader />}

            {limit <= (data?.total || 0) && (
                <div className="text-center my-5 ">
                    <button
                        className="px-7 py-2 border-2 text-red-500 border-red-500 hover:bg-red-500 hover:text-white"
                        onClick={() => setLimit((prev) => prev + 8)}
                    >
                        Load More
                    </button>
                </div>
            )}
        </div>
    );
}

export default ListProducts;
