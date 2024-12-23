import Image from "next/image"
import Link from "next/link"
import React, { Suspense } from "react"
import SearchBox from "./SearchBox"
import SearchHeaderOptions from "./SearchHeaderOptions"

export default function SearchHeader() {
  return (
    <>
      <header className="sticky top-0 flex flex-row items-center justify-center gap-1.5 bg-scene px-2 py-3 sm:justify-between sm:gap-0 sm:px-6">
        <Link href="/" className="customMargin">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png"
            alt="Google Logo"
            className="w-24 sm:w-32"
            width={128}
            height={44}
          />
        </Link>
        <Suspense fallback={<p>Loading Search Input...</p>}>
          <SearchBox />
        </Suspense>
        <button className="ml-2 w-28 whitespace-nowrap rounded-lg bg-blue-500 px-3 py-1.5 font-bold text-white sm:px-7 sm:py-3">
          Sign In
        </button>
      </header>
      <Suspense fallback={<p>Loading Search header options...</p>}>
        <SearchHeaderOptions />
      </Suspense>
    </>
  )
}
