import React, { useEffect, useState } from "react"
import Image from "../utilities/Image"
import { FaHeart } from "react-icons/fa"
import { HiOutlineRefresh } from "react-icons/hi"
import { FaShoppingCart } from "react-icons/fa"
import { Link } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { addToCart } from "../../slice/cartSlice"
import { ToastContainer, toast } from "react-toastify"

const ProductCart = ({
  id,
  productName,
  productPrice,
  isNew,
  discount,
  color,
  productImage,
  allInfo,
}) => {
  let [newProduct, setNewProduct] = useState(false)

  const dispatch = useDispatch()
  const data = useSelector((state) => state)
  console.log(data.cartinfo.value.length)

  useEffect(() => {
    if (isNew == "true") {
      setNewProduct(true)
    } else {
      setNewProduct(false)
    }
  }, [])

  let handleAddToCart = (SingleProduct) => {
    dispatch(addToCart(SingleProduct))
    toast("add to cart successfully")
  }

  return (
    <div>
      <ToastContainer />
      <div>
        <div className="h-[370px] relative group overflow-hidden">
          <Link to={`/product/${id}`}>
            <Image
              className="w-full h-full object-cover"
              source={productImage}
              alt="img"
            />
          </Link>
          {newProduct ? (
            <span className="px-8 py-2 bg-[#262626] text-white capitalize text-sm font-dm font-bold left-5 top-5 absolute">
              new
            </span>
          ) : (
            ""
          )}
          {discount == "false" ? (
            ""
          ) : (
            <span className="px-8 py-2 bg-[#262626] text-white capitalize text-sm font-dm font-bold left-5 top-5 absolute">
              {discount}%
            </span>
          )}
          <div className="w-full h-[200px] bg-white absolute left-0 bottom-0 translate-y-[100%] transition-all duration-300 group-hover:translate-y-0 ">
            <ul className="flex flex-col justify-end p-[30px] gap-5 ">
              <li className="flex items-center gap-4 justify-end">
                <span className="inline-flex text-[#767676] text-base font-dm capitalize cursor-pointer hover:text-[#262626] transition-all duration-300">
                  Add to Wish List
                </span>
                <FaHeart />
              </li>
              <li className="flex items-center gap-4 justify-end">
                <span className="inline-flex text-[#767676] text-base font-dm capitalize hover:text-[#262626] transition-all duration-300 cursor-pointer">
                  Compare
                </span>
                <HiOutlineRefresh />
              </li>
              <li
                onClick={() => handleAddToCart(allInfo)}
                className="flex items-center gap-4 justify-end"
              >
                <span className="inline-flex text-[#767676] text-base font-dm capitalize hover:text-[#262626] transition-all duration-300 cursor-pointer">
                  Add to Cart
                </span>
                <FaShoppingCart />
              </li>
            </ul>
          </div>
        </div>
        <div className="flex items-center justify-between mt-6">
          <h5 className="text-[#262626] font-dm font-bold text-[20px] leading-normal capitalize">
            {productName}
          </h5>
          <span className="text-[#767676] text-base font-dm leading-[30px]">
            ${productPrice}
          </span>
        </div>
        {color == "false" ? (
          ""
        ) : (
          <div>
            <span className="font-dm text-base text-[#767676] font-normal leading-[30px] capitalize">
              {color}
            </span>
          </div>
        )}
      </div>
    </div>
  )
}

export default ProductCart
