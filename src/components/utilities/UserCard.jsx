import React from "react";

const UserCard = () => {
  return (
    <div className=" w-[205px] border-[#dedcdc] border-[1px] absolute right-0 mt-3">
      <a
        className=" w-full capitalize inline-block font-dm text-sm text-[#262626] font-normal py-4  bg-white text-center hover:bg-black hover:font-bold hover:text-white transition-all duration-300"
        href="#"
      >
        my account
      </a>
      <a
        className=" w-full capitalize inline-block font-dm text-sm text-[#262626] font-normal py-4  bg-white text-center hover:bg-black hover:font-bold hover:text-white transition-all duration-300"
        href="#"
      >
        log out
      </a>
    </div>
  );
};

export default UserCard;
