import React from "react"

export default function AlertTemplate({
  icon,
  title,
  description,
  buttonText,
}) {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-gray-800/35 backdrop-blur-none">
      <div className="flex w-1/3 min-w-[300px] flex-col items-center justify-center gap-4 rounded-lg bg-white px-1 py-4">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        {icon}
        <h2 className="text-center text-2xl">{title}</h2>
        <p className="text-center text-sm text-gray-600" dangerouslySetInnerHTML={{__html: description}} />
        <button className="otln mt-5 w-2/3 rounded-full px-1.5 py-2.5 text-center text-red-500 transition-all hover:bg-red-500 hover:text-white">
          {buttonText}
        </button>
      </div>
    </div>
  )
}
