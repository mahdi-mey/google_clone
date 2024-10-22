import Customize from "./Customize/CustomizeButton";
import UserCountry from "./UserCountry";

export default function MainFooter() {
  return (
    <footer className="flex items-center justify-between bg-gray-200 py-2">
      <UserCountry />
      <Customize />
    </footer>
  );
}
