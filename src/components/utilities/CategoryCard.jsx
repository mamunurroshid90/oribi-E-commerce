import React, { useEffect, useState } from "react";
import List from "./List";
import ListItem from "./ListItem";
import axios from "axios";
// import { data } from "autoprefixer";

const CategoryCard = () => {
  const [category, setCategories] = useState();

  useEffect(() => {
    let response = async () => {
      let data = await axios.get("https://dummyjson.com/products/categories");
      setCategories(data.data);
    };
    response();
  }, []);
  console.log(category);
  return (
    <div className="w-[263px] bg-[#262626] absolute left-0 mt-3">
      <List style="h-[350px] overflow-y-scroll scrollbar-thin scrollbar-track-inherit">
        {category?.map((item, index) => (
          <ListItem
            key={index}
            style="text-[#a19f9f] font-dm text-sm font-normal leading-normal py-4 pl-5 hover:pl-8 hover:text-white hover:font-bold transition-all duration-300 capitalize border-b-[1px] border-[#4b4c4d] last:border-[transparent]"
            text={item}
          />
        ))}
      </List>
    </div>
  );
};

export default CategoryCard;
