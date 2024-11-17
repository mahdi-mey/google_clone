import { useEffect, useState } from "react"
import "./DarkPatterns.css"
import PatternOption from "./PatternOption"

export default function DarkThemeContainer() {
  // State to track the currently selected pattern
  const [selectedPattern, setSelectedPattern] = useState("default")
  const [selectedTheme, setSelectedTheme] = useState("default")

  const changeTheme = (newTheme) => {
    document.body.classList.remove(
      // light themes
      "default-light",
      "theme-red",
      "theme-yellow",
      "theme-green",
      // dark themes
      "default-dark",
      "theme-dark-red",
      "theme-dark-green",
      "theme-dark-yellow",
    )
    if (newTheme) {
      document.body.classList.add(newTheme)
      setSelectedTheme(newTheme)
    } else {
      setSelectedTheme(null)
    }
  }

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
          <PatternOption
            from="bg-gray-800"
            to="bg-[#298dff]"
            fnParam="default-dark"
            isSelected={selectedTheme === "default-dark"}
            onSelect={changeTheme}
          />
          <PatternOption
            from="bg-gray-800"
            to="bg-[#db4437]"
            fnParam="theme-dark-red"
            isSelected={selectedTheme === "theme-dark-red"}
            onSelect={changeTheme}
          />
          <PatternOption
            from="bg-gray-800"
            to="bg-[#0f9d58]"
            fnParam="theme-dark-green"
            isSelected={selectedTheme === "theme-dark-green"}
            onSelect={changeTheme}
          />
          <PatternOption
            from="bg-gray-800"
            to="bg-[#f4b400]"
            fnParam="theme-dark-yellow"
            isSelected={selectedTheme === "theme-dark-yellow"}
            onSelect={changeTheme}
          />
        </div>
      </div>
      <div className="mt-5">
        <h1 className="my-2.5 text-lg text-white">Background Image</h1>
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-7">
          <div
            onClick={() => changePattern("default")}
            className={`flex h-14 w-32 cursor-pointer items-center justify-center rounded-sm bg-gray-800/80 text-center text-white shadow-current transition-all duration-200 hover:shadow-xl active:scale-90 ${selectedPattern === "default" ? "selected" : ""}`}
          >
            Default
          </div>
          <div
            onClick={() => changePattern("stary-night")}
            className={`stary-night-for-div h-14 w-32 cursor-pointer rounded-sm bg-rose-700 shadow-current transition-all duration-200 hover:shadow-xl active:scale-90 ${selectedPattern === "stary-night" ? "selected" : ""}`}
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
