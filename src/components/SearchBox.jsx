"use client";

import { BsFillMicFill } from "react-icons/bs";
import { RxCross1 } from "react-icons/rx";
import { useSearchParams, useRouter } from "next/navigation";
import { useState, useRef } from "react";

export default function SearchBox() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const searchTerm = searchParams.get("searchTerm");
  const [term, setTerm] = useState(searchTerm || "");
  const inputRef = useRef(null)

  function handleSubmit(e) {
    e.preventDefault();
    if (!term.trim()) return;
    router.push(`/search/web?searchTerm=${term}`);
  }

  // Function to clear input and focus it
  function clearInput() {
    setTerm("");
    inputRef.current.focus();
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-4/6 border border-gray-300 px-5 py-3 rounded-full hover:shadow-md focus-within:shadow-md transition-shadow"
    >
      <input
        type="text"
        onChange={(e) => setTerm(e.target.value)}
        value={term}
        ref={inputRef} 
        className="flex-grow focus:outline-none"
      />
      <div className="flex flex-row items-center">
        <RxCross1
          onClick={clearInput}
          className="sm:text-lg text-base text-gray-600 cursor-pointer transition-all duration-200 active:scale-75"
        />
        <div className="bg-gray-400 w-[1px] h-full mx-2"></div>
        <BsFillMicFill className="sm:text-lg text-base text-gray-600 cursor-pointer transition-all duration-200 active:scale-75" />
      </div>
    </form>
  );
}
