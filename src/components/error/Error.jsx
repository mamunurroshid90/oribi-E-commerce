import React from "react";
import Paragraph from "../utilities/Paragraph";
import Input from "../utilities/Input";
import { IoSearchSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <>
      <section className="max-w-container mx-auto pt-20 pb-[140px]">
        <span className="text-[200px] font-dm text-[#262626] font-bold leading-none ">
          404
        </span>
        <Paragraph
          style="w-[644px] text-[#767676] font-dm text-base font-normal pb-10 leading-[30px]"
          text="The page you were looking for couldn't be found. The page could be removed or you misspelled the word while searching for it. Maybe try a search?"
        />
        <form>
          <div className="w-[643px] relative">
            <Input
              type="text"
              placeholder="Type to Search"
              style="border-[1px] border-[#F0F0F0] w-full py-5 pl-5 pr-10"
            />
            <IoSearchSharp className="text-2xl absolute right-4 top-[50%] translate-y-[-50%]" />
          </div>
        </form>
        <Link
          to="/"
          className="py-4 px-14 bg-[#262626] text-white inline-block mt-[60px] text-sm font-bold leading-normal font-dm capitalize text-center"
        >
          back to home
        </Link>
      </section>
    </>
  );
};

export default Error;
