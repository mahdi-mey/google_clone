import Image from "next/image"
import Link from "next/link"
import React from "react"
import SearchBox from "./SearchBox"
import SearchHeaderOptions from "./SearchHeaderOptions"

export default function SearchHeader() {
  return (
    <>
      <header className="sticky top-0 px-2 flex flex-row items-center justify-center gap-1.5 bg-white py-3 sm:justify-around sm:gap-0">
        <Link href="/">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png"
            alt="Google Logo"
            className="w-24 sm:w-32"
            width={128}
            height={44}
          />
        </Link>
        <SearchBox />
        <button className="w-28 rounded-lg bg-blue-500 px-3 py-1.5 font-bold text-white sm:px-7 sm:py-3 whitespace-nowrap">
          Sign In
        </button>
      </header>
      <SearchHeaderOptions />
    </>
  )
}