"use client"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { AiOutlineSearch } from "react-icons/ai"
import MicrophoneIcon from "./MicrophoneIcon"

export default function MainForm() {
  const [inputValue, setInputValue] = useState("")
  const router = useRouter()

  function handleSubmit(e) {
    e.preventDefault()
    if (!inputValue.trim()) return

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
    <form
      onSubmit={handleSubmit}
      className="mx-auto mt-5 flex w-full max-w-[90%] rounded-full border border-gray-300 px-5 py-3 transition-shadow focus-within:shadow-md hover:shadow-md sm:max-w-xl lg:max-w-2xl"
    >
      <AiOutlineSearch
        onClick={handleSubmit}
        className="mr-3 cursor-pointer text-xl text-gray-600 transition-all duration-200 active:scale-75"
      />
      <input
        type="text"
        autoFocus
        onChange={(e) => setInputValue(e.target.value)}
        className="flex-grow focus:outline-none"
      />
      <MicrophoneIcon />
    </form>
  )
}
