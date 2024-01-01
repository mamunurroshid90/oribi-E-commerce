import React from "react"
import { Link } from "react-router-dom"

const UserCard = () => {
  return (
    <div className=" w-[205px] border-[#dedcdc] border-[1px] absolute right-0 mt-3 z-10">
      <Link
        to="dashboard"
        className=" w-full capitalize inline-block font-dm text-sm text-[#262626] font-normal py-4  bg-white text-center hover:bg-black hover:font-bold hover:text-white transition-all duration-300"
      >
        my account
      </Link>
      <Link
        to="loginPage"
        className=" w-full capitalize inline-block font-dm text-sm text-[#262626] font-normal py-4  bg-white text-center hover:bg-black hover:font-bold hover:text-white transition-all duration-300"
      >
        log out
      </Link>
    </div>
  )
}

export default UserCard
