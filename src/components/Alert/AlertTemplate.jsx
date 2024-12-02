import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"

export default function AlertTemplate({
  icon,
  title,
  description,
  buttonText,
}) {
  const [isModalShown, setIsModalShown] = useState(true)

  function handleCloseModal(e) {
    if (e.target === e.currentTarget) {
      setIsModalShown(false)
    }
  }

  return (
    <AnimatePresence>
      {isModalShown && (
        <div
          onClick={handleCloseModal}
          className="absolute inset-0 flex items-center justify-center bg-gray-800/35 backdrop-blur-[2px] z-50"
        >
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0, transition: { duration: 0.1 } }}
            className="flex w-1/3 min-w-[300px] flex-col items-center justify-center gap-4 rounded-lg bg-muted px-1 py-4"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            {icon}
            <h2 className="text-center text-2xl">{title}</h2>
            <p
              className="text-center text-sm text-gray-600"
              dangerouslySetInnerHTML={{ __html: description }}
            />
            <button
              onClick={() => setIsModalShown(false)}
              className="otln mt-5 w-2/5 rounded-full px-1.5 py-2.5 text-center text-red-500 transition-all hover:bg-red-500 hover:text-white"
            >
              {buttonText}
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
