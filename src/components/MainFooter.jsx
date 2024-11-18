"use client"
import { useEffect, useState } from "react"
import CustomizeButton from "./Customize/CustomizeButton"
import CustomizeScreen from "./Customize/CustomizeScreen"
import UserCountry from "./UserCountry"
import { AnimatePresence } from "framer-motion"

export default function MainFooter() {
  const [isCustomizeOpen, setIsCustomizeOpen] = useState(false)

  useEffect(() => {
    window.localStorage.setItem(
      "themeDetails",
      JSON.stringify({
        selectedTab: "Light",
        selectedTheme: "default-Light",
        selectedPattern: "default",
      }),
    )
  }, [])

  return (
    <footer className="absolute bottom-0 left-0 right-0 flex items-center justify-between bg-muted py-2">
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
