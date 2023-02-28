import { FC } from "react";
import {
  Box,
  Drawer,
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider,
} from "@mui/material";

type HeaderDrawerProps = {
  handleMenuClick: (page: string) => () => void;
  handleDrawerToggle: () => void;
  pages: string[];
  mobileOpen: boolean;
};

const HeaderDrawer: FC<HeaderDrawerProps> = ({
  handleMenuClick,
  handleDrawerToggle,
  pages,
  mobileOpen,
}) => {
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
        {pages.map((page) => (
          <ListItem key={page} disablePadding>
            <ListItemButton
              sx={{ textAlign: "center" }}
              onClick={handleMenuClick(page)}
            >
              <ListItemText primary={page[0].toUpperCase() + page.slice(1)} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
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
  );
};

export default HeaderDrawer;
