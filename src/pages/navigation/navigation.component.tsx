import { Outlet } from "react-router-dom";

import { Toolbar } from "@mui/material";

import Header from "../../components/header/header.component";

const Navigation = () => {
  return (
    <>
      <Header />
      <Toolbar />
      <Outlet />
    </>
  );
};

export default Navigation;
