"use client";
import { useState } from "react";
import AddShortcutPopUp from "./AddShortcutPopUp";
import AddShortcutButton from "./AddShortcutButton";
import Shortcut from "./Shortcut";
import EditShortcutPopUp from "./EditShortcutPopUp";

export default function ShortcutsContainer() {
  const [isShortcutPopUpOpen, setIsShortcutPopUpOpen] = useState(false);
  const [shortcuts, setShortcuts] = useState([])
  const [editShortcut, setEditShortcut] = useState({
    status: 'close',
    element: null
  })

  return (
    <div className="mt-2.5 flex flex-row flex-wrap items-center justify-center gap-2">
      {shortcuts.map((shrtct) => {
        return (
          <Shortcut
            key={shrtct.url}
            shrtct={shrtct}
            setShortcuts={setShortcuts}
            setIsShortcutPopUpOpen={setIsShortcutPopUpOpen}
            setEditShortcut={setEditShortcut}
          />
        )
      })}

      {shortcuts.length < 5 && (
        <AddShortcutButton setIsAddShortcutOpen={setIsShortcutPopUpOpen} />
      )}

      {isShortcutPopUpOpen && (
        <AddShortcutPopUp
          changeOpen={setIsShortcutPopUpOpen}
          setShortcuts={setShortcuts}
        />
      )}

      {editShortcut.status === "open" && (
        <EditShortcutPopUp setEditShortcut={setEditShortcut} setShortcuts={setShortcuts} shortcuts={shortcuts} editShortcut={editShortcut} />
      )}
    </div>
  )
}
