import { BiPencil } from "react-icons/bi";
import React from "react";

export default function Customize() {
  return (
    <button className="mr-8 flex items-center justify-end gap-3 rounded-2xl bg-[--primary-color] px-6 py-1 text-right text-white">
      {" "}
      <BiPencil /> Customize
    </button>
  );
}
