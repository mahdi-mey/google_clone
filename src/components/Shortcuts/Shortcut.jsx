"use client"
import { BiDotsVerticalRounded } from "react-icons/bi"

export default function Shortcut({ shrtct }) {
  let faviconUrl
  try {
    const parsedUrl = new URL(shrtct.url)
    faviconUrl = `${parsedUrl.origin}/favicon.ico`
  } catch (e) {
    faviconUrl = "/images/default-web.jpg"
  }

  return (
    <a
      href={shrtct.url}
      key={shrtct.name}
      target="_blank"
      rel="noopener noreferrer"
      className="relative flex size-28 group cursor-pointer flex-col items-center justify-evenly rounded-md transition-all hover:bg-gray-200"
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
      <BiDotsVerticalRounded className="absolute right-2 top-2 hover:bg-slate-100 rounded-full text-xl sm:opacity-0 group-hover:opacity-100 transition-all duration-500 font-bold" />
    </a>
  )
}
