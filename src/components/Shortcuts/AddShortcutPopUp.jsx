"use client";

import { useState } from "react";

export default function AddShortcutPopUp({ changeOpen, setShortcuts }) {
  const [nameInput, setNameInput] = useState("");
  const [urlInput, setUrlnInput] = useState("");

  function addShortcut(e) {
    e.preventDefault();
    setShortcuts((prevValues) => {
      console.log("inside setShortcuts function");
      return [...prevValues, { name: nameInput, url: urlInput }];
    });
    closeModal();
  }

  function closeModal() {
    changeOpen(false);
  }

  const canSubmit = nameInput.trim().length > 0 && urlInput.trim().length > 0;

  return (
    <div
      className="absolute inset-0 flex items-center justify-center bg-black/15"
      onClick={() => closeModal}
    >
      <form
        className="mx-auto flex h-72 w-full max-w-[512px] flex-col justify-evenly rounded-md bg-white px-3"
        onClick={(e) => e.stopPropagation()}
        onSubmit={addShortcut}
      >
        <h2>Add Shortcut</h2>
        <label
          className="text-sm font-bold text-gray-600"
          htmlFor="shortcutName"
        >
          Name
        </label>
        <input
          className="h-9 rounded-t-md border-b-2 border-gray-500 bg-gray-200/70 ps-2 outline-none focus:border-blue-600"
          type="text"
          name="shortcutName"
          id="shortcutName"
          value={nameInput}
          onChange={(e) => setNameInput(e.target.value)}
          autoComplete="off"
          autoFocus
        />
        <label
          className="text-sm font-bold text-gray-600"
          htmlFor="shortcutUrl"
        >
          Url
        </label>
        <input
          className="h-9 rounded-t-md border-b-2 border-gray-500 bg-gray-200/70 ps-2 outline-none focus:border-blue-600"
          type="text"
          name="shortcutUrl"
          id="shortcutUrl"
          value={urlInput}
          onChange={(e) => setUrlnInput(e.target.value)}
          autoComplete="off"
        />

        <div className="mr-1 flex items-center justify-end gap-3">
          <button
            className="border-1 rounded-full border border-blue-500 px-3 py-1.5 text-base text-blue-500"
            onClick={closeModal}
          >
            Cancel
          </button>
          <button
            className="rounded-full bg-blue-500 px-3 py-1.5 text-base text-white disabled:cursor-not-allowed disabled:bg-gray-400"
            disabled={!canSubmit}
          >
            Done
          </button>
        </div>
      </form>
    </div>
  );
}