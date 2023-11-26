import React from "react";
import List from "../components/utilities/List";
import ListItem from "../components/utilities/ListItem";

const CategoryCard = () => {
  return (
    <div className="w-[263px] bg-[#262626] absolute left-0 mt-3">
      <List style="">
        <ListItem
          style="text-[#a19f9f] font-dm text-sm font-normal leading-normal py-4 pl-5 hover:pl-8 hover:text-white hover:font-bold transition-all duration-300 capitalize border-b-[1px] border-[#4b4c4d] last:border-[transparent]"
          text="Accessories"
        />
        <ListItem
          style="text-[#a19f9f] font-dm text-sm font-normal leading-0  py-4 pl-5 hover:pl-8 hover:text-white hover:font-bold transition-all duration-300 capitalize border-b-[1px] border-[#4b4c4d] last:border-[transparent]"
          text="Furniture"
        />
        <ListItem
          style="text-[#a19f9f] font-dm text-sm font-normal leading-0  py-4 pl-5 hover:pl-8 hover:text-white hover:font-bold transition-all duration-300 capitalize border-b-[1px] border-[#4b4c4d] last:border-[transparent]"
          text="Electronics"
        />
        <ListItem
          style="text-[#a19f9f] font-dm text-sm font-normal leading-0  py-4 pl-5 hover:pl-8 hover:text-white hover:font-bold transition-all duration-300 capitalize border-b-[1px] border-[#4b4c4d] last:border-[transparent]"
          text="Clothes"
        />
        <ListItem
          style="text-[#a19f9f] font-dm text-sm font-normal leading-0  py-4 pl-5 hover:pl-8 hover:text-white hover:font-bold transition-all duration-300 capitalize border-b-[1px] border-[#4b4c4d] last:border-[transparent]"
          text="Bags"
        />
        <ListItem
          style="text-[#a19f9f] font-dm text-sm font-normal leading-0  py-4 pl-5 hover:pl-8 hover:text-white hover:font-bold transition-all duration-300 capitalize border-b-[1px] border-[#4b4c4d] last:border-[transparent]"
          text="Home appliances"
        />
      </List>
    </div>
  );
};

export default CategoryCard;
