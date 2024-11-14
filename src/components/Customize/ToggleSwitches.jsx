import { BsMoon } from "react-icons/bs"
import { BsSun } from "react-icons/bs"

export default function ToggleSwitches({ selectedTheme, setSelectecThem }) {

  return (
    <div className="mx-auto flex h-12 w-4/6 gap-1 rounded-full p-1 outline outline-1 outline-blue-600 mt-4">
      <button
        onClick={() => setSelectecThem("Light")}
        className={`flex flex-grow flex-row items-center justify-center gap-1 rounded-full text-white transition-all ${selectedTheme === "Light" ? "bg-blue-500" : "hover:bg-gray-400"}`}
      >
        <BsSun />
        Light
      </button>
      <button
        onClick={() => setSelectecThem("Dark")}
        className={`flex flex-grow flex-row items-center justify-center gap-1 rounded-full text-white transition-all ${selectedTheme === "Dark" ? "bg-blue-500" : "hover:bg-gray-400"}`}
      >
        <BsMoon />
        Dark
      </button>
    </div>
  )
}
