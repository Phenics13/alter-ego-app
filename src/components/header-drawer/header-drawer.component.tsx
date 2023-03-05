import { FC } from "react";
import { useTranslation } from "react-i18next";

import {
  Box,
  Drawer,
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider,
  Button,
} from "@mui/material";

import { languages } from "../../utils/i18next/i18n";

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
  const { t, i18n } = useTranslation();

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        textAlign: "center",
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography variant="h6" sx={{ my: 2 }}>
        {t("menu")}
      </Typography>
      <Divider sx={{ borderBottomWidth: 2, width: "80%", margin: "0 auto" }} />
      <List sx={{ flex: "1" }}>
        {pages.map((page) => (
          <ListItem key={page} disablePadding>
            <ListItemButton
              sx={{ textAlign: "center" }}
              onClick={handleMenuClick(page)}
            >
              <ListItemText primary={t(page)} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      {/* language */}
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        {Object.keys(languages).map((lang) => (
          <Button key={lang} onClick={() => i18n.changeLanguage(lang)}>
            {languages[lang].nativeName}
          </Button>
        ))}
      </Box>
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
