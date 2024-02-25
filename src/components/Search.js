import React from "react";
import { FaSearch } from "react-icons/fa";
const Search = () => {
  return (
    <div>
      <div className="flex items-center  border border-gray-300 bg-white rounded px-3 py-1">
        <FaSearch className="mr-2" />
        <input type="text" placeholder="Search" className="outline-none" />
      </div>
    </div>
  );
};

export default Search;
