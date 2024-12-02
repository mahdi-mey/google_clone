"use client"

import { RxCross1 } from "react-icons/rx"
import { useSearchParams, useRouter, usePathname } from "next/navigation"
import { useState, useRef } from "react"
import MicrophoneIcon from "@/components/MicrophoneIcon"
import { useEffect } from "react"
import { changePattern } from "../Customize/changePatternFn"
import { changeTheme } from "../Customize/changeThemeFn"

export default function SearchBox() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const pathName = usePathname()

  const searchTerm = searchParams.get("searchTerm")
  const [term, setTerm] = useState(searchTerm || "")
  const inputRef = useRef(null)

  useEffect(() => {
    try {
      const themeDetails = localStorage.getItem("themeDetails")
      const { selectedTab, selectedTheme, selectedPattern } = themeDetails
        ? JSON.parse(themeDetails)
        : {}

      window.localStorage.setItem(
        "themeDetails",
        JSON.stringify({
          selectedTab: selectedTab || "Light",
          selectedTheme: selectedTheme || "default-Light",
          selectedPattern: selectedPattern || "default-light-pattern",
        }),
      )
      changeTheme(selectedTheme)
      changePattern(selectedPattern)
    } catch (error) {
      console.error("Error retrieving theme details from localStorage:", error)
      // Optionally set default values in localStorage
      window.localStorage.setItem(
        "themeDetails",
        JSON.stringify({
          selectedTab: "Light",
          selectedTheme: "default-Light",
          selectedPattern: "default-light-pattern",
        }),
      )
    }
  }, [])

  function handleSubmit(e) {
    e.preventDefault()
    if (!term.trim()) return

    // Regular expression to check for valid URLs
    const urlRegex =
      /^(https?:\/\/)?(www\.)?([a-zA-Z0-9-]+\.[a-zA-Z]{2,})(\/[^\s]*)?$/

    if (urlRegex.test(term)) {
      // Redirect to the valid URL
      window.location.href = term.startsWith("http") ? term : `https://${term}`
    } else {
      if (pathName === "/search/image") {
        router.push(`/search/image?searchTerm=${term}`)
      } else if (pathName === "/search/web") {
        router.push(`/search/web?searchTerm=${term}`)
      } else {
        alert("Some Error Happened")
      }
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
      className="relative mx-[clamp(2.5px,5%,8px)] mr-auto flex w-full min-w-0 max-w-[700px] rounded-full border border-gray-300 text-invertedText transition-shadow focus-within:shadow-md hover:shadow-md"
    >
      <input
        type="text"
        onChange={(e) => setTerm(e.target.value)}
        value={term}
        ref={inputRef}
        className="w-full min-w-0 flex-grow rounded-full bg-scene px-5 py-3 focus:outline-none"
      />
      <div className="absolute right-3 top-1/2 flex -translate-y-1/2 transform items-center text-invertedText">
        <RxCross1
          onClick={clearInput}
          className="cursor-pointer text-base text-gray-600 transition-all duration-200 active:scale-75 sm:text-lg"
        />
        <div className="mx-1.5 h-6 w-[1px] bg-gray-600 sm:mx-2.5"></div>
        <MicrophoneIcon />
      </div>
    </form>
  )
}
