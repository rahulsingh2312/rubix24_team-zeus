import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router";

function Main() {
  return (
    <div>
      <Outlet />
      <Footer />
    </div>
  );
}

export default Main;
