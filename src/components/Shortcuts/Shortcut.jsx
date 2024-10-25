"use client"
import { useState, useRef, useEffect } from "react"
import { BiDotsVerticalRounded } from "react-icons/bi"
import EditOrRemoveShortcut from "./EditOrRemoveShortcut"

export default function Shortcut({ shrtct, setShortcuts }) {
  const [isEditOpen, setIsEditOpen] = useState(false)
  const editRef = useRef(null)

  let faviconUrl
  try {
    const parsedUrl = new URL(shrtct.url)
    faviconUrl = `${parsedUrl.origin}/favicon.ico`
  } catch (e) {
    faviconUrl = "/images/default-web.jpg"
  }

  function handleIconClick(e) {
    e.stopPropagation()
    e.preventDefault()
    setIsEditOpen(!isEditOpen)
  }

  // Handle click outside of EditOrRemoveShortcut
  const handleClickOutside = (event) => {
    if (
      editRef.current &&
      !editRef.current.contains(event.target) &&
      isEditOpen
    ) {
      setIsEditOpen(false)
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isEditOpen])
  // console.log(shrtct);
  return (
    <a
      href={shrtct.url}
      key={shrtct.name}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative flex size-28 flex-col items-center justify-evenly rounded-md transition-all ${!isEditOpen && "cursor-pointer hover:bg-gray-200"}`}
    >
      <div className="flex size-12 items-center justify-center rounded-full bg-gray-300/80">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={faviconUrl}
          alt={`${shrtct.name} favicon`}
          className="h-6 w-6 rounded-full"
          onError={(e) => {
            e.target.onerror = null
            e.target.src = "/images/default-web.jpg"
          }}
        />
      </div>
      <p className="text-sm">{shrtct.name}</p>
      <BiDotsVerticalRounded
        onClick={handleIconClick}
        className="duration-600 absolute right-2 top-2 rounded-full text-xl font-bold transition-all hover:bg-slate-100 group-hover:opacity-100 sm:opacity-0"
      />
      {isEditOpen && (
        <div ref={editRef}>
          <EditOrRemoveShortcut shrtct={shrtct} setShortcuts={setShortcuts} />
        </div>
      )}
    </a>
  )
}
