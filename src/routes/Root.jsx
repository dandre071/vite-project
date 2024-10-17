import { Outlet, Link, useLocation, useNavigate } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { customTheme } from "../Hooks/useCustomTheme";
import CartCounter from "../components/CartCounter";
import Logo from "../components/Logo";
import SellOutlinedIcon from "@mui/icons-material/SellOutlined";
import {
  Box,
  buttonGroupClasses,
  Container,
  Drawer,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import { routes } from "../main";
import { Settings } from "@mui/icons-material";
const menuItems = [
  { text: "Venta", icon: <SellOutlinedIcon />, path: "/client-data" },
  { text: "Configuraciones", icon: <Settings />, path: "/Configuraciones" },
];
/* const pathName = routes.filter(); */
const Root = () => {
  const location = useLocation();
  const pathText = routes.filter((item) => item.path == location.pathname);
  const pageTitle = pathText[0] ? pathText[0].name : "";
  /* console.log(pathText[0].name); */
  const navigate = useNavigate();
  return (
    <ThemeProvider theme={customTheme}>
      <div className="grid-template">
        <div className="asider">jhjhj</div>
        <div className="aside">
          <Drawer
            variant="permanent"
            anchor="left"
            sx={{
              width: 200,
              flexShrink: 0,

              "& .MuiDrawer-paper": {
                zIndex: 0,
                top: "auto",
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
                /*  bgcolor: "#0530ad", */
                /*    bgcolor: "red", */
                height: "50%",
                width: 200,
                alignSelf: "center",
                boxSizing: "border-box",
                overflow: "hidden",
              },
            }}
          >
            <List>
              {menuItems.map((item) => (
                <ListItemButton
                  onClick={
                    () => navigate(item.path) /* console.log(item.path */
                  }
                  key={item.text}
                  sx={{
                    width: 180,
                    borderRadius: 1,
                    flexShrink: 0,
                    /*   bgcolor: "blue", */
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
                  <ListItemIcon>{item.icon}</ListItemIcon>

                  <Typography
                    style={{
                      color: "black",
                      fontWeight: 600,
                      fontSize: 20,
                      textAlign: "left",
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
              <Box className="logo-container">
                <Logo className="logo" style={{ fill: "white" }} />
              </Box>
            </Link>
            <div></div>

            <CartCounter />
          </div>

          {/*  <ListItem>
              <Link to={"/client-data"}>Cliente</Link>
            </ListItem>

            <ListItem>
              <Link to={"/payment"}>Pay</Link>
            </ListItem> */}
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
            {pageTitle || ""}
          </Typography>
          <div>
            {" "}
            <Outlet />
          </div>
        </div>
        <div className="footer">
          <p>v.1.16.10.24</p>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Root;
