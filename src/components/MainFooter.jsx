import Customize from "./Customize";
import UserCountry from "./UserCountry";

export default function MainFooter() {
  return (
    <footer className="flex justify-between bg-gray-200 py-2 items-center">
      <UserCountry />
      <Customize />
    </footer>
  );
}
