import React, { useEffect, useState } from "react"
import { RxCross2 } from "react-icons/rx"
import { Link } from "react-router-dom"
import Image from "./Image"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { useSelector, useDispatch } from "react-redux"

//   id: 0,
//   title: "I phone 15 pro",
//   price: "150000",
// },
// {
//   id: 1,
//   title: "titan watch",
//   price: "2500",
// },
// {
//   id: 2,
//   title: "Logitech Headphone",
//   price: "1700",
// },
// {
//   id: 3,
//   title: 'Value top Monitor 22" ',
//   price: "9200",
// },

const Cart = () => {
  const data = useSelector((state) => state)
  let cartItemValue = data.cartinfo && data.cartinfo.value
  const [cartInfo, setCartInfo] = useState(cartItemValue)

  let [totalPrice, setTotalPrice] = useState(0)
  useEffect(() => {
    for (let i = 0; i < cartInfo.length; i++) {
      totalPrice += parseInt(cartInfo[i].productPrice)
      setTotalPrice(totalPrice)
    }
    console.log(totalPrice)
  }, [cartInfo])

  let handleItemRemove = (item) => {
    console.log(item)
    let updateCart = cartInfo.filter((cartItem) => cartItem.id !== item.id)
    setCartInfo(updateCart)
    toast("Cart item remove", {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    })
  }
  return (
    <>
      <ToastContainer />
      <div className="w-[360px] border-[#dedcdc] border-[1px] absolute right-0 mt-3 z-10">
        <div className="flex flex-col gap-y-4 p-5">
          {cartInfo.map((item, index) => (
            <div key={index} className="bg-[#F5F5F3] flex gap-5 items-center">
              <div className="bg-[#D8D8D8] w-20 h-20">
                <Image source={item.productImage} alt="img" />
              </div>
              <div className="flex justify-between w-[220px] items-center">
                <div className="flex flex-col gap-y-3">
                  <h4 className="text-[#262626] font-dm text-sm font-bold">
                    {item.productName}
                  </h4>
                  <h5 className="text-[#262626] font-dm text-sm font-bold">
                    ${item.productPrice}
                  </h5>
                </div>
                <div onClick={() => handleItemRemove(item)}>
                  <RxCross2 />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="px-5 pb-5 pt-[14px] bg-white">
          <h2 className="font-dm font-normal text-base text-[#767676] leading-6 pb-3">
            Subtotal:{" "}
            <span className="text-[#262626] font-bold">${totalPrice}</span>
          </h2>
          <div className="flex justify-between">
            <Link
              to="cart"
              className="py-4 px-10 border border-[#2B2B2B] inline-block mt-3 font-dm text-[#262626] text-sm font-bold hover:bg-[#262626] hover:text-white transition-all duration-300"
            >
              View Cart
            </Link>

            <Link
              to="checkout"
              className="py-4 px-10 border border-[#2B2B2B] inline-block mt-3 font-dm text-[#262626] text-sm font-bold hover:bg-[#262626] hover:text-white transition-all duration-300"
            >
              Checkout
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cart
