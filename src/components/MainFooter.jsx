"use client"
import { useEffect, useState } from "react"
import CustomizeButton from "./Customize/CustomizeButton"
import CustomizeScreen from "./Customize/CustomizeScreen"
import UserCountry from "./UserCountry"
import { AnimatePresence } from "framer-motion"

export default function MainFooter() {
  const [isCustomizeOpen, setIsCustomizeOpen] = useState(false)

  useEffect(() => {
    try {
      const themeDetails = localStorage.getItem("themeDetails")
      const { selectedTab, selectedTheme, selectedPattern } = themeDetails
        ? JSON.parse(themeDetails)
        : {}

      window.localStorage.setItem(
        "themeDetails",
        JSON.stringify({
          selectedTab: selectedTab || "Light",
          selectedTheme: selectedTheme || "default-Light",
          selectedPattern: selectedPattern || "default",
        }),
      )
    } catch (error) {
      console.error("Error retrieving theme details from localStorage:", error)
      // Optionally set default values in localStorage
      window.localStorage.setItem(
        "themeDetails",
        JSON.stringify({
          selectedTab: "Light",
          selectedTheme: "default-Light",
          selectedPattern: "default",
        }),
      )
    }
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
