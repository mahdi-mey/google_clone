import React, { useState } from "react"

export default function PatternOption({ from, to, fnParam }) {
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

  return (
    <div
      className={`relative flex h-14 w-32 cursor-pointer rounded-md border border-none bg-transparent p-0 shadow-current outline-none transition-all duration-200 hover:shadow-xl active:scale-90 ${selectedTheme === fnParam ? 'selected' : ''}`}
      onClick={() => changeTheme(fnParam)}
    >
      <div className={`flex-1 h-full ${from}`}></div>
      <div className={`flex-1 h-full ${to}`}></div>
    </div>
  )
}
