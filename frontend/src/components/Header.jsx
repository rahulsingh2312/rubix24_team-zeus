import React, { useState } from "react";
import { menu, close } from "../assets";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const handleClick = () => setToggle(!toggle);
  return (
    <div className="relative flex justify-between px-10 py-6 items-center w-full ">
      <a className="z-40 flex gap-2 items-center" href="/">
        {/* <img
          className="pl-10 w-24 mt-2"
          src="https://images.squarespace-cdn.com/content/v1/598c1a6b46c3c4a7b18a8908/f3c4acee-fe02-442b-b1e5-bcf2eabd6c34/Chatbot_Icon.png"
          alt="logo"
        /> */}
        <h1
          className={`text-2xl font-bold ${
            location.pathname === "/login" ? "text-black" : "text-white"
          }`}
        >
          TravelBuddy
        </h1>
      </a>
      <div
        className={`pr-5 hidden lg:flex gap-5 items-center ${
          location.pathname === "/login" ? "text-black" : "text-white"
        }`}
      >
        <a href="#">Home</a>
        <a href="#">
          <button className="px-8 py-2 rounded-3xl bg-blue-600 text-white">
            Sign in
          </button>
        </a>
      </div>
      <div className="lg:hidden z-40" onClick={handleClick}>
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain mr-5 cursor-pointer"
        />
      </div>
      <ul
        className={
          toggle
            ? "pt-24 pb-8 absolute left-0 top-0 bg-white shadow-sm z-20 w-full px-8 lg:hidden flex flex-col items-center gap-5"
            : "hidden"
        }
      >
        <div className="flex flex-col items-center gap-5 my-2">
          <a href="#">Home</a>
          <a href="#">
            <button className="w-full px-6 py-1.5 rounded-3xl bg-blue-600 text-white">
              Sign in
            </button>
          </a>
        </div>
      </ul>
    </div>
  );
};

export default Header;
