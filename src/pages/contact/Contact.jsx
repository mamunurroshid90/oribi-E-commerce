import React from "react"
import BreadCrumbs from "../../components/utilities/BreadCrumbs"
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion"
import "react-accessible-accordion/dist/fancy-example.css"

const Contact = () => {
  let pathname = window.location.href
  let pathArray = pathname.split("/")
  let finalPath = pathArray[pathArray.length - 1]
  return (
    <section>
      <div className="max-w-container mx-auto">
        <div className="mt-[124px] mb-[125px]">
          <h3 className="font-dm text-[49px] capitalize text-[#262626] font-bold leading-normal mb-3">
            contact
          </h3>
          <BreadCrumbs lastPath={finalPath} />
        </div>
        <form action="" className="w-[780px] mb-[140px]">
          <h2 className="font-dm text-[#262626] text-[39px] font-bold capitalize leading-normal mb-[42px]">
            Fill up a Form
          </h2>
          <div className="flex flex-col border-b border-[#f0f0f0] mb-[23px]">
            <label
              className="font-dm capitalize text-[#262626] text-base font-bold leading-[23px] "
              htmlFor=""
            >
              Name
            </label>
            <input
              className="font-dm text-sm font-normal capitalize mb-[17px] mt-[10px] py-3 px-1"
              type="text"
              name="name"
              placeholder="Your name here"
            />
          </div>
          <div className="flex flex-col border-b border-[#f0f0f0] mb-[23px]">
            <label
              className="font-dm capitalize text-[#262626] text-base font-bold leading-[23px]"
              htmlFor=""
            >
              email
            </label>
            <input
              className="font-dm text-sm font-normal capitalize mb-[17px] mt-[10px] py-3 px-1"
              type="text"
              name="email"
              placeholder="Your name here"
            />
          </div>
          <div className="flex flex-col border-b border-[#f0f0f0] mb-[23px]">
            <label
              className="font-dm capitalize text-[#262626] text-base font-bold leading-[23px] block mb-[10px]"
              htmlFor=""
            >
              message
            </label>
            <textarea
              className="px-2 py-2 capitalize"
              placeholder="your message here"
              name="message"
              id=""
              cols="30"
              rows="10"
            ></textarea>
          </div>
          <button className="bg-[#262626] text-white py-4 px-20 capitalize font-bold font-dm text-center mt-11">
            post
          </button>
        </form>
        <div className="mb-[140px] relative">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14610.27308423812!2d90.38425380000001!3d23.72710665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8e90a449e4f%3A0xb7092a9c25197fa4!2sUniversity%20of%20Dhaka!5e0!3m2!1sen!2sbd!4v1704225078672!5m2!1sen!2sbd"
            width="100%"
            height="572"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
          <div className="w-[450px] h-[412px] bg-white absolute left-20 top-20">
            <Accordion preExpanded={["d"]}>
              <AccordionItem uuid="a">
                <AccordionItemHeading>
                  <AccordionItemButton>
                    What harsh truths do you prefer to ignore?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    Exercitation in fugiat est ut ad ea cupidatat ut in
                    cupidatat occaecat ut occaecat consequat est minim minim
                    esse tempor laborum consequat esse adipisicing eu
                    reprehenderit enim.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem uuid="b">
                <AccordionItemHeading>
                  <AccordionItemButton>
                    Is free will real or just an illusion?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    In ad velit in ex nostrud dolore cupidatat consectetur ea in
                    ut nostrud velit in irure cillum tempor laboris sed
                    adipisicing eu esse duis nulla non.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem uuid="c">
                <AccordionItemHeading>
                  <AccordionItemButton>
                    Is free will real or just an illusion?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    In ad velit in ex nostrud dolore cupidatat consectetur ea in
                    ut nostrud velit in irure cillum tempor laboris sed
                    adipisicing eu esse duis nulla non.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem uuid="d">
                <AccordionItemHeading>
                  <AccordionItemButton>
                    Is free will real or just an illusion?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    In ad velit in ex nostrud dolore cupidatat consectetur ea in
                    ut nostrud velit in irure cillum tempor laboris sed
                    adipisicing eu esse duis nulla non.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
