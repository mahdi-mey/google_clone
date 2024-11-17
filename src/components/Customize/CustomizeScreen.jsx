import { AiOutlineClose } from "react-icons/ai"
import { motion } from "framer-motion"
import ToggleSwitches from "./ToggleSwitches"
import { useEffect, useState } from "react"
import LightThemeContainer from "./LightThemeContainer"
import DarkThemeContainer from "./DarkThemesContainer"

export default function CustomizeScreen({ setIsCustomizeOpen }) {
  const [selectedTheme, setSelectecThem] = useState("Light")
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
        className="flex w-80 flex-col gap-3 bg-gray-800/50 p-3 px-2 text-black shadow-lg backdrop-blur-3xl"
        initial={{ x: 320, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: 320, opacity: 0 }}
      >
        {/* close modal icon on small screens */}
        <AiOutlineClose
          onClick={() => setIsCustomizeOpen(false)}
          className="text-xlg absolute bottom-7 right-8 flex size-7 cursor-pointer items-center justify-center rounded-sm bg-gray-400 p-1 text-red-500 sm:hidden"
        />
        <ToggleSwitches
          selectedTheme={selectedTheme}
          setSelectecThem={setSelectecThem}
        />
        {selectedTheme === "Light" ? (
          <LightThemeContainer />
        ) : (
          <DarkThemeContainer />
        )}
      </motion.div>
    </motion.div>
  )
}
