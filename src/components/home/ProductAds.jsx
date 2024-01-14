import React from "react"
import { Link } from "react-router-dom"
import Image from "../utilities/Image"
import ProductAds1 from "../../assets/images/Ad_1.jpg"
import ProductAds2 from "../../assets/images/Ad_2.jpg"
import ProductAds3 from "../../assets/images/Ad_3.jpg"

const ProductAds = () => {
  return (
    <section>
      <div className="max-w-container mx-auto">
        <div className="grid grid-cols-2 gap-x-10 h-[780px] mt-[140px]">
          <div className="overflow-hidden">
            <Link to="#">
              <Image
                className="object-cover w-full h-full"
                source={ProductAds1}
                alt="img"
              />
            </Link>
          </div>
          <div className="flex flex-col gap-y-10">
            <div className="overflow-hidden h-[370px]">
              <Link to="#">
                <Image
                  className="object-cover w-full h-full"
                  source={ProductAds2}
                  alt="img"
                />
              </Link>
            </div>
            <div className="overflow-hidden h-[370px]">
              <Link to="#">
                <Image
                  className="object-cover w-full h-full"
                  source={ProductAds3}
                  alt="img"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductAds
