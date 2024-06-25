import { Box, Button, Divider } from "@mui/material";
import { useOpen } from "../../Hooks/hooks";

const AddBtn = ({ onClick }) => {
  return (
    <Box>
      <Button
        sx={{
          height: 50,
          fontSize: 22,
          textTransform: " initial",
          color: "white",
          bgcolor: "primary.main",
          width: 200,
          borderRadius: 2.5,
          pt: 3,
          pb: 3,
        }}
        type="submit"
        variant="contained"
        disableElevation
        disableRipple
        //onSubmit={onClick}
        onClick={onClick}
      >
        Agregar
      </Button>
    </Box>
  );
};

export default AddBtn;
