import { AiOutlineSearch } from "react-icons/ai";
import { BsFillMicFill } from "react-icons/bs";

export default function MainForm() {
  return (
    <form className="flex w-full mt-5 mx-auto max-w-[90%] border border-gray-300 px-5 py-3 rounded-full hover:shadow-md focus-within:shadow-lg transition-shadow sm:max-w-xl lg:max-w-2xl">
      <AiOutlineSearch className="text-xl text-gray-600 mr-3" />
      <input type="text" className="flex-grow focus:outline-none" />
      <BsFillMicFill className="text-lg text-gray-600" />
    </form>
  );
}
