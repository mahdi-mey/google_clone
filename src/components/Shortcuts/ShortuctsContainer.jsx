"use client";
import { useState } from "react";
import AddShortcutPopUp from "./AddShortcutPopUp";
import AddShortcutButton from "./AddShortcutButton";
import Shortcut from "./Shortcut";

export default function ShortcutsContainer() {
  const [isAddShortcutOpen, setIsAddShortcutOpen] = useState(false);
  const [shortcuts, setShortcuts] = useState([]);

  return (
    <div className="mt-2.5 flex flex-row items-center justify-center gap-2">
      {shortcuts.map((shrtct) => {
        let faviconUrl;
        try {
          const parsedUrl = new URL(shrtct.url);
          faviconUrl = `${parsedUrl.origin}/favicon.ico`;
        } catch (e) {
          faviconUrl = "/images/default-web.jpg";
        }
        return (
          <Shortcut key={shrtct.url} shrtct={shrtct} faviconUrl={faviconUrl} />
        );
      })}

      {shortcuts.length < 10 && (
        <AddShortcutButton setIsAddShortcutOpen={setIsAddShortcutOpen} />
      )}

      {isAddShortcutOpen && (
        <AddShortcutPopUp
          changeOpen={setIsAddShortcutOpen}
          setShortcuts={setShortcuts}
        />
      )}
    </div>
  );
}