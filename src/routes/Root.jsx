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
const menuItems = [
  { text: "Venta", icon: <SellOutlinedIcon />, path: "/client-data" },
];
/* const pathName = routes.filter(); */
const Root = () => {
  const location = useLocation();
  const pathText = routes.filter((item) => item.path == location.pathname);
  const pageTitle = pathText[0].name;
  console.log(pathText[0].name);
  const navigate = useNavigate();
  return (
    <ThemeProvider theme={customTheme}>
      <div className="grid-template">
        <div className="aside">
          <Drawer
            className="drawer"
            variant="permanent"
            anchor="left"
            sx={{
              width: 200,
              flexShrink: 0,

              "& .MuiDrawer-paper": {
                display: "flex",
                /* justifyContent: "center", */
                alignItems: "center",
                /* bgcolor: "#0866FF", */

                width: 200,
                boxSizing: "border-box",
              },
            }}
          >
            <List>
              <Link to={"/"}>
                <Box className="logo-container">
                  <Logo className="logo" width={50} />
                </Box>
              </Link>
              {menuItems.map((item) => (
                <ListItemButton
                  onClick={() => navigate("/client-data")}
                  key={item.text}
                  sx={{
                    width: 180,
                    borderRadius: 1,
                    flexShrink: 0,
                    /*   bgcolor: "blue", */
                    "&.Mui-selected": {
                      backgroundColor: "black",
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
                    location.pathname == item.path ? "Mui-selected" : null
                  }
                >
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText
                    /*  className={location.pathname == item.path ? "active" : null} */
                    primary={item.text}
                  />
                </ListItemButton>
              ))}
            </List>
          </Drawer>
        </div>
        <div className={"nav-area"}>
          <div>
            <Typography sx={{ color: "white", fontSize: 27, fontWeight: 700 }}>
              {pageTitle}
            </Typography>

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
          <Outlet />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Root;
