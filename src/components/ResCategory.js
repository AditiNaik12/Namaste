import React, { useState } from "react";
import ItemList from "./ItemList";

const ResCategory = ({ data }) => {
  // State to track which category is expanded
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleClick = (index) => {
    // Toggle the expanded category or collapse if the same category is clicked
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div>
      {data.categories && data.categories.map((cat, index) => (
        <div className="w-[600px] my-5 mx-auto bg-slate-50 shadow-lg p-4" key={cat.title}>
          <div className="flex justify-between cursor-pointer" onClick={() => handleClick(index)}>
            <span className="font-bold text-lg">{cat.title}</span>
            <span className="text-gray-700 font-thin">{expandedIndex === index ? '−' : 'v'}</span>
          </div>
          {expandedIndex === index && (
            <ItemList
              items={cat.itemCards.slice(0, index === 0 ? 6 : index === 1 ? 6 : 7)}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default ResCategory;
