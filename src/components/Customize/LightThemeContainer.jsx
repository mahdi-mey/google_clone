import { useState, useEffect } from "react"

export default function LightThemeContainer() {
  const [pattern, setPattern] = useState("")

  const changePattern = (newPattern) => {
    // Remove existing pattern classes
    document.body.classList.remove(
      "dots",
      "cross-lines",
      "threeDtriangle",
      "boxes",
    )

    // Add the new pattern class
    document.body.classList.add(newPattern)
    setPattern(newPattern)
  }

  return (
    <div className="flex flex-grow flex-col">
      <div>
        <h1 className="my-2.5 text-lg text-white">Theme</h1>
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-7">
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
            onClick={() => changePattern("dots")}
            className="dots h-14 w-32 cursor-pointer rounded-sm bg-cyan-300 shadow-current transition-all duration-200 hover:shadow-xl active:scale-90"
          ></div>
          <div
            onClick={() => changePattern("cross-lines")}
            className="cross-lines h-14 w-32 cursor-pointer rounded-sm bg-cyan-300 shadow-current transition-all duration-200 hover:shadow-xl active:scale-90"
          ></div>
          <div
            onClick={() => changePattern("boxes")}
            className="boxes h-14 w-32 cursor-pointer rounded-sm bg-cyan-300 shadow-current transition-all duration-200 hover:shadow-xl active:scale-90"
          ></div>
          <div
            onClick={() => changePattern("threeDtriangle")}
            className="threeDtriangle h-14 w-32 cursor-pointer rounded-sm bg-cyan-300 shadow-current transition-all duration-200 hover:shadow-xl active:scale-90"
          ></div>
        </div>
      </div>
    </div>
  )
}
