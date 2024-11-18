import { BsMoon } from "react-icons/bs"
import { BsSun } from "react-icons/bs"

export default function ToggleSwitches({ selectedTheme, setSelectedTheme }) {
  function handleClick(theme) {
    // Get the previous theme details and parse it
    const storedThemeDetails = localStorage.getItem("themeDetails")
    const prevThemeDetails = storedThemeDetails
      ? JSON.parse(storedThemeDetails)
      : {}

    // Create new theme details
    const themeDetails = {
      ...prevThemeDetails,
      selectedTab: theme,
    }

    // Update state and localStorage
    setSelectedTheme(theme)
    localStorage.setItem("themeDetails", JSON.stringify(themeDetails))

    // const prevThemeDetails = localStorage.getItem(JSON.parse("themeDetails"))
    // const themeDetails = {
    //   ...prevThemeDetails,
    //   selectedTab: theme,
    // }
    // setSelectedTheme(theme)
    // localStorage.setItem("themeDetails", JSON.stringify(themeDetails))
  }

  return (
    <div className="mx-auto mt-4 flex h-12 w-4/6 gap-1 rounded-full p-1 outline outline-1 outline-primary">
      <button
        onClick={() => handleClick("Light")}
        className={`flex flex-grow flex-row items-center justify-center gap-1 rounded-full text-white transition-all ${selectedTheme === "Light" ? "bg-primary" : "hover:bg-gray-400"}`}
      >
        <BsSun />
        Light
      </button>
      <button
        onClick={() => handleClick("Dark")}
        className={`flex flex-grow flex-row items-center justify-center gap-1 rounded-full text-white transition-all ${selectedTheme === "Dark" ? "bg-primary" : "hover:bg-gray-400"}`}
      >
        <BsMoon />
        Dark
      </button>
    </div>
  )
}
