import { useState } from "react"
import './LightPatterns.css'

export default function LightThemeContainer() {
  // State to track the currently selected pattern
  const [selectedPattern, setSelectedPattern] = useState("default")

  const changePattern = (newPattern) => {
    // Remove existing pattern classes
    document.body.classList.remove(
      "dots",
      "zig-zag",
      "paper",
      "stary-night",
      "threeD-boxes",
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
      <div>
        <h1 className="my-2.5 text-lg text-white">Theme</h1>
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-7">
          {/* Example of area for theme colors */}
          <div className="h-14 w-32 cursor-pointer rounded-sm bg-green-300 shadow-current transition-all duration-200 hover:shadow-xl active:scale-90"></div>
          <div className="h-14 w-32 cursor-pointer rounded-sm bg-green-300 shadow-current transition-all duration-200 hover:shadow-xl active:scale-90"></div>
          <div className="h-14 w-32 cursor-pointer rounded-sm bg-green-300 shadow-current transition-all duration-200 hover:shadow-xl active:scale-90"></div>
          <div className="h-14 w-32 cursor-pointer rounded-sm bg-green-300 shadow-current transition-all duration-200 hover:shadow-xl active:scale-90"></div>
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
            onClick={() => changePattern("dots")}
            className={`dots h-14 w-32 cursor-pointer rounded-sm shadow-current transition-all duration-200 hover:shadow-xl active:scale-90 ${selectedPattern === "dots" ? "selected" : ""}`}
          ></div>
          <div
            onClick={() => changePattern("paper")}
            className={`paper h-14 w-32 cursor-pointer rounded-sm shadow-current transition-all duration-200 hover:shadow-xl active:scale-90 ${selectedPattern === "paper" ? "selected" : ""}`}
          ></div>
          <div
            onClick={() => changePattern("zig-zag")}
            className={`zig-zag h-14 w-32 cursor-pointer rounded-sm shadow-current transition-all duration-200 hover:shadow-xl active:scale-90 ${selectedPattern === "zig-zag" ? "selected" : ""}`}
          ></div>
        </div>
      </div>
    </div>
  )
}
