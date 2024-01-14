import React from "react"
import { PiNumberTwoBold } from "react-icons/pi"
import { MdLocalShipping } from "react-icons/md"
import { IoMdRefresh } from "react-icons/io"

const ProductInformation = () => {
  return (
    <section className="border-b border-[#f0f0f0]">
      <div className="max-w-container mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4 py-[30px]">
            <PiNumberTwoBold className="text-2xl" />
            <span className="font-dm text-base text-[#6D6D6D] font-normal">
              Two years warranty
            </span>
          </div>
          <div className="flex items-center gap-4 py-4">
            <MdLocalShipping className="text-2xl" />
            <span className="font-dm text-base text-[#6D6D6D] font-normal">
              Free shipping
            </span>
          </div>
          <div className="flex items-center gap-4 py-4">
            <IoMdRefresh className="text-2xl" />
            <span className="font-dm text-base text-[#6D6D6D] font-normal">
              Return policy in 30 days
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductInformation
