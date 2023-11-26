import React from "react";
import { Link } from "react-router-dom";
import Image from "../utilities/Image";
import FooterLogo from "../../assets/images/logo.png";

const Footer = () => {
  let menuArr = [
    {
      text: "home",
    },
    {
      text: "shop",
    },
    {
      text: "about",
    },
    {
      text: "contact",
    },
    {
      text: "journal",
    },
  ];
  let shopArr = [
    {
      text: "category 1",
    },
    {
      text: "category 2",
    },
    {
      text: "category 3",
    },
    {
      text: "category 4",
    },
    {
      text: "category 5",
    },
  ];
  let helpArr = [
    {
      text: "Privacy Policy",
    },
    {
      text: "Terms & Conditions",
    },
    {
      text: "Special E-shop",
    },
    {
      text: "Shipping",
    },
    {
      text: "Secure Payments",
    },
  ];
  return (
    <>
      <div className="bg-[#F5F5F3] py-14">
        <div className="max-w-container mx-auto flex  gap-x-36">
          <div className="flex items-center gap-x-36">
            <div>
              <h5 className="text-[#262626] font-bold text-base font-dm uppercase">
                menu
              </h5>
              <ul>
                {menuArr.map((item, index) => (
                  <li
                    key={index}
                    className="text-[#6D6D6D] font-dm text-sm capitalize font-normal leading-6"
                  >
                    <Link to="/">{item.text}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h5 className="text-[#262626] font-bold text-base font-dm uppercase">
                shop
              </h5>
              <ul>
                {shopArr.map((item, index) => (
                  <li
                    key={index}
                    className="text-[#6D6D6D] font-dm text-sm capitalize font-normal leading-6"
                  >
                    <Link to="/">{item.text}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h5 className="text-[#262626] font-bold text-base font-dm uppercase">
                Help
              </h5>
              <ul>
                {helpArr.map((item, index) => (
                  <li
                    key={index}
                    className="text-[#6D6D6D] font-dm text-sm capitalize font-normal leading-6"
                  >
                    <Link to="/">{item.text}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex gap-x-[286px]">
            <div>
              <address className="not-italic">
                <span className="font-dm text-[#262626] font-bold font-base leading-6">
                  (052) 611-5711 <br /> company@domain.com
                </span>
                <span className="text-[#6D6D6D] text-sm font-normal font-dm block pt-4">
                  575 Crescent Ave. Quakertown, PA 18951
                </span>
              </address>
            </div>
            <div>
              <Link>
                <Image source={FooterLogo} alt={"footer log"} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
