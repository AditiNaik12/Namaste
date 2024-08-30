import React, { useState } from "react";
import ResCategory from "./ResCategory";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowItems }) => {
  
  const handleClick = () => {
    setShowItems()
  };

  return (
    <div>
      <div className="w-6/12 my-5 mx-auto bg-slate-50 shadow-lg p-4">
        <div className="flex justify-between cursor-pointer" onClick={handleClick}>
          <span className="font-bold text-lg">{data.title}</span>
          <span className="text-gray-700">v</span>
        </div>
        {data.categories
          ? showItems && <ResCategory key={data.title} data={data} />
          : showItems && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
