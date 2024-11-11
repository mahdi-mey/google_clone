import { useState } from "react"

export default function DarkThemeContainer() {
  // State to track the currently selected pattern
  const [selectedPattern, setSelectedPattern] = useState("default")

  const changePattern = (newPattern) => {
    // Remove existing pattern classes
    document.body.classList.remove(
      "stary-night",
      "threeD-boxes",
      "dots",
      "zig-zag",
      "paper",
      "stairs",
    )

    // Add the new pattern class if not null
    if (newPattern) {
      document.body.classList.add(newPattern)
      setSelectedPattern(newPattern) // Update state to reflect selected pattern
    } else {
      setSelectedPattern("default") // Default selection when no pattern is selected
    }
  }
  return (
    <div className="flex flex-grow flex-col">
      <div className="">
        <h1 className="my-2.5 text-lg text-white">Theme</h1>
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-7">
          <div className="h-14 w-32 cursor-pointer rounded-sm bg-sky-700 shadow-current transition-all duration-200 hover:shadow-xl active:scale-90"></div>
          <div className="h-14 w-32 cursor-pointer rounded-sm bg-sky-700 shadow-current transition-all duration-200 hover:shadow-xl active:scale-90"></div>
          <div className="h-14 w-32 cursor-pointer rounded-sm bg-sky-700 shadow-current transition-all duration-200 hover:shadow-xl active:scale-90"></div>
          <div className="h-14 w-32 cursor-pointer rounded-sm bg-sky-700 shadow-current transition-all duration-200 hover:shadow-xl active:scale-90"></div>
        </div>
      </div>
      <div className="mt-5">
        <h1 className="my-2.5 text-lg text-white">Background Image</h1>
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-7">
          <div
            onClick={() => changePattern(null)} // Change pattern to null for default
            className={`flex h-14 w-32 cursor-pointer items-center justify-center rounded-sm bg-white text-center shadow-current transition-all duration-200 hover:shadow-xl active:scale-90 ${selectedPattern === "default" ? "selected" : ""}`}
          >
            Default
          </div>
          <div
            onClick={() => changePattern("stary-night")}
            className={`stary-night h-14 w-32 cursor-pointer rounded-sm bg-rose-700 shadow-current transition-all duration-200 hover:shadow-xl active:scale-90 ${selectedPattern === "stary-night" ? "selected" : ""}`}
          ></div>
          <div
            onClick={() => changePattern("threeD-boxes")}
            className={`threeD-boxes h-14 w-32 cursor-pointer rounded-sm bg-rose-700 shadow-current transition-all duration-200 hover:shadow-xl active:scale-90 ${selectedPattern === "threeD-boxes" ? "selected" : ""}`}
            ></div>
          <div
            onClick={() => changePattern("stairs")}
            className={`stairs h-14 w-32 cursor-pointer rounded-sm bg-rose-700 shadow-current transition-all duration-200 hover:shadow-xl active:scale-90 ${selectedPattern === "stairs" ? "selected" : ""}`}
          ></div>
        </div>
      </div>
    </div>
  )
}
