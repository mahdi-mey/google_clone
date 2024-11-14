"use client"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { AiOutlineSearch } from "react-icons/ai"
import MicrophoneIcon from "@/components/MicrophoneIcon"
import NoInternet from "../Alert/NoInternet"

export default function MainForm() {
  const [inputValue, setInputValue] = useState("")
  const [showNoInternet, setShowInternet] = useState(false)
  const router = useRouter()

  function handleSubmit(e) {
    e.preventDefault()
    if (!inputValue.trim()) return

    if (!navigator.onLine) {
      setShowInternet(true)
      return
    }

    // Regular expression to check for valid URLs
    const urlRegex =
      /^(https?:\/\/)?(www\.)?([a-zA-Z0-9-]+\.[a-zA-Z]{2,})(\/[^\s]*)?$/

    if (urlRegex.test(inputValue)) {
      // Redirect to the valid URL
      window.location.href = inputValue.startsWith("http")
        ? inputValue
        : `https://${inputValue}`
    } else {
      // Proceed with the search
      router.push(`/search/web?searchTerm=${inputValue}`)
    }
  }

  return (
    <>
      {showNoInternet && <NoInternet />}
      <form
        onSubmit={handleSubmit}
        className="border-muted mx-auto mt-5 flex w-full max-w-[90%] rounded-full border bg-searchBg px-5 py-3 transition-shadow focus-within:shadow-md hover:shadow-md sm:max-w-xl lg:max-w-2xl shadow-shadowColor"
      >
        <AiOutlineSearch
          onClick={handleSubmit}
          className="mr-3 cursor-pointer text-xl text-mutedText transition-all duration-200 active:scale-75"
        />
        <input
          type="text"
          autoFocus
          onChange={(e) => setInputValue(e.target.value)}
          className="flex-grow bg-searchBg focus:outline-none"
        />
        <MicrophoneIcon className="text-mutedText" />
      </form>
    </>
  )
}
