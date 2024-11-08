import { motion } from "framer-motion"
import ToggleSwitches from "./ToggleSwitches"

export default function CustomizeScreen({ setIsCustomizeOpen }) {
  function closeModal() {
    console.log("close modal")
    setIsCustomizeOpen(false)
  }
  return (
    <motion.div
      onClick={closeModal}
      className="absolute bottom-0 right-0 flex h-dvh w-screen justify-end bg-gray-800/35 text-white backdrop-blur-[2px]"
    >
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className="w-80 bg-white/80 text-black"
        initial={{ x: 300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: 300, opacity: 0 }}
      >
        <ToggleSwitches />
      </motion.div>
    </motion.div>
  )
}
