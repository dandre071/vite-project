import { Box, Button, Divider } from "@mui/material";
import { useOpen } from "../../Hooks/hooks";
import { ThemeProvider } from "styled-components";
import { customTheme } from "../../Hooks/useCustomTheme";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
const AddBtn = ({
  onClick,
  onSubmit,
  width,
  color,
  bg,
  sx,
  title,
  icon,
  variant,
  disabled,
}) => {
  return (
    <Box>
      <Button
        fullWidth
        title={title}
        startIcon={icon}
        //disabled={disabled}
        // sx={sx}
        //type="submit"
        variant={variant}
        //color="secondary"
        // disableElevation
        disableRipple
        //onSubmit={onClick}
        //className={customTheme.props.btn}
        onClick={onSubmit}
      >
        Agregar
      </Button>
    </Box>
  );
};

export default AddBtn;
