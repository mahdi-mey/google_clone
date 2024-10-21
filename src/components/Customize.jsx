import { BiPencil } from "react-icons/bi"; 
import React from 'react'

export default function Customize() {
  return (
    <button className='text-right mr-8 px-6 py-1 rounded-2xl bg-[--primary-color] text-white flex justify-end items-center gap-3'> <BiPencil /> Customize</button>
  )
}
