import React from "react"
import BreadCrumbs from "../../components/utilities/BreadCrumbs"
import { Link, NavLink, Outlet } from "react-router-dom"

const MyAccount = () => {
  let pathname = window.location.href
  let pathArray = pathname.split("/")
  let finalPath = pathArray[pathArray.length - 1]
  return (
    <section className="mt-[124px]">
      <div className="max-w-container mx-auto">
        <h3 className="font-dm text-[49px] text-[#262626] font-bold leading-normal">
          MyAccount
        </h3>
        <BreadCrumbs lastPath={finalPath} />
        <div className="mt-[127px] flex justify-between gap-10 mb-[140px]">
          <div className="w-[234px] flex flex-col">
            <NavLink
              to="dashboard"
              className="font-dm text-[#767676] text-base font-normal leading-[30px] py-5 border-b pt-0 border-[#f0f0f0] [&.active]:text-[#262626] [&.active]:font-bold"
            >
              Dashboard
            </NavLink>
            <NavLink
              to="others"
              className="font-dm text-[#767676] text-base font-normal leading-[30px] py-5  border-b border-[#f0f0f0] [&.active]:text-[#262626] [&.active]:font-bold"
            >
              Others
            </NavLink>
            <NavLink
              to="download"
              className="font-dm text-[#767676] text-base font-normal leading-[30px] py-5 border-b border-[#f0f0f0] [&.active]:text-[#262626] [&.active]:font-bold"
            >
              Downloads
            </NavLink>
            <NavLink
              to="address"
              className="font-dm text-[#767676] text-base font-normal leading-[30px] py-5 border-b border-[#f0f0f0] [&.active]:text-[#262626] [&.active]:font-bold"
            >
              Addresses
            </NavLink>
            <NavLink
              to="accountDetails"
              className="font-dm text-[#767676] text-base font-normal leading-[30px] py-5 border-b border-[#f0f0f0] [&.active]:text-[#262626] [&.active]:font-bold"
            >
              AccountDetails
            </NavLink>
            <Link
              to="#"
              className="font-dm text-[#767676] text-base font-normal leading-[30px] py-5 border-b border-[#f0f0f0] [&.active]:text-[#262626] [&.active]:font-bold"
            >
              Logout
            </Link>
          </div>
          <div className="w-[1330px] bg-red-300">
            <Outlet />
          </div>
        </div>
      </div>
    </section>
  )
}

export default MyAccount
