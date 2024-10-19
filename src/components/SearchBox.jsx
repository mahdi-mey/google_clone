"use client";

import { BsFillMicFill } from "react-icons/bs";
import { RxCross1 } from "react-icons/rx";
import { useSearchParams, useRouter } from "next/navigation";
import { useState } from "react";

export default function SearchBox() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const searchTerm = searchParams.get("searchTerm");
  const [term, setTerm] = useState(searchTerm | "");

  function handleSubmit(e) {
    e.preventDefault();
    if(!term.trim()) return
    router.push(`/search/web?searchTerm=${term}`);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-4/6 border border-gray-300 px-5 py-3 rounded-full hover:shadow-md focus-within:shadow-md transition-shadow"
    >
      <input
        type="text"
          onChange={(e) => setTerm(e.target.value)}
        className="flex-grow focus:outline-none "
        defaultValue={searchTerm}
      />
      <div className="flex flex-row items-center">
        <RxCross1
          onClick={() => console.log("what?")}
          className="sm:text-lg text-base text-gray-600 cursor-pointer transition-all duration-200 active:scale-75"
        />
        <div className="bg-gray-400 w-[1px] h-full mx-2"></div>
        <BsFillMicFill className="sm:text-lg text-base text-gray-600 cursor-pointer transition-all duration-200 active:scale-75" />
      </div>
    </form>
  );
}
