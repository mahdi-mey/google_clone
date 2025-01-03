import { useState } from "react"
import { motion } from "framer-motion"

export default function EditShortcutPopUp({
  setEditShortcut,
  shortcuts,
  setShortcuts,
  editShortcut,
}) {
  const [nameInput, setNameInput] = useState("")
  const [urlInput, setUrlInput] = useState("")

  function handleEditShortcut(e) {
    e.preventDefault()

    const selectedElement = editShortcut.element

    if (selectedElement) {
      const updatedShortcuts = shortcuts.map((shortcut) => {
        if (shortcut.url === selectedElement.url) {
          return { ...shortcut, name: nameInput, url: urlInput }
        }
        return shortcut
      })

      setShortcuts(updatedShortcuts)
      closeModal()
    }
  }

  function closeModal() {
    console.log("close editshortcut modal function ran")
    setEditShortcut((prev) => {
      const { element } = prev
      return { status: "close", element: element }
    })
  }

  const canSubmit = nameInput.trim().length > 0 && urlInput.trim().length > 0

  return (
    <>
      <div
        className="absolute inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-[1px]"
        onClick={closeModal}
      >
        <motion.form
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0, transition: { duration: 0.1 } }}
          className="mx-auto flex h-72 w-full max-w-[512px] flex-col justify-evenly rounded-md bg-muted px-3 shadow-lg shadow-shadowColor"
          onClick={(e) => e.stopPropagation()}
          onSubmit={handleEditShortcut}
        >
          <h2 className="text-invertedText">Edit Shortcut</h2>
          <label
            className="text-sm font-bold text-gray-600 text-invertedText"
            htmlFor="shortcutName"
          >
            Name
          </label>
          <input
            className="h-9 rounded-t-md border-b-2 border-gray-500 bg-gray-100/70 text-black ps-2 outline-none focus:border-primary"
            type="text"
            name="shortcutName"
            id="shortcutName"
            value={nameInput}
            onChange={(e) => setNameInput(e.target.value)}
            autoComplete="off"
            autoFocus
            maxLength={15}
          />
          <label
            className="text-sm font-bold text-gray-600 text-invertedText"
            htmlFor="shortcutUrl"
          >
            Url
          </label>
          <input
            className="h-9 rounded-t-md border-b-2 border-gray-500 bg-gray-100/70 text-black ps-2 outline-none focus:border-primary"
            type="text"
            name="shortcutUrl"
            id="shortcutUrl"
            value={urlInput}
            onChange={(e) => setUrlInput(e.target.value)}
            autoComplete="off"
          />

          <div className="mr-1 flex items-center justify-end gap-3">
            <button
              type="button"
              className="border-1 rounded-full border border-primary px-3 py-1.5 text-base text-primary transition-all duration-200 active:scale-90"
              onClick={closeModal}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-full bg-primary px-3 py-1.5 text-base text-white transition-all duration-200 active:scale-90 disabled:cursor-not-allowed disabled:bg-gray-400"
              disabled={!canSubmit}
            >
              Done
            </button>
          </div>
        </motion.form>
      </div>
    </>
  )
}
