import { Slide, useScrollTrigger } from "@mui/material";
import { FC, ReactElement } from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/header/header.component";

const Navigation = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default Navigation;
