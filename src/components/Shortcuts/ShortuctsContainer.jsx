"use client";
import { useState } from "react";
import ShortcutPopUp from "./ShortcutPopUp";
import AddShortcutButton from "./AddShortcutButton";
import Shortcut from "./Shortcut";

export default function ShortcutsContainer() {
  const [isShortcutPopUpOpen, setIsShortcutPopUpOpen] = useState(false);
  const [shortcuts, setShortcuts] = useState([])

  return (
    <div className="mt-2.5 flex flex-row flex-wrap items-center justify-center gap-2">
      {shortcuts.map((shrtct) => {
        return (
          <Shortcut
            key={shrtct.url}
            shrtct={shrtct}
            setShortcuts={setShortcuts}
            setIsShortcutPopUpOpen={setIsShortcutPopUpOpen}
          />
        )
      })}

      {shortcuts.length < 5 && (
        <AddShortcutButton setIsAddShortcutOpen={setIsShortcutPopUpOpen} />
      )}

      {isShortcutPopUpOpen && (
        <ShortcutPopUp
          changeOpen={setIsShortcutPopUpOpen}
          setShortcuts={setShortcuts}
        />
      )}
    </div>
  )
}
