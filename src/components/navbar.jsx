import React, { useState } from "react";
import { SlBasket } from "react-icons/sl";
import Drawer from "./drawer";

function Navbar({ searchTerm, setSearchTerm, isDrawerOpen, setIsDrawerOpen,basket ,setBasket }) {


  return (
    <>
      <nav className="bg-white border-b dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          {/* Logo and Basket */}
          <div className="flex items-center">
            <div className="indicator">
              <button
                onClick={() => setIsDrawerOpen(!isDrawerOpen)} // Toggle drawer visibility
                className="transition-transform duration-200 hover:scale-105"
              >
                <span className="absolute top-2 left-1 indicator-item badge badge-error text-white">{basket?.length}</span>

                <SlBasket className="text-3xl" />
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-search"
            aria-expanded="false"
            onClick={() => {
              const menu = document.getElementById('navbar-search');
              menu.classList.toggle('hidden');
            }}
          >
   <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
          </button>

          {/* Search Input */}
          <div
            className="hidden w-full md:flex md:w-[50%] md:order-2 my-2"
            id="navbar-search"
          >
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-4  h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
                <span className="sr-only">Search icon</span>
              </div>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                }}
                id="search-navbar"
                className="block rounded-none w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300  bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search..."
              />
            </div>
          </div>
        </div>
      </nav>
      
      <Drawer setIsDrawerOpen={setIsDrawerOpen} isDrawerOpen={isDrawerOpen} setBasket={setBasket} basket={basket} />

      </>
    
  );
}

export default Navbar;
