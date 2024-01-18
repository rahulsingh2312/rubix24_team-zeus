import React from "react";

const Hero = () => {
  return (
    <div className="w-full -mt-20">
      <div className="flex flex-col items-center justify-center h-[620px] bgimg">
        <div>
          <h1 className="text-4xl text-blue-600 text-center max-sm:text-2xl font-bold">
            No need to worry about Overpricing when we are here
          </h1>
        </div>
        <div className="p-2 w-fit bg-black backdrop-blur-md flex rounded-full z-10 relative top-7 bg-opacity-30">
          <div className="bg-white h-14 rounded-full py-2 px-4 w-fit flex items-center justify-center">
            <img src="/restros.svg" alt="" className="mr-2 max-sm:hidden" />
            <div className="text-sm text-blue-400 max-sm:text-sm">Restros</div>
          </div>
          <div className="bg-transparent h-14 rounded-full py-2 px-4 w-fit flex items-center justify-center">
            <img src="/transport.svg" alt="" className="mr-2 max-sm:hidden" />
            <div className="text-sm text-white max-sm:text-sm">Transport</div>
          </div>
          <div className="bg-transparent h-14 rounded-full py-2 px-4 w-fit flex items-center justify-center">
            <img src="/stays.svg" alt="" className="mr-2 max-sm:hidden" />
            <div className="text-sm text-white max-sm:text-sm">Stays</div>
          </div>
          <div className="bg-transparent h-14 rounded-full py-2 px-4 w-fit flex items-center justify-center">
            <img src="/attracts.svg" alt="" className="mr-2 max-sm:hidden" />
            <div className="text-sm text-white max-sm:text-sm">Attractions</div>
          </div>
        </div>
        <div className="w-9/12 h-fit bg-white rounded-2xl shadow-2xl pl-4 pb-4">
          <div className="flex justify-around mt-10 max-md:flex-col ">
            <div>
              <div className="font-semibold max-sm:text-sm">Select a city</div>
              <div className="text-sm text-gray-400 max-sm:text-xs">
                Where are you now?
              </div>
            </div>
            <div>
              <div className="font-semibold max-sm:text-sm">Compare Prices</div>
              <div className="text-sm text-gray-400 max-sm:text-xs">
                Know where its the cheapest
              </div>
            </div>

            <div>
              <div className="font-semibold max-sm:text-sm">
                Know from others.
              </div>
              <div className="text-sm text-gray-400 max-sm:text-xs">
                Don’t get fooled by fake prices, ask community
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
