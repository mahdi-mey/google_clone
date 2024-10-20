'use client'
import { BiPlus } from "react-icons/bi";
import {useState} from "react";
import AddShortcutPopUp from "./AddShortcutPopUp";

export default function AddShortucts() {
  const [isAddShortcutOpen, setIsAddShortcutOpen] = useState(false)
  return (
    <>
      <div className="mt-2.5">
        <div
          onClick={() => setIsAddShortcutOpen(true)}
          className="size-28 flex rounded-md cursor-pointer flex-col items-center justify-evenly hover:bg-gray-200"
        >
          <div className="size-12 rounded-full bg-blue-300/80 flex justify-center items-center">
            <BiPlus className="text-lg " />
          </div>
          <p className="text-sm">Add shortcuts</p>
        </div>
      </div>
      {/* {isAddShortcutOpen && <AddShortcutPopUp />} */}
      <AddShortcutPopUp />
    </>
  );
}
