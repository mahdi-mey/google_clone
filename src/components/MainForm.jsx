'use client'
import { useRouter } from "next/navigation";
import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import MicrophoneIcon from "./MicrophoneIcon";

export default function MainForm() {
  const [inputValue, setInputValue] = useState('')
  const router = useRouter()

  function handleSubmit(e) {
    e.preventDefault()
    if(!inputValue.trim()) return
    router.push(`/search/web?searchTerm=${inputValue}`)
  }

  return (
    <form onSubmit={handleSubmit} className="flex w-full mt-5 mx-auto max-w-[90%] border border-gray-300 px-5 py-3 rounded-full hover:shadow-md focus-within:shadow-md transition-shadow sm:max-w-xl lg:max-w-2xl">
      <AiOutlineSearch onClick={handleSubmit} className="text-xl text-gray-600 mr-3 cursor-pointer transition-all duration-200 active:scale-75" />
      <input type="text" autoFocus onChange={(e) => setInputValue(e.target.value)} className="flex-grow focus:outline-none" />
      <MicrophoneIcon />
    </form>
  );
}
