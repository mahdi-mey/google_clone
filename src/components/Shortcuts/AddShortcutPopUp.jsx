"use client";

import { useState } from "react";

export default function AddShortcutPopUp({ changeOpen, setShortcuts }) {
  const [nameInput, setNameInput] = useState("");
  const [urlInput, setUrlnInput] = useState("");

  function addShortcut(e) {
    e.preventDefault()
    setShortcuts(prevValues => {
      console.log('inside setShortcuts function');
      return [...prevValues, { name: nameInput, url: urlInput }];
    })
    closeModal()
  }

  function closeModal() {
    changeOpen(false);
  }

  const canSubmit = nameInput.trim().length > 0 && urlInput.trim().length > 0;

  return (
    <div
      className="absolute inset-0 bg-black/15 flex justify-center items-center"
      onClick={() => closeModal}
    >
      <form
        className="h-72 bg-white w-full max-w-[512px] mx-auto rounded-md flex flex-col justify-evenly px-3"
        onClick={(e) => e.stopPropagation()}
        onSubmit={addShortcut}
      >
        <h2>Add Shortcut</h2>
        <label
          className="font-bold text-sm text-gray-600"
          htmlFor="shortcutName"
        >
          Name
        </label>
        <input
          className="bg-gray-200/70 focus:border-blue-600 outline-none ps-2 rounded-t-md h-9 border-b-2 border-gray-500"
          type="text"
          name="shortcutName"
          id="shortcutName"
          value={nameInput}
          onChange={(e) => setNameInput(e.target.value)}
        />
        <label
          className="font-bold text-sm text-gray-600"
          htmlFor="shortcutUrl"
        >
          Url
        </label>
        <input
          className="bg-gray-200/70 focus:border-blue-600 outline-none ps-2 rounded-t-md h-9 border-b-2 border-gray-500"
          type="text"
          name="shortcutUrl"
          id="shortcutUrl"
          value={urlInput}
          onChange={(e) => setUrlnInput(e.target.value)}
        />

        <div className="flex justify-end items-center gap-3 mr-1">
          <button
            className="py-1.5 px-3 rounded-full border-1 border  border-blue-500 text-blue-500 text-base"
            onClick={closeModal}
          >
            Cancel
          </button>
          <button
            className="py-1.5 px-3 rounded-full disabled:cursor-not-allowed disabled:bg-gray-400 bg-blue-500 text-white text-base"
            disabled={!canSubmit}
          >
            Done
          </button>
        </div>
      </form>
    </div>
  );
}
