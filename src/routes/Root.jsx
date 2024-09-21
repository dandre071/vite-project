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
} from "@mui/material";

const menuItems = [
  { text: "Venta", icon: <SellOutlinedIcon />, path: "/client-data" },
];

const Root = () => {
  const location = useLocation();
  console.log(location.pathname);
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
                bgcolor: "#f4f4f4",

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
                    flexShrink: 0,
                    /*   bgcolor: "blue", */
                    "&.Mui-selected": {
                      backgroundColor: "red",
                    },
                    "&.Mui-focusVisible": {
                      backgroundColor: "red",
                    },
                    ":hover": {
                      backgroundColor: "#2e8b57",
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
          <ul>
            <CartCounter />
            <li>
              <Link to={"/client-data"}>Cliente</Link>
            </li>

            <li>
              <Link to={"/payment"}>Pay</Link>
            </li>
          </ul>
        </div>
        <div className={"main"}>
          <Outlet />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Root;
