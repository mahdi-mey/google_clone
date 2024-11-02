import Customize from "./Customize/CustomizeButton"
import UserCountry from "./UserCountry"

export default function MainFooter() {
  return (
    <footer className="absolute bottom-0 flex items-center justify-between bg-gray-200 py-2 right-0 left-0">
      <UserCountry />
      <Customize />
    </footer>
  )
}
