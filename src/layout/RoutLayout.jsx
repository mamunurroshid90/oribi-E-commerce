import React from "react";
import Footer from "../components/footer/Footer";
import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";

const RoutLayout = () => {
  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
};

export default RoutLayout;
