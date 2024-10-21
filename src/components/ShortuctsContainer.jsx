"use client";
import { BiPlus } from "react-icons/bi";
import { useState } from "react";
import AddShortcutPopUp from "./AddShortcutPopUp";

export default function AddShortucts() {
  const [isAddShortcutOpen, setIsAddShortcutOpen] = useState(false);
  return (
    <div className="flex flex-row items-center justify-center gap-2 mt-2.5">
      <a
        href="https://sabzlearn.ir/"
        className="size-28 flex rounded-md cursor-pointer flex-col items-center justify-evenly transition-all hover:bg-gray-200"
      >
        <div className="size-12 rounded-full bg-blue-300/80 flex justify-center items-center">
          {/* Website Log */}
        </div>
        <p className="text-sm">Example website</p>
      </a>

      <div
        onClick={() => setIsAddShortcutOpen(true)}
        className="size-28 flex rounded-md cursor-pointer flex-col items-center justify-evenly transition-all hover:bg-gray-200"
      >
        <div className="size-12 rounded-full bg-blue-300/80 flex justify-center items-center">
          <BiPlus className="text-lg " />
        </div>
        <p className="text-sm">Add shortcuts</p>
      </div>
      {isAddShortcutOpen && (
        <AddShortcutPopUp changeOpen={setIsAddShortcutOpen} />
      )}
    </div>
  );
}
