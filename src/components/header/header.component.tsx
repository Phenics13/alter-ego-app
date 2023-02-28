import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Box } from "@mui/material";

import HeaderBar from "../header-bar/header-bar.component";
import HeaderDrawer from "../header-drawer.component.tsx/header-drawer.component";

const pages = ["home", "news"];

const Header = () => {
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleMenuClick = (page: string) => {
    return () => navigate(`/${page}`);
  };

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  return (
    <>
      <HeaderBar
        handleMenuClick={handleMenuClick}
        handleDrawerToggle={handleDrawerToggle}
        pages={pages}
      />
      <HeaderDrawer
        handleMenuClick={handleMenuClick}
        handleDrawerToggle={handleDrawerToggle}
        pages={pages}
        mobileOpen={mobileOpen}
      />
    </>
  );
};

export default Header;
