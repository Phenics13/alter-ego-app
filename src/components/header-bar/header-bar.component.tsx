import { FC, ReactElement } from "react";
import { useTranslation } from "react-i18next";

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

import { languages } from "../../utils/i18next/i18n";

import AssignmentIcon from "@mui/icons-material/Assignment";
import MenuIcon from "@mui/icons-material/Menu";
import UserIcon from "../user-icon/user-icon.component";

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
  const { t, i18n } = useTranslation();

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
                  {t(page)}
                </Button>
              ))}
            </Box>

            {/* language */}
            <Box sx={{ display: { xs: "none", sm: "flex" } }}>
              {Object.keys(languages).map((lang) => (
                <Button key={lang} onClick={() => i18n.changeLanguage(lang)}>
                  {languages[lang].nativeName}
                </Button>
              ))}
            </Box>

            {/* user */}
            <UserIcon handleMenuClick={handleMenuClick} />
          </Toolbar>
        </Container>
      </AppBar>
    </HideOnScroll>
  );
};

export default HeaderBar;
