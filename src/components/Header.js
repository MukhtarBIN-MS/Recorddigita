import React from 'react'
import profile from '../Images/no-avatar.jpg';
import { FaBell, FaList } from "react-icons/fa";
export default function Header() {
  return (
    <div class="mb-5 sticky top-0 z-10">
    <div class=" flex flex-row justify-between">
      <div className='flex flex-row items-center justify-center'>
      <FaList className="mr-3 w-7 h-7 mt-2" />
        <h3 class="px-5 text-4xl font-bold">RecordDigita</h3>
      </div>
      <div class="flex flex-row items-center w-40 justify-between">
      <FaBell className="items-center justify-center w-5 h-5" />
      <img src={profile} alt='profile_image' class='w-10 h-10'/>
      </div>
    </div>
    <hr className="mt-3 px-(-5) py-(-5) border-black"/>
  </div>
  )
}
