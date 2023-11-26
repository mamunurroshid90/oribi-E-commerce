import React, { useEffect, useRef, useState } from "react";
import { HiMiniBars2 } from "react-icons/hi2";
import { IoSearch } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { FaSortDown } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import Cart from "../utilities/Cart";
import UserCart from "../utilities/userCart";

const SearchBar = () => {
  let [showCart, setShowCart] = useState(false);
  let cartref = useRef();
  let [showUserCart, setShowUserCart] = useState(false);
  let userCartref = useRef();

  useEffect(() => {
    document.body.addEventListener("click", (e) => {
      if (cartref.current.contains(e.target)) {
        setShowCart(true);
      } else {
        setShowCart(false);
      }
      // console.log(cartref.current.contains(e.target));
      if (userCartref.current.contains(e.target)) {
        setShowUserCart(true);
      } else {
        setShowUserCart(false);
      }
    });
  }, []);

  return (
    <>
      <div className="bg-[#F5F5F3] py-6">
        <div className="max-w-container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-x-3 cursor-pointer">
            <HiMiniBars2 />
            <span className="text-[14px] capitalize font-normal font-dm">
              Shop by Category
            </span>
          </div>
          <div className="w-[600px] relative cursor-pointer">
            <search>
              <input
                type="text"
                placeholder="Search Products"
                className="w-full py-4 pl-5 pr-10 font-dm text-sm font-normal"
              />
            </search>
            <IoSearch className="absolute top-[50%] translate-y-[-50%] right-4 " />
          </div>
          <div className="flex justify-end gap-x-10 items-center">
            <div ref={userCartref} className="relative">
              <div
                onClick={() => setShowUserCart(!showUserCart)}
                className="flex items-center gap-2 cursor-pointer"
              >
                <FaUser />
                <FaSortDown />
              </div>
              {showUserCart && <UserCart />}
            </div>
            <div ref={cartref} className="cursor-pointer relative">
              <FaShoppingCart
                onClick={() => setShowCart(!showCart)}
                className="text-lg"
              />
              {showCart && <Cart />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
