import React from "react";
import { LuSearch } from "react-icons/lu";

const getSizeBsSearch = () => {
  return window.innerWidth > 1536
    ? "24"
    : window.innerWidth > 576
    ? "16"
    : "12";
};

const Searching = () => {
  return (
    <div className="bg-[#f2f0f094] flex items-center gap-2 px-1 rounded-md border border-[#999999c7] w-[90vw] md:w-[55vw] lg2:w-[15vw] mb-4 md:mb-0">
      <div className="w-8 h-8 flex items-center justify-center hover:cursor-pointer">
        <LuSearch size={getSizeBsSearch()} />
      </div>
      <input
        type="text"
        placeholder="Buscar"
        className="bg-inherit border-none focus:outline-none text-sm w-full pr-2"
      />
    </div>
  );
};

export default Searching;
