import React from "react";

const LoadingWebSearchResults = () => {
  return (
    <div className="mx-auto w-full px-3 pb-40 sm:pb-24 sm:pl-[5%] md:pl-[14%] lg:pl-52">
      <p className="mb-5 mt-3 h-5 w-80 animate-pulse rounded bg-gray-200 text-sm text-gray-600"></p>
      {Array.from({ length: 8 }).map((_, index) => (
        <div className="mb-8 max-w-xl" key={index}>
          {/* Favicon & URL placeholders */}
          <div className="group mb-2 flex items-center">
            <div className="mr-3 h-8 w-8 animate-pulse rounded-full bg-gray-200"></div>
            <div className="flex flex-col">
              <div className="mb-1 h-4 w-48 animate-pulse rounded bg-gray-200"></div>
              <div className="h-4 w-72 animate-pulse rounded bg-gray-200"></div>
            </div>
          </div>

          {/* Title and snippet placeholders */}
          <div className="mb-1 h-5 w-full animate-pulse rounded bg-gray-200"></div>
          <div className="h-4 w-full animate-pulse rounded bg-gray-200"></div>
        </div>
      ))}
    </div>
  );
};

export default LoadingWebSearchResults;
