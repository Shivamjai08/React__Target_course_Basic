import React from 'react'
export default function Card() {
    return (
        <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="/">
                <img className="p-8 rounded-t-lg" src="data:image/jpeg;base64,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" alt="product_image1" />
            </a>
            <div className="px-5 pb-5">
                <a href="/">
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                        BMW Series 7 GPS, Aluminium Case, Starlight Sport
                    </h5>
                </a>
                <div className="flex items-center mt-2.5 mb-5">
                    <svg
                        className="w-4 h-4 text-yellow-300 mr-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                        className="w-4 h-4 text-yellow-300 mr-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                        className="w-4 h-4 text-yellow-300 mr-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                        className="w-4 h-4 text-yellow-300 mr-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                        className="w-4 h-4 text-gray-200 dark:text-gray-600"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                        4.0
                    </span>
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">$599</span>
                    <a
                        href="/"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Add to cart
                    </a>
                </div>
            </div>
        </div>
    );
}
