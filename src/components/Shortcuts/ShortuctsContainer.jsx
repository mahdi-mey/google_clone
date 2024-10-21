"use client";
import { useState } from "react";
import AddShortcutPopUp from "./AddShortcutPopUp";
import AddShortcutButton from "./AddShortcutButton";

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
            <div className="size-12 rounded-full bg-gray-300/80 flex justify-center items-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={faviconUrl}
                alt={`${shrtct.name} favicon`}
                className="w-6 h-6 rounded-full"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "/images/default-web.jpg";
                }}
              />
            </div>
            <p className="text-sm">{shrtct.name}</p>
          </a>
        );
      })}

      <AddShortcutButton setIsAddShortcutOpen={setIsAddShortcutOpen} />
      {isAddShortcutOpen && (
        <AddShortcutPopUp
          changeOpen={setIsAddShortcutOpen}
          setShortcuts={setShortcuts}
        />
      )}
    </div>
  );
}
