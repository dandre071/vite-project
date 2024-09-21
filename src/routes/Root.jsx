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
            variant="permanent"
            anchor="left"
            sx={{
              width: 200,
              flexShrink: 0,
              "& .MuiDrawer-paper": {
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
                  className={location.pathname == item.path ? "active" : null}
                >
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText
                    className={location.pathname == item.path ? "active" : null}
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
