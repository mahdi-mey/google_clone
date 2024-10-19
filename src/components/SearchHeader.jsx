import Image from "next/image";
import Link from "next/link";
import React from "react";
import SearchBox from "./SearchBox";
import SearchHeaderOptions from "./SearchHeaderOptions";

export default function SearchHeader() {
  return (
    <>
      <header className="sticky top-0 bg-white flex flex-row items-center justify-around py-3">
        <Link href="/">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png"
            alt="Google Logo"
            width={100}
            height={33}
          />
        </Link>
        <SearchBox />
        <button className="sm:py-3 sm:px-7 py-1.5 px-3 rounded-lg bg-blue-500 text-white font-bold">
          Sign In
        </button>
      </header>
      <SearchHeaderOptions />
    </>
  );
}
