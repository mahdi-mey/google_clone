import React from "react";

const LoadingWebSearchResults = () => {
  return (
    <div className="w-full mx-auto px-3 sm:pb-24 pb-40 sm:pl-[5%] md:pl-[14%] lg:pl-52">
      <p className="text-gray-600 text-sm mb-5 mt-3 animate-pulse bg-gray-200 h-5 w-80 rounded"></p>
      {Array.from({ length: 8 }).map((_, index) => (
        <div className="mb-8 max-w-xl" key={index}>
          {/* Favicon & URL placeholders */}
          <div className="group flex items-center mb-2">
            <div className="bg-gray-200 animate-pulse h-8 w-8 rounded-full mr-3"></div>
            <div className="flex flex-col">
              <div className="bg-gray-200 animate-pulse h-4 w-48 mb-1 rounded"></div>
              <div className="bg-gray-200 animate-pulse h-4 w-72 rounded"></div>
            </div>
          </div>

          {/* Title and snippet placeholders */}
          <div className="bg-gray-200 animate-pulse h-5 w-full rounded mb-1"></div>
          <div className="bg-gray-200 animate-pulse h-4 w-full rounded"></div>
        </div>
      ))}
    </div>
  );
};

export default LoadingWebSearchResults;
