import { Box, Button, Divider } from "@mui/material";
import { useOpen } from "../../Hooks/hooks";

const AddBtn = ({ onClick, onSubmit, width, color, bg, sx }) => {
  return (
    <Box>
      <Button
        fullWidth
        sx={sx}
        type="submit"
        variant="contained"
        disableElevation
        disableRipple
        //onSubmit={onClick}

        onClick={onSubmit}
      >
        Agregar
      </Button>
    </Box>
  );
};

export default AddBtn;
