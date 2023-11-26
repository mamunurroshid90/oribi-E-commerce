import React from "react";
import { RxCross2 } from "react-icons/rx";

const Cart = () => {
  return (
    <>
      <div className="w-[360px] border-[#dedcdc] border-[1px] absolute right-0 mt-3">
        <div className="flex flex-col gap-y-4 p-5">
          <div className="bg-[#F5F5F3] flex gap-5 items-center">
            <div className="bg-[#D8D8D8] w-20 h-20"></div>
            <div className="flex justify-between w-[220px] items-center">
              <div className="flex flex-col gap-y-3">
                <h4 className="text-[#262626] font-dm text-sm font-bold">
                  Black Smart Watch
                </h4>
                <h5 className="text-[#262626] font-dm text-sm font-bold">
                  $44.00
                </h5>
              </div>
              <div>
                <RxCross2 />
              </div>
            </div>
          </div>
          <div className="bg-[#F5F5F3] flex gap-5 items-center">
            <div className="bg-[#D8D8D8] w-20 h-20"></div>
            <div className="flex justify-between w-[220px] items-center">
              <div className="flex flex-col gap-y-3">
                <h4 className="text-[#262626] font-dm text-sm font-bold">
                  Black Smart Watch
                </h4>
                <h5 className="text-[#262626] font-dm text-sm font-bold">
                  $44.00
                </h5>
              </div>
              <div>
                <RxCross2 />
              </div>
            </div>
          </div>
        </div>
        <div className="px-5 pb-5 pt-[14px] bg-white">
          <h2 className="font-dm font-normal text-base text-[#767676] leading-6 pb-3">
            Subtotal: <span className="text-[#262626] font-bold">$44.00</span>
          </h2>
          <div className="flex justify-between">
            <a
              className="py-4 px-10 border border-[#2B2B2B] inline-block mt-3 font-dm text-[#262626] text-sm font-bold hover:bg-[#262626] hover:text-white transition-all duration-300"
              href="#"
            >
              View Cart
            </a>
            <a
              className="py-4 px-10 border border-[#2B2B2B] inline-block mt-3 font-dm text-[#262626] text-sm font-bold hover:bg-[#262626] hover:text-white transition-all duration-300"
              href="#"
            >
              Checkout
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
