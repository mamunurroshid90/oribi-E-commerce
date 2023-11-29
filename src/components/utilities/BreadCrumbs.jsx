import React from "react";
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa6";

const BreadCrumbs = ({ lastPath }) => {
  return (
    <>
      <span className="flex items-center gap-2">
        <Link to="/" className="font-normal text-sm text-[#6D6D60] capitalize">
          Home
        </Link>
        <FaAngleRight className="text-[12px] font-normal" />
        <Link to="#" className="font-normal text-sm text-[#6D6D60] capitalize">
          {lastPath}
        </Link>
      </span>
    </>
  );
};

export default BreadCrumbs;
