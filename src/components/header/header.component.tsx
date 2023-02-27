import {
  Box,
  AppBar,
  Container,
  Toolbar,
  Button,
  Typography,
  Menu,
  MenuItem,
  IconButton,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Drawer,
  Slide,
  useScrollTrigger,
} from "@mui/material";

import AssignmentIcon from "@mui/icons-material/Assignment";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MenuIcon from "@mui/icons-material/Menu";

import { useNavigate } from "react-router-dom";
import { FC, ReactElement, useState } from "react";

const HideOnScroll: FC<{ children: ReactElement }> = ({ children }) => {
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
};

const Header = () => {
  const user = null;
  const navigate = useNavigate();

  const handleMenuClick = (page: string) => {
    return () => navigate(`/${page}`);
  };

  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{ textAlign: "center", height: "100%" }}
    >
      <Typography variant="h6" sx={{ my: 2 }}>
        Menu
      </Typography>
      <Divider sx={{ borderBottomWidth: 2, width: "80%", margin: "0 auto" }} />
      <List>
        <ListItem disablePadding>
          <ListItemButton
            sx={{ textAlign: "center" }}
            onClick={handleMenuClick("news")}
          >
            <ListItemText primary={"News"} />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <HideOnScroll>
        <AppBar component="nav">
          <Container maxWidth="xl">
            {/* menu icon mobile */}
            <Toolbar disableGutters>
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
                <Button onClick={handleMenuClick("news")}>News</Button>
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

      {/* mobile drawer */}
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              color: "white",
              backgroundColor: "secondary.main",
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
};

export default Header;
