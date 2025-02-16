"use client"

import { useEffect } from "react"

export default function EditOrRemoveButtons({
  shrtct,
  setShortcuts,
  setEditShortcut,
}) {
  useEffect(() => {
    setEditShortcut((prev) => {
      const { status } = prev
      return { status, element: shrtct }
    })
  }, [setEditShortcut, shrtct])

  function editShortcut(e) {
    e.stopPropagation()
    e.preventDefault()
    setEditShortcut((prev) => {
      // const selectedElement = 1
      const { element } = prev
      return { element, status: "open" }
    })
  }

  function removeShortcut(e) {
    e.stopPropagation()
    e.preventDefault()
    setShortcuts((prevState) => {
      return prevState.filter((item) => item.url !== shrtct.url)
    })
  }

  return (
    <div className="absolute right-0 top-0 z-30 flex flex-col rounded-md bg-white px-0 py-1.5 shadow-lg">
      <button
        onClick={editShortcut}
        className="w-28 px-1 py-2.5 text-sm font-light hover:bg-gray-200"
      >
        Edit Shortcut
      </button>
      <button
        onClick={removeShortcut}
        className="w-28 px-1 py-2.5 text-sm font-light hover:bg-gray-200"
      >
        Remove
      </button>
    </div>
  )
}
