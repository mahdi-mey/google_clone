import React from "react"

export default function PatternOption({
  from,
  to,
  fnParam,
  isSelected,
  onSelect,
}) {
  return (
    <div
      className={`relative flex h-14 w-32 cursor-pointer rounded-md border border-none bg-transparent p-0 shadow-current outline-none transition-all duration-200 hover:shadow-xl active:scale-90 ${isSelected ? "selected" : ""}`}
      onClick={() => onSelect(fnParam)}
    >
      <div className={`h-full flex-1 rounded-l-md ${from}`}></div>
      <div className={`h-full flex-1 rounded-r-md ${to}`}></div>
    </div>
  )
}
