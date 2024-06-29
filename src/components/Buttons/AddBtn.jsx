import { Box, Button, Divider } from "@mui/material";
import { useOpen } from "../../Hooks/hooks";

const AddBtn = ({ onClick, onSubmit, width, color, bg }) => {
  return (
    <Box>
      <Button
        fullWidth
        sx={{
          height: 50,
          fontSize: 22,
          textTransform: " initial",
          color: color,
          bgcolor: bg,
          width: width,
          borderRadius: 2.5,
          pt: 3,
          pb: 3,
          "&:hover": {
            color: bg,
            bgcolor: "primary.main",
            borderStyle: "solid",
            borderWidth: 3,
            borderColor: bg,
          },
        }}
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
