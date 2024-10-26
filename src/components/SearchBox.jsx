"use client"

import { RxCross1 } from "react-icons/rx"
import { useSearchParams, useRouter, usePathname } from "next/navigation"
import { useState, useRef } from "react"
import MicrophoneIcon from "./MicrophoneIcon"

export default function SearchBox() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const pathName = usePathname()

  const searchTerm = searchParams.get("searchTerm")
  const [term, setTerm] = useState(searchTerm || "")
  const inputRef = useRef(null)

  function handleSubmit(e) {
    e.preventDefault()
    if (!term.trim()) return
    if (pathName === "/search/image") {
      router.push(`/search/image?searchTerm=${term}`)
    } else if (pathName === "/search/web") {
      router.push(`/search/web?searchTerm=${term}`)
    } else {
      alert("Some Error Happened")
    }
  }

  // Function to clear input and focus it
  function clearInput() {
    setTerm("")
    inputRef.current.focus()
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-[calc(2.5px,5%,8px)] flex w-1/2 rounded-full border border-gray-300 px-5 py-3 transition-shadow focus-within:shadow-md hover:shadow-md sm:w-4/6"
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
  )
}
