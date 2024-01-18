import React from "react";

const Why = () => {
  return (
    <>
      <div className="flex justify-between mx-auto px-52 items-center mb-2 max-md:px-6">
        <div className="text-4xl font-bold max-sm:text-2xl">Features</div>
        <div className="text-sm text-blue-700 cursor-pointer max-sm:text-xs">
          See More..
        </div>
      </div>
      <div className="flex justify-center items-center bg-blue-50 rounded-lg h-fit w-9/12 max-md:w-11/12 m-4 mx-auto py-8 max-[1049px]:flex-col">
        <div className="why-left w-6/12 mb-8  max-[1049px]:w-fit px-8">
          <h1 className="text-3xl font-bold text-gray-800 max-sm:text-xl">
            We will Identify Trustworthy Local Businesses for you
          </h1>
          <p className="text-gray-500 leading-relaxed max-sm:text-xs max-sm:leading-loose">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequatur, magnam facilis aliquam eligendi suscipit corporis hic
            molestiae amet, vel quasi et dolorem, saepe delectus similique nemo
            labore nisi commodi. Assumenda.
          </p>
          <div className="px-4 py-3 rounded-md bg-blue-600 text-white text-md font-semibold text-center mt-2">
            Get Started
          </div>
        </div>
        <div className="why-right">
          <img src="/Frame 31.png" alt="" draggable="false" />
        </div>
      </div>
    </>
  );
};

export default Why;
