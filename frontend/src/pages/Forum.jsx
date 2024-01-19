import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const Forum = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleSearchClick = () => {
    setIsClicked(true);
  };

  return (
    <div className="flex-row text-center items-center justify-center mt-20">
      <div>
        <div className="text-5xl font-bold max-sm:text-3xl">
          Welcome to <span className="textgrad2">Community Forums</span>
        </div>
        <p className="mt-2 text-gray-500 w-6/12 text-center mx-auto max-sm:text-xs max-sm:w-11/12">
          A Quora like Chat section where everyone can share their thoughts,
          opinions irrespective of anything, Talk about Local Businesses, Truth
          Value of prices and much more
        </p>
      </div>
      <div className="flex mt-4 items-center justify-center">
        <input
          type="search"
          className={`border border-gray-800 rounded-full px-4 py-2 ${
            isClicked ? "w-6/12" : "w-40"
          }`}
          placeholder="Search Queries"
          onClick={handleSearchClick}
        />
        <FaSearch className="ml-2 text-gray-700" />
      </div>
    </div>
  );
};

export default Forum;
