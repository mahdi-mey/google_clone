import { useState } from "react"
import { BsMoon } from "react-icons/bs"
import { BsSun } from "react-icons/bs"

export default function ToggleSwitches() {
  const [selectedTheme, setSelectecThem] = useState("Light")
  return (
    <div className="mx-auto mt-4 flex h-12 w-4/6 rounded-full outline outline-1 outline-blue-600">
      <button
        onClick={() => setSelectecThem("Light")}
        className={`flex flex-grow flex-row items-center justify-center gap-1 transition-all rounded-full ${selectedTheme === "Light" && "bg-blue-500 text-white"}`}
      >
        <BsSun />
        Light
      </button>
      <button
        onClick={() => setSelectecThem("Dark")}
        className={`flex flex-grow flex-row items-center justify-center gap-1 transition-all rounded-full ${selectedTheme === "Dark" && "bg-blue-500 text-white"}`}
      >
        <BsMoon />
        Dark
      </button>
    </div>
  )
}
