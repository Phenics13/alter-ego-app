import { Outlet } from "react-router-dom";

import { Toolbar } from "@mui/material";

import Header from "../../components/header/header.component";
import Footer from "../../components/footer/footer.component";
import { Box } from "@mui/system";

const Navigation = () => {
  return (
    <Box flex="1" display="flex" flexDirection="column">
      <Header />
      <Toolbar />
      <Box flex="1">
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
};

export default Navigation;
