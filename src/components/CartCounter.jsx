import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useShoppingCart } from "../store/shoppingCart";
import { Badge } from "@mui/material";
import { Link } from "react-router-dom";

const CartCounter = () => {
  const count = useShoppingCart((state) => state.items);
  //console.log(count.length);
  return (
    <Link id="cart-counter" style={{}} to={"cart"}>
      <Badge color="secondary" badgeContent={count.length} showZero>
        <ShoppingCartOutlinedIcon sx={{ color: "white", fontSize: 35 }} />
      </Badge>
    </Link>
  );
};

export default CartCounter;
