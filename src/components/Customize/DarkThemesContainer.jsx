import "./DarkPatterns.css"
import ThemeOption from "./ThemeOption"
import { useEffect, useState } from "react"
import { changePattern } from "./changePatternFn"
import { changeTheme } from "./changeThemeFn"

export default function DarkThemeContainer() {
  // State to track the currently selected pattern
  const [selectedTheme, setSelectedTheme] = useState("default-dark")
  const [selectedPattern, setSelectedPattern] = useState("default-dark-pattern")

  const handleChangeTheme = (newTheme) => {
    const updatedTheme = changeTheme(newTheme)
    setSelectedTheme(updatedTheme)
  }

  const handleChangePattern = (newPattern) => {
    const updatedPattern = changePattern(newPattern)
    setSelectedPattern(updatedPattern)
  }

  useEffect(() => {
    const storedThemeDetails = localStorage.getItem("themeDetails")
    const { selectedTheme, selectedPattern } = storedThemeDetails
      ? JSON.parse(storedThemeDetails)
      : {}

    console.log(selectedTheme, selectedPattern)

      if (
        selectedTheme !== "default-dark"      &&
        selectedTheme !== "theme-dark-red"    &&
        selectedTheme !== "theme-dark-green"  &&
        selectedTheme !== "theme-dark-yellow"
      ) {
        handleChangeTheme("default-dark")
        handleChangePattern("default-dark-pattern")
      } else {
        handleChangeTheme(selectedTheme)
        handleChangePattern(selectedPattern)
      }

  }, [])

  return (
    <div className="flex flex-grow flex-col">
      <div className="">
        <h1 className="my-2.5 text-lg text-white">Theme</h1>
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-7">
          <ThemeOption
            from="bg-gray-800"
            to="bg-[#298dff]"
            fnParam="default-dark"
            isSelected={selectedTheme === "default-dark"}
            onSelect={handleChangeTheme}
          />
          <ThemeOption
            from="bg-gray-800"
            to="bg-[#db4437]"
            fnParam="theme-dark-red"
            isSelected={selectedTheme === "theme-dark-red"}
            onSelect={handleChangeTheme}
          />
          <ThemeOption
            from="bg-gray-800"
            to="bg-[#0f9d58]"
            fnParam="theme-dark-green"
            isSelected={selectedTheme === "theme-dark-green"}
            onSelect={handleChangeTheme}
          />
          <ThemeOption
            from="bg-gray-800"
            to="bg-[#f4b400]"
            fnParam="theme-dark-yellow"
            isSelected={selectedTheme === "theme-dark-yellow"}
            onSelect={handleChangeTheme}
          />
        </div>
      </div>
      <div className="mt-5">
        <h1 className="my-2.5 text-lg text-white">Background Image</h1>
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-7">
          <div
            onClick={() => handleChangePattern("default-dark-pattern")}
            className={`flex h-14 w-32 cursor-pointer items-center justify-center rounded-sm bg-gray-800/80 text-center text-white shadow-current transition-all duration-200 hover:shadow-xl active:scale-90 ${selectedPattern === "default-dark-pattern" ? "selected" : ""}`}
          >
            Default
          </div>
          <div
            onClick={() => handleChangePattern("stary-night")}
            className={`stary-night-for-div h-14 w-32 cursor-pointer rounded-sm bg-rose-700 shadow-current transition-all duration-200 hover:shadow-xl active:scale-90 ${selectedPattern === "stary-night" ? "selected" : ""}`}
          ></div>
          <div
            onClick={() => handleChangePattern("threeD-boxes")}
            className={`threeD-boxes h-14 w-32 cursor-pointer rounded-sm bg-rose-700 shadow-current transition-all duration-200 hover:shadow-xl active:scale-90 ${selectedPattern === "threeD-boxes" ? "selected" : ""}`}
          ></div>
          <div
            onClick={() => handleChangePattern("stairs")}
            className={`stairs h-14 w-32 cursor-pointer rounded-sm bg-rose-700 shadow-current transition-all duration-200 hover:shadow-xl active:scale-90 ${selectedPattern === "stairs" ? "selected" : ""}`}
          ></div>
        </div>
      </div>
    </div>
  )
}
