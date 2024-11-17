import { useEffect, useState } from "react"
import "./LightPatterns.css"
import PatternOption from "./PatternOption"

export default function LightThemeContainer() {
  const [selectedPattern, setSelectedPattern] = useState("default")
  const [selectedTheme, setSelectedTheme] = useState("default")

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

  const changeTheme = (newTheme) => {
    // Remove existing theme classes
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
      setSelectedTheme("default")
    }
  }

  return (
    <div className="flex flex-grow flex-col">
      <div>
        <h1 className="my-2.5 text-lg text-white">Themes</h1>
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-7">
          <PatternOption
            from="bg-muted"
            to="bg-[#298dff]"
            fnParam="default"
            isSelected={selectedTheme === "default"}
            onSelect={changeTheme}
          />
          <PatternOption
            from="bg-muted"
            to="bg-[#db4437]"
            fnParam="theme-red"
            isSelected={selectedTheme === "theme-red"}
            onSelect={changeTheme}
          />
          <PatternOption
            from="bg-muted"
            to="bg-[#f4b400]"
            fnParam="theme-yellow"
            isSelected={selectedTheme === "theme-yellow"}
            onSelect={changeTheme}
          />
          <PatternOption
            from="bg-muted"
            to="bg-[#0f9d58]"
            fnParam="theme-green"
            isSelected={selectedTheme === "theme-green"}
            onSelect={changeTheme}
          />
        </div>
      </div>
      <div className="mt-5">
        <h1 className="my-2.5 text-lg text-white">Background Images</h1>
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-7">
          <div
            onClick={() => changePattern("default")}
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
