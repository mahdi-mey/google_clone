"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { AiOutlineCamera, AiOutlineSearch } from "react-icons/ai";

export default function SearchHeaderOptions() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get("searchTerm");
  const pathname = usePathname();
  const selectTab = (tab) => {
    router.push(
      `/search/${tab === "Images" ? "image" : "web"}?searchTerm=${searchTerm}`,
    );
  };
  return (
    <div className="mt-2 flex w-full select-none justify-center space-x-2 border-b text-sm text-gray-700 lg:justify-start lg:pl-60">
      <div
        onClick={() => selectTab("All")}
        className={`flex cursor-pointer items-center space-x-1 border-b-4 border-transparent px-2 pb-3 active:text-blue-500 ${
          pathname === "/search/web" && "!border-blue-600 !text-blue-600"
        }`}
      >
        <AiOutlineSearch className="text-md" />
        <p>All</p>
      </div>
      <div
        onClick={() => selectTab("Images")}
        className={`flex cursor-pointer items-center space-x-1 border-b-4 border-transparent px-2 pb-3 active:text-blue-500 ${
          pathname === "/search/image" && "!border-blue-600 !text-blue-600"
        }`}
      >
        <AiOutlineCamera className="text-md" />
        <p>Images</p>
      </div>
    </div>
  );
}
