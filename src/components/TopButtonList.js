import React from "react";

const TopButtonList = () => {
  const list = [
    "All",
    "Computer Science",
    "Gaming",
    "Trending",
    "Facts",
    "Cooking",
    "Outdoors",
    "Travel",
    "Life Style",
    "AI",
    "ChatGpt",
    "Foods",
    "React",
    "xcv",
    "xcv",
    
   
  ];
  return (
    <div className=" m-2  ">
      <ul className="flex  ">
        {list.map((topics,index) => (
          <li key={index} className="bg-slate-200 text-center rounded-lg ml-3 min-w-[65px] ">
            {topics}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopButtonList;
