import React from "react";
import { Link, NavLink } from "react-router-dom";
import Image from "../utilities/Image";
import Logo from "../../assets/images/logo.png";

const Navbar = () => {
  return (
    <>
      <nav className="py-8">
        <div className="max-w-container mx-auto">
          <div className="flex justify-between items-center">
            <div className="nav_logo">
              <Link to="/">
                <Image source={Logo} alt={"logo.png"}></Image>
              </Link>
            </div>
            <div className="nav_menu">
              <ul className="flex gap-8">
                <li>
                  <NavLink
                    className="text-base font-medium text-[#767676] transition-all duration-300 hover:text-[#262626] [&.active]:text-red-500 font-dm "
                    to=""
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="text-base font-medium text-[#767676] transition-all duration-300 hover:text-[#262626] [&.active]:text-red-500 font-dm "
                    to="shop"
                  >
                    Shop
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="text-base font-medium text-[#767676] transition-all duration-300 hover:text-[#262626] [&.active]:text-red-500 font-dm "
                    to="about"
                  >
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="text-base font-medium text-[#767676] transition-all duration-300 hover:text-[#262626] [&.active]:text-red-500 font-dm "
                    to="contact"
                  >
                    Contact
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="text-base font-medium text-[#767676] transition-all duration-300 hover:text-[#262626] [&.active]:text-red-500 font-dm "
                    to="journal"
                  >
                    Journal
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
