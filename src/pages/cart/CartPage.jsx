import React, { useEffect, useState } from "react"
import BreadCrumbs from "../../components/utilities/BreadCrumbs"
import { RxCross2 } from "react-icons/rx"

const CartPage = () => {
  let pathname = window.location.href
  let pathArray = pathname.split("/")
  let finalPath = pathArray[pathArray.length - 1]

  let [quantity, setQuantity] = useState(5)
  let [cursor, setCursor] = useState(true)

  let increment = () => {
    quantity++
    setQuantity(quantity)
  }

  let decrement = () => {
    if (quantity > 1) {
      quantity--
      setQuantity(quantity)
    }
  }

  useEffect(() => {
    if (quantity == 1) {
      setCursor(false)
    } else {
      setCursor(true)
    }
  }, [quantity])

  return (
    <section className="pt-[124px] pb-[140px]">
      <div className="max-w-container mx-auto">
        <h3 className="font-dm text-[49px] capitalize text-[#262626] font-bold leading-normal">
          Cart
        </h3>
        <BreadCrumbs lastPath={finalPath} />
      </div>
      <div className="mt-[136px] max-w-container mx-auto">
        <div className="py-8 px-5 w-full bg-[#F5F5F3] flex">
          <div className="text-[#262626] w-1/4 font-dm text-base font-bold leading-6 capitalize">
            <h5>Product</h5>
          </div>
          <div className="text-[#262626] w-1/4 font-dm text-base font-bold leading-6 capitalize">
            <h5>Price</h5>
          </div>
          <div className="text-[#262626] w-1/4 font-dm text-base font-bold leading-6 capitalize">
            <h5>Quantity</h5>
          </div>
          <div className="text-[#262626] w-1/4 font-dm text-base font-bold leading-6 capitalize">
            <h5>Total</h5>
          </div>
        </div>
        <div>
          <div className="py-[30px] px-5 flex items-center border-b border-[#f0f0f0]">
            <div className="flex items-center w-1/4 ">
              <div className="pr-10 text-lg font-bold cursor-pointer">
                <RxCross2 />
              </div>
              <div className="w-[100px] h-[100px] bg-red-500"></div>
              <h5 className="pl-5 text-[#262626] text-base font-bold font-dm leading-6 capitalize">
                product name
              </h5>
            </div>
            <div className="w-1/4 font-dm text-xl text-[#262626] font-bold leading-normal">
              <h4>$44.00</h4>
            </div>
            <div className="w-1/4">
              <div className="w-[140px] border border-[#f0f0f0] py-1 px-5 flex justify-center items-center gap-9 text-xl font-bold">
                <button
                  className={`${
                    cursor ? "cursor-pointer" : "cursor-not-allowed"
                  }`}
                  onClick={decrement}
                >
                  -
                </button>
                <span>{quantity}</span>
                <button onClick={increment}> + </button>
              </div>
            </div>
            <div className="w-1/4 font-dm text-xl text-[#262626] font-bold leading-normal">
              <h4>$44.00</h4>
            </div>
          </div>
          <div className="py-[30px] px-5 flex items-center border-b border-[#f0f0f0]">
            <div className="flex items-center w-1/4 ">
              <div className="pr-10 text-lg font-bold cursor-pointer">
                <RxCross2 />
              </div>
              <div className="w-[100px] h-[100px] bg-red-500"></div>
              <h5 className="pl-5 text-[#262626] text-base font-bold font-dm leading-6 capitalize">
                product name
              </h5>
            </div>
            <div className="w-1/4 font-dm text-xl text-[#262626] font-bold leading-normal">
              <h4>$44.00</h4>
            </div>
            <div className="w-1/4">
              <div className="w-[140px] border border-[#f0f0f0] py-1 px-5 flex justify-center items-center gap-9 text-xl font-bold">
                <button
                  className={`${
                    cursor ? "cursor-pointer" : "cursor-not-allowed"
                  }`}
                  onClick={decrement}
                >
                  -
                </button>
                <span>{quantity}</span>
                <button onClick={increment}> + </button>
              </div>
            </div>
            <div className="w-1/4 font-dm text-xl text-[#262626] font-bold leading-normal">
              <h4>$44.00</h4>
            </div>
          </div>
          <div className="py-[30px] px-5 flex items-center border-b border-[#f0f0f0]">
            <div className="flex items-center w-1/4 ">
              <div className="pr-10 text-lg font-bold cursor-pointer">
                <RxCross2 />
              </div>
              <div className="w-[100px] h-[100px] bg-red-500"></div>
              <h5 className="pl-5 text-[#262626] text-base font-bold font-dm leading-6 capitalize">
                product name
              </h5>
            </div>
            <div className="w-1/4 font-dm text-xl text-[#262626] font-bold leading-normal">
              <h4>$44.00</h4>
            </div>
            <div className="w-1/4">
              <div className="w-[140px] border border-[#f0f0f0] py-1 px-5 flex justify-center items-center gap-9 text-xl font-bold">
                <button
                  className={`${
                    cursor ? "cursor-pointer" : "cursor-not-allowed"
                  }`}
                  onClick={decrement}
                >
                  -
                </button>
                <span>{quantity}</span>
                <button onClick={increment}> + </button>
              </div>
            </div>
            <div className="w-1/4 font-dm text-xl text-[#262626] font-bold leading-normal">
              <h4>$44.00</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CartPage
