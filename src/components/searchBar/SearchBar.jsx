import React, { useEffect, useRef, useState } from "react"
import { HiMiniBars2 } from "react-icons/hi2"
import { IoSearch } from "react-icons/io5"
import { FaUser } from "react-icons/fa"
import { FaSortDown } from "react-icons/fa"
import { FaShoppingCart } from "react-icons/fa"
import Cart from "../utilities/Cart"
import CategoryCard from "../utilities/CategoryCard"
import UserCard from "../utilities/UserCard"
import { useSelector, useDispatch } from "react-redux"

const SearchBar = () => {
  let [showCart, setShowCart] = useState(false)
  let cartref = useRef()
  let [showUserCart, setShowUserCart] = useState(false)
  let userCartref = useRef()
  let [showCategory, setShowCategory] = useState(false)
  let categoryref = useRef()

  const data = useSelector((state) => state)

  useEffect(() => {
    document.body.addEventListener("click", (e) => {
      if (cartref.current.contains(e.target)) {
        setShowCart(true)
      } else {
        setShowCart(false)
      }
      if (userCartref.current.contains(e.target)) {
        setShowUserCart(true)
      } else {
        setShowUserCart(false)
      }
      if (categoryref.current.contains(e.target)) {
        setShowCategory(true)
      } else {
        setShowCategory(false)
      }
    })
  }, [])

  return (
    <>
      <div className="bg-[#F5F5F3] py-6">
        <div className="max-w-container mx-auto flex justify-between items-center">
          <div ref={categoryref} className="relative">
            <div
              onClick={() => setShowCategory(!showCategory)}
              className="flex items-center gap-x-3 cursor-pointer"
            >
              <HiMiniBars2 />
              <span className="text-[14px] capitalize font-normal font-dm">
                Shop by Category
              </span>
            </div>
            {showCategory && <CategoryCard />}
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
              {showUserCart && <UserCard />}
            </div>
            <div ref={cartref} className="cursor-pointer relative">
              <FaShoppingCart
                onClick={() => setShowCart(!showCart)}
                className="text-lg"
              />
              <div className=" absolute w-10 h-10 bg-red-500 top-3 left-3 rounded-full flex items-center justify-center text-white font-dm">
                <span className="text-white text-xl">
                  {data.cartinfo && data.cartinfo.value.length}
                </span>
              </div>
              {showCart && <Cart />}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SearchBar
