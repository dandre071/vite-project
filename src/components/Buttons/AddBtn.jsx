import { Box, Button, Divider } from "@mui/material";
import { useOpen } from "../../Hooks/hooks";
import { ThemeProvider } from "styled-components";
import { customTheme } from "../../Hooks/useCustomTheme";

const AddBtn = ({ onClick, onSubmit, width, color, bg, sx }) => {
  return (
    <Box>
      <ThemeProvider theme={customTheme}>
        <Button
          //fullWidth
          // sx={sx}
          type="submit"
          variant="primary"
          //color="secondary"
          // disableElevation
          disableRipple
          //onSubmit={onClick}
          className={customTheme.props.btn}
          onClick={onSubmit}
        >
          Agregar
        </Button>
      </ThemeProvider>
    </Box>
  );
};

export default AddBtn;
