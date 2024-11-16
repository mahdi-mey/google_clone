import { BiPencil } from "react-icons/bi";
import React from "react";

export default function CustomizeButton({setIsCustomizeOpen}) {
  return (
    <button
      onClick={() => setIsCustomizeOpen(true)}
      className="mr-8 flex items-center justify-end gap-3 rounded-2xl bg-primary px-6 py-1 text-right text-mainText"
    >
      <BiPencil /> Customize
    </button>
  )
}
