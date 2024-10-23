"use client";

import { RxCross1 } from "react-icons/rx";
import { useSearchParams, useRouter } from "next/navigation";
import { useState, useRef } from "react";
import MicrophoneIcon from "./MicrophoneIcon";

export default function SearchBox() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const searchTerm = searchParams.get("searchTerm");
  const [term, setTerm] = useState(searchTerm || "");
  const inputRef = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();
    if (!term.trim()) return; // if term is empty, exit
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
      className="flex w-1/2 sm:w-4/6 rounded-full border border-gray-300 px-5 py-3 transition-shadow focus-within:shadow-md hover:shadow-md"
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
          className="cursor-pointer text-base text-gray-600 transition-all duration-200 active:scale-75 sm:text-lg"
        />
        <div className="mx-2 h-full w-[1px] bg-gray-400"></div>
        <MicrophoneIcon />
      </div>
    </form>
  );
}
