import {
  Box,
  Tooltip,
  IconButton,
  Menu,
  MenuItem,
  Typography,
  Button,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import { FC, MouseEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentUser } from "../../store/user/user.action";
import { selectCurrentUser } from "../../store/user/user.selector";

type UserIconProps = {
  handleMenuClick: (page: string) => () => void;
};

const settings = ["profile", "logout"];

const UserIcon: FC<UserIconProps> = ({ handleMenuClick }) => {
  const dispatch = useDispatch();
  const user = useSelector(selectCurrentUser);

  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenUserMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleUserMenuClick = (page: string) => {
    if (page === "logout") {
      dispatch(setCurrentUser(null));
      handleCloseUserMenu();
    } else {
      handleMenuClick(page)();
      handleCloseUserMenu();
    }
  };
  return (
    <Box sx={{ flexGrow: 0 }}>
      {user ? (
        <>
          <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu} sx={{ color: "white" }}>
              <AccountCircleIcon />
            </IconButton>
          </Tooltip>
          <Menu
            sx={{ mt: "45px" }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            {settings.map((setting) => (
              <MenuItem
                key={setting}
                onClick={() => handleUserMenuClick(setting)}
              >
                <Typography textAlign="center">
                  {setting[0].toUpperCase() + setting.slice(1)}
                </Typography>
              </MenuItem>
            ))}
          </Menu>
        </>
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
  );
};

export default UserIcon;
