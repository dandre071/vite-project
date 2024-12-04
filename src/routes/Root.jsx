import { Outlet, Link, useLocation, useNavigate } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { customTheme } from "../Hooks/useCustomTheme";
import CartCounter from "../components/CartCounter";

import SellOutlinedIcon from "@mui/icons-material/SellOutlined";
import {
  Box,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  Typography,
} from "@mui/material";

import { Settings } from "@mui/icons-material";
import { getPageTitle } from "../components/utils/helpers";
import { useEffect } from "react";
import StorageRoundedIcon from "@mui/icons-material/StorageRounded";
import LogoMono from "../components/LogoMono";
import Logo from "../components/Logo";
const menuItems = [
  {
    text: "Venta",
    icon: <SellOutlinedIcon sx={{ fontSize: 30 }} />,
    path: "/client-data",
  },
  {
    text: "Dashboard",
    icon: <Settings sx={{ fontSize: 30 }} />,
    path: "/dashboard",
  },
  {
    text: "Registro",
    icon: <StorageRoundedIcon sx={{ fontSize: 30 }} />,
    path: "/trabajos",
  },
];

const Root = () => {
  const navigate = useNavigate();
  useEffect(() => {
    location.pathname.includes("editar-registro");
    /*   console.log(location.pathname.includes("registro")); */
  }, []);

  return (
    <ThemeProvider theme={customTheme}>
      <div className="grid-template">
        <div className="asider"></div>
        <div className="aside">
          <Drawer
            variant="permanent"
            anchor="left"
            sx={{
              width: 200,
              flexShrink: 0,
              fontSize: 12,
              "& .MuiDrawer-paper": {
                top: "auto",
                display: "flex",
                height: "auto",
                justifyContent: "start",
                alignItems: "center",

                width: 190,
                alignSelf: "start",
                boxSizing: "border-box",
                overflow: "hidden",
                border: "none",
              },
            }}
          >
            <List>
              {menuItems.map((item) => (
                <ListItemButton
                  onClick={() => navigate(item.path)}
                  key={item.text}
                  sx={{
                    width: 190,
                    borderRadius: 0,
                    flexShrink: 0,
                    fontSize: 12,
                    p: 1,
                    display: "grid",
                    gridTemplateColumns: "auto 1fr",

                    "&.Mui-selected": {
                      backgroundColor: "#e1e1e1",
                      color: "white",
                    },
                    "&.Mui-focusVisible": {
                      backgroundColor: "red",
                    },
                    ":hover": {
                      backgroundColor: "#f2f2f2",
                    },
                  }}
                  className={
                    location.pathname.includes(item.path)
                      ? "Mui-selected"
                      : null
                  }
                >
                  <ListItemIcon sx={{ width: "auto", p: 0 }}>
                    {item.icon}
                  </ListItemIcon>

                  <Typography
                    style={{
                      width: "auto",
                      color: "black",
                      fontWeight: 600,
                      fontSize: 18,
                      textAlign: "left",
                      p: 0,
                      m: 0,
                    }}
                  >
                    {item.text}
                  </Typography>
                </ListItemButton>
              ))}
            </List>
          </Drawer>
        </div>
        <div className={"nav-area"}>
          <div>
            <Link to={"/"}>
              <Box className="logo-container" style={{  }}>
                <Logo className="logo" />
              </Box>
            </Link>
            <div></div>

            <CartCounter />
          </div>
        </div>
        <div className={"main"}>
          <Typography
            sx={{
              color: "black",
              fontSize: 40,
              fontWeight: 900,
              justifySelf: "center",
            }}
          >
            {getPageTitle() || ""}
          </Typography>
          <div>
            {" "}
            <Outlet />
          </div>
        </div>
        <div className="footer">
          <p>v.1.11.14</p>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Root;
