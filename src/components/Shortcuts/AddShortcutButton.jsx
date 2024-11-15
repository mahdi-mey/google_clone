"use client";
import { BiPlus } from "react-icons/bi";

export default function AddShortcutButton({ setIsAddShortcutOpen }) {
  return (
    <div
      onClick={() => setIsAddShortcutOpen(true)}
      className="flex size-28 cursor-pointer flex-col items-center justify-evenly rounded-md transition-all hover:bg-gray-200"
    >
      <div className="flex size-12 items-center justify-center rounded-full bg-primary">
        <BiPlus className="text-lg text-mainText font-bold" />
      </div>
      <p className="text-sm">Add shortcuts</p>
    </div>
  );
}
