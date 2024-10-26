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
      className="relative mx-[clamp(2.5px,5%,8px)] flex w-full min-w-0 max-w-[700px] rounded-full border border-gray-300 transition-shadow focus-within:shadow-md hover:shadow-md"
    >
      <input
        type="text"
        onChange={(e) => setTerm(e.target.value)}
        value={term}
        ref={inputRef}
        className="w-full min-w-0 flex-grow rounded-full px-5 py-3 focus:outline-none"
      />
      <div className="absolute right-2 top-1/2 flex -translate-y-1/2 transform items-center">
        <RxCross1
          onClick={clearInput}
          className="cursor-pointer text-base text-gray-600 transition-all duration-200 active:scale-75 sm:text-lg"
        />
        <div className="h-6 w-[1px] mx-1.5 sm:mx-2.5 bg-gray-800"></div>
        <MicrophoneIcon />
      </div>
    </form>
  )
}
