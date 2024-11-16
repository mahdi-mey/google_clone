import { useState } from "react"
import "./LightPatterns.css"

export default function LightThemeContainer() {
  const [selectedPattern, setSelectedPattern] = useState("default")
  const [selectedTheme, setSelectedTheme] = useState("default")

  const changeTheme = (newTheme) => {
    document.body.classList.remove(
      "default",
      "theme-red",
      "theme-yellow",
      "theme-green",
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
      setSelectedPattern(newPattern)
    } else {
      setSelectedPattern("default")
    }
  }

  return (
    <div className="flex flex-grow flex-col">
      <div>
        <h1 className="my-2.5 text-lg text-white">Theme</h1>
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-7">
          {/* Example of area for theme colors */}
          <div
            onClick={() => changeTheme(null)}
            className={`h-14 w-32 cursor-pointer rounded-sm bg-[#298dff] shadow-current transition-all duration-200 hover:shadow-xl active:scale-90 ${selectedTheme === "default" ? "selected" : ""}`}
          ></div>
          <div
            onClick={() => changeTheme("theme-red")}
            className={`h-14 w-32 cursor-pointer rounded-sm bg-[#db4437] shadow-current transition-all duration-200 hover:shadow-xl active:scale-90 ${selectedTheme === "theme-red" ? "selected" : ""}`}
          ></div>
          <div
            onClick={() => changeTheme("theme-yellow")}
            className={`h-14 w-32 cursor-pointer rounded-sm bg-[#f4b400] shadow-current transition-all duration-200 hover:shadow-xl active:scale-90 ${selectedTheme === "theme-yellow" ? "selected" : ""}`}
          ></div>
          <div
            onClick={() => changeTheme("theme-green")}
            className={`h-14 w-32 cursor-pointer rounded-sm bg-[#0f9d58] shadow-current transition-all duration-200 hover:shadow-xl active:scale-90 ${selectedTheme === "theme-green" ? "selected" : ""}`}
          ></div>
        </div>
      </div>
      <div className="mt-5">
        <h1 className="my-2.5 text-lg text-white">Background Image</h1>
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-7">
          <div
            onClick={() => changePattern(null)}
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
