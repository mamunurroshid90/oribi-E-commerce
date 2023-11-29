import React from "react";
import BreadCrumbs from "../../components/utilities/BreadCrumbs";

const Checkout = () => {
  let pathname = window.location.href;
  let pathArray = pathname.split("/");
  let finalPath = pathArray[pathArray.length - 1];
  return (
    <section className="pt-[124px] pb-[140px]">
      <div className="max-w-container mx-auto">
        <h3 className="font-dm text-[49px] text-[#262626] font-bold leading-normal">
          Checkout
        </h3>
        <BreadCrumbs lastPath={finalPath} />
      </div>
    </section>
  );
};

export default Checkout;
