import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export default function SkeletonLoader() {
    const skeletonCards = Array(8).fill(0);
    return (
        <div className="mx-auto max-w-2xl px-4  sm:px-6 lg:max-w-7xl lg:px-8 ">
            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                {skeletonCards.map((_, index) => (
                    <div key={index} className="group relative py-6">
                        {/* Skeleton for Image */}
                        <div className="aspect-square w-full rounded-md bg-gray-200 lg:aspect-auto lg:h-80">
                            <Skeleton className="h-full" />
                        </div>

                        {/* Skeleton for Product Details */}
                        <div className="mt-4 flex justify-between">
                            <div>
                                {/* Skeleton for Title */}
                                <h3 className="text-sm text-gray-700">
                                    <Skeleton width={120} />
                                </h3>
                                {/* Skeleton for Category */}
                                <p className="mt-1 text-sm text-gray-500">
                                    <Skeleton width={80} />
                                </p>
                            </div>
                            {/* Skeleton for Price */}
                            <p className="text-sm font-medium text-gray-900">
                                <Skeleton width={50} />
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
