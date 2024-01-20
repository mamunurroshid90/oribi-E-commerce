import React from "react"
import SectionTitle from "../utilities/SectionTitle"
import ProductCart from "../product/ProductCart"
import AnalogueWatch from "../../assets/images/productImage/analogue watch.jpg"
import DigitalWatch from "../../assets/images/productImage/digital watch.jpg"
import Computer from "../../assets/images/productImage/computer.webp"
import Bag from "../../assets/images/productImage/bag.jpg"
import Doll from "../../assets/images/productImage/doll.jpg"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css/navigation"
import "swiper/css"
import { Navigation } from "swiper/modules"
import { FaLongArrowAltRight } from "react-icons/fa"
import { FaLongArrowAltLeft } from "react-icons/fa"

const NewArrivals = () => {
  let allProducts = [
    {
      id: 0,
      productName: "analogue watch",
      productPrice: "1250",
      isNew: "true",
      discount: "false",
      color: "false",
      productImage: AnalogueWatch,
    },
    {
      id: 1,
      productName: "digital watch",
      productPrice: "2270",
      isNew: "false",
      discount: "10",
      color: "black",
      productImage: DigitalWatch,
    },
    {
      id: 2,
      productName: "bag",
      productPrice: "250",
      isNew: "true",
      discount: "false",
      color: "red",
      productImage: Bag,
    },
    {
      id: 3,
      productName: "doll",
      productPrice: "840",
      isNew: "false",
      discount: "false",
      color: "gray",
      productImage: Doll,
    },
    {
      id: 4,
      productName: "computer",
      productPrice: "52000",
      isNew: "false",
      discount: "20",
      color: "blue",
      productImage: Computer,
    },
  ]
  return (
    <section className="mt-[128px]">
      <div className="max-w-container mx-auto">
        <SectionTitle />
        <div className=" relative mt-12">
          <Swiper
            slidesPerView={4}
            spaceBetween={30}
            loop={true}
            modules={[Navigation]}
            className="mySwiper"
            navigation={{
              nextEl: ".image-swiper-button-next",
              prevEl: ".image-swiper-button-prev",
              disabledClass: "swiper-button-disabled",
            }}
          >
            {allProducts.map((item, index) => (
              <SwiperSlide>
                <ProductCart
                  id={item.id}
                  productImage={item.productImage}
                  productName={item.productName}
                  productPrice={item.productPrice}
                  isNew={item.isNew}
                  discount={item.discount}
                  color={item.color}
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <button className="image-swiper-button-prev w-[50px] h-[50px] rounded-full bg-gray-300 text-white flex justify-center items-center absolute top-[40%] left-0 z-50 -translate-y-1/2 -translate-x-1/2">
            <FaLongArrowAltLeft className="text-2xl" />
          </button>
          <button className="image-swiper-button-next w-[50px] h-[50px] rounded-full bg-gray-300 text-white flex justify-center items-center absolute top-[40%] right-0 z-50 -translate-y-1/2 translate-x-1/2">
            <FaLongArrowAltRight className="text-2xl" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default NewArrivals
