import { FC, ReactElement } from "react";

import {
  AppBar,
  Container,
  Toolbar,
  Box,
  IconButton,
  Typography,
  Button,
  useScrollTrigger,
  Slide,
} from "@mui/material";

import AssignmentIcon from "@mui/icons-material/Assignment";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MenuIcon from "@mui/icons-material/Menu";

const HideOnScroll: FC<{ children: ReactElement }> = ({ children }) => {
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
};

type HeaderBarProps = {
  handleMenuClick: (page: string) => () => void;
  handleDrawerToggle: () => void;
  pages: string[];
};

const HeaderBar: FC<HeaderBarProps> = ({
  handleMenuClick,
  handleDrawerToggle,
  pages,
}) => {
  const user = null;

  return (
    <HideOnScroll>
      <AppBar component="nav">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            {/* menu icon mobile */}
            <Box sx={{ display: { xs: "flex", sm: "none" } }}>
              <IconButton
                size="large"
                onClick={handleDrawerToggle}
                color="secondary"
              >
                <MenuIcon />
              </IconButton>
            </Box>

            {/* mobile home nav */}
            <Box
              onClick={handleMenuClick("")}
              color="white"
              sx={{
                display: { xs: "flex", sm: "none" },
                alignItems: "center",
                flexGrow: 1,
                justifyContent: "center",
                cursor: "pointer",
              }}
            >
              <AssignmentIcon sx={{ mr: 1 }} />
              <Typography
                variant="h6"
                component="span"
                fontWeight="bold"
                sx={{ letterSpacing: ".2rem" }}
              >
                AlterEGO
              </Typography>
            </Box>

            {/* desktop home nav */}
            <Box
              onClick={handleMenuClick("")}
              color="white"
              sx={{
                display: { xs: "none", sm: "flex" },
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
            >
              <AssignmentIcon sx={{ mr: 1 }} />
              <Typography
                variant="h6"
                component="span"
                fontWeight="bold"
                sx={{ letterSpacing: ".2rem" }}
              >
                AlterEGO
              </Typography>
            </Box>

            {/* pages */}
            <Box sx={{ flexGrow: 1, display: { xs: "none", sm: "flex" } }}>
              {pages.map((page) => (
                <Button key={page} onClick={handleMenuClick(page)}>
                  {page[0].toUpperCase() + page.slice(1)}
                </Button>
              ))}
            </Box>

            {/* user */}
            <Box sx={{ flexGrow: 0 }}>
              {user ? (
                <IconButton
                  onClick={handleMenuClick("profile")}
                  sx={{ color: "white" }}
                >
                  <AccountCircleIcon />
                </IconButton>
              ) : (
                <Button
                  variant="contained"
                  color="secondary"
                  sx={{ borderRadius: 50 }}
                  onClick={handleMenuClick("sign-in")}
                >
                  Sign In
                </Button>
              )}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </HideOnScroll>
  );
};

export default HeaderBar;
