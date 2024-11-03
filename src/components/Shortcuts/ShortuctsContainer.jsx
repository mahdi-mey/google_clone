"use client";
import { useState } from "react";
import ShortcutPopUp from "./ShortcutPopUp";
import AddShortcutButton from "./AddShortcutButton";
import Shortcut from "./Shortcut";

export default function ShortcutsContainer() {
  const [isAddShortcutOpen, setIsAddShortcutOpen] = useState(false);
  const [shortcuts, setShortcuts] = useState([])

  return (
    <div className="mt-2.5 flex flex-row items-center justify-center gap-2 flex-wrap">
      {shortcuts.map((shrtct) => {
        return (
          <Shortcut
            key={shrtct.url}
            shrtct={shrtct}
            setShortcuts={setShortcuts}
          />
        )
      })}

      {shortcuts.length < 10 && (
        <AddShortcutButton setIsAddShortcutOpen={setIsAddShortcutOpen} />
      )}

      {isAddShortcutOpen && (
        <ShortcutPopUp
          changeOpen={setIsAddShortcutOpen}
          setShortcuts={setShortcuts}
        />
      )}
    </div>
  );
}
