import React from "react";

const LoadingPage = () => {
  return (
    <div className="sm:pb-24 pb-40 mt-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-3 space-x-4">
        {Array.from({ length: 8 }).map((_, index) => (
          <div className="mb-8" key={index}>
            <div className="group bg-gray-200 animate-pulse h-60 rounded-lg"></div>
            <div className="bg-gray-200 animate-pulse h-6 mt-2 rounded"></div>
            <div className="bg-gray-200 animate-pulse h-4 mt-1 rounded w-3/4"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LoadingPage;
