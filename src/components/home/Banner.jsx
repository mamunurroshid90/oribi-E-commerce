import React, { useState } from "react"
import Image from "../utilities/Image"
import BannerImage from "../../assets/images/banner.jpg"
import { Link } from "react-router-dom"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const Banner = () => {
  let [dotActive, setDotActive] = useState(0)
  const settings = {
    dots: true,
    beforeChange: (pev, next) => {
      setDotActive(next)
    },
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          left: "5%",
          top: "50%",
          transform: "translateY(-50%)",
          display: "inline-block",
          padding: 10,
          width: "0",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={
          i === dotActive
            ? {
                width: "30px",
                color: "#262626",
                borderRight: "3px solid #000",
              }
            : {
                width: "30px",
                color: "transparent",
                borderRight: "3px solid #fff",
              }
        }
      >
        0{i + 1}
      </div>
    ),
  }

  const arr = [
    BannerImage, //
    BannerImage,
    BannerImage,
  ]

  return (
    <section className="overflow-hidden w-full">
      <Slider {...settings}>
        {arr.map((item, index) => (
          <Link key={index} to="#" className="!block">
            <Image
              className="w-full h-full object-cover leading-[0] block"
              source={item}
              alt="banner img"
            />
          </Link>
        ))}
      </Slider>
    </section>
  )
}

export default Banner
