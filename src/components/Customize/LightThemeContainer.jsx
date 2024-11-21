import { useEffect, useState } from "react"
import "./LightPatterns.css"
import ThemeOption from "./ThemeOption"
import { changeTheme } from "./changeThemeFn"
import { changePattern } from "./changePatternFn"

export default function LightThemeContainer() {
  const [selectedTheme, setSelectedTheme] = useState("default-light")
  const [selectedPattern, setSelectedPattern] = useState(
    "default-light-pattern",
  )

  const handleChangeTheme = (newTheme) => {
    const updatedTheme = changeTheme(newTheme)
    setSelectedTheme(updatedTheme)
  }

  const handleChangePattern = (newPattern) => {
    const updatedPattern = changePattern(newPattern)
    setSelectedPattern(updatedPattern)
  }

  useEffect(() => {
    handleChangeTheme("default-light")
    handleChangePattern("default-light-pattern")
  }, [])

  return (
    <div className="flex flex-grow flex-col">
      <div>
        <h1 className="my-2.5 text-lg text-white">Themes</h1>
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-7">
          <ThemeOption
            from="bg-gray-200"
            to="bg-[#298dff]"
            fnParam="default-light"
            isSelected={selectedTheme === "default-light"}
            onSelect={handleChangeTheme}
          />
          <ThemeOption
            from="bg-gray-200"
            to="bg-[#db4437]"
            fnParam="theme-red"
            isSelected={selectedTheme === "theme-red"}
            onSelect={handleChangeTheme}
          />
          <ThemeOption
            from="bg-gray-200"
            to="bg-[#0f9d58]"
            fnParam="theme-green"
            isSelected={selectedTheme === "theme-green"}
            onSelect={handleChangeTheme}
          />
          <ThemeOption
            from="bg-gray-200"
            to="bg-[#f4b400]"
            fnParam="theme-yellow"
            isSelected={selectedTheme === "theme-yellow"}
            onSelect={handleChangeTheme}
          />
        </div>
      </div>
      <div className="mt-5">
        <h1 className="my-2.5 text-lg text-white">Background Images</h1>
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-7">
          <div
            onClick={() => handleChangePattern("default-light-pattern")}
            className={`flex h-14 w-32 cursor-pointer items-center justify-center rounded-sm bg-white text-center shadow-current transition-all duration-200 hover:shadow-xl active:scale-90 ${selectedPattern === "default-light-pattern" ? "selected" : ""}`}
          >
            Default
          </div>
          <div
            onClick={() => handleChangePattern("dots")}
            className={`dots h-14 w-32 cursor-pointer rounded-sm shadow-current transition-all duration-200 hover:shadow-xl active:scale-90 ${selectedPattern === "dots" ? "selected" : ""}`}
          ></div>
          <div
            onClick={() => handleChangePattern("paper")}
            className={`paper h-14 w-32 cursor-pointer rounded-sm shadow-current transition-all duration-200 hover:shadow-xl active:scale-90 ${selectedPattern === "paper" ? "selected" : ""}`}
          ></div>
          <div
            onClick={() => handleChangePattern("zig-zag")}
            className={`zig-zag h-14 w-32 cursor-pointer rounded-sm shadow-current transition-all duration-200 hover:shadow-xl active:scale-90 ${selectedPattern === "zig-zag" ? "selected" : ""}`}
          ></div>
        </div>
      </div>
    </div>
  )
}
