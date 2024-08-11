import { Box, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const Counter = () => {
  // const increaseQuantity = useShoppingCart((state) => state.increaseQuantity);

  return (
    <Box sx={{ display: "flex" }}>
      <RemoveIcon />
      <Box
        sx={{
          width: 50,
          height: 20,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography sx={{}}>0</Typography>
      </Box>

      <AddIcon />
    </Box>
  );
};

export default Counter;
