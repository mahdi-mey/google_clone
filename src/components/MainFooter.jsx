"use client"
import { useState } from "react"
import CustomizeButton from "./Customize/CustomizeButton"
import CustomizeScreen from "./Customize/CustomizeScreen"
import UserCountry from "./UserCountry"
import { AnimatePresence } from "framer-motion"

export default function MainFooter() {
  const [isCustomizeOpen, setIsCustomizeOpen] = useState(false)
  return (
    <footer className="absolute bottom-0 left-0 right-0 flex items-center justify-between bg-gray-200 py-2">
      <UserCountry />
      <CustomizeButton setIsCustomizeOpen={setIsCustomizeOpen} />
      <AnimatePresence>
        {isCustomizeOpen && (
          <CustomizeScreen setIsCustomizeOpen={setIsCustomizeOpen} />
        )}
      </AnimatePresence>
    </footer>
  )
}
