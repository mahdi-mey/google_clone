import { motion } from "framer-motion"
import ToggleSwitches from "./ToggleSwitches"
import { useEffect } from "react"

export default function CustomizeScreen({ setIsCustomizeOpen }) {
  function closeModal() {
    setIsCustomizeOpen(false)
  }

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        closeModal()
      }
    }
    window.addEventListener("keydown", handleKeyDown)

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [])

  return (
    <motion.div
      onClick={closeModal}
      className="absolute bottom-0 right-0 flex h-dvh w-screen justify-end text-white"
    >
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className="w-80 bg-gray-800/50 text-black shadow-lg backdrop-blur-3xl"
        initial={{ x: 320, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: 320, opacity: 0 }}
      >
        <ToggleSwitches />
      </motion.div>
    </motion.div>
  )
}
