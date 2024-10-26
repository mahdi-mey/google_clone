import React from "react"

const LoadingPage = () => {
  return (
    <div className="mt-4 pb-40 sm:pb-24">
      <div className="grid grid-cols-1 space-x-4 px-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {Array.from({ length: 8 }).map((_, index) => (
          <div className="mb-8" key={index}>
            <div className="group h-60 animate-pulse rounded-lg bg-gray-200"></div>
            <div className="mt-2 h-6 animate-pulse rounded bg-gray-200"></div>
            <div className="mt-1 h-4 w-3/4 animate-pulse rounded bg-gray-200"></div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default LoadingPage
