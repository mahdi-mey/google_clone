"use client";
import { BiPlus } from "react-icons/bi";
import { useState } from "react";
import AddShortcutPopUp from "./AddShortcutPopUp";

export default function ShortcutsContainer() {
  const [isAddShortcutOpen, setIsAddShortcutOpen] = useState(false);
  const [shortcuts, setShortcuts] = useState([]);

  return (
    <div className="flex flex-row items-center justify-center gap-2 mt-2.5">
      {shortcuts.map((shrtct) => {
        const faviconUrl = `${new URL(shrtct.url).origin}/favicon.ico`;
        return (
          <a
            href={shrtct.url}
            key={shrtct.name}
            target="_blank"
            rel="noopener noreferrer"
            className="size-28 flex rounded-md cursor-pointer flex-col items-center justify-evenly transition-all hover:bg-gray-200"
          >
            <div className="size-12 rounded-full bg-blue-300/80 flex justify-center items-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={faviconUrl}
                alt={`${shrtct.name} favicon`}
                className="w-6 h-6 rounded-full"
              />
            </div>
            <p className="text-sm">{shrtct.name}</p>
          </a>
        );
      })}

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
        <AddShortcutPopUp
          changeOpen={setIsAddShortcutOpen}
          setShortcuts={setShortcuts}
        />
      )}
    </div>
  );
}
