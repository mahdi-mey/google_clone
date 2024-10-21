'use client'
import { BiPlus } from "react-icons/bi";

export default function AddShortcutButton({setIsAddShortcutOpen}) {
  return (
    <div
      onClick={() => setIsAddShortcutOpen(true)}
      className="size-28 flex rounded-md cursor-pointer flex-col items-center justify-evenly transition-all hover:bg-gray-200"
    >
      <div className="size-12 rounded-full bg-blue-300/80 flex justify-center items-center">
        <BiPlus className="text-lg " />
      </div>
      <p className="text-sm">Add shortcuts</p>
    </div>
  );
}
