import { Button } from "@mui/material";

const CalcBtn = ({ onClick, sx }) => {
  return (
    <Button
      sx={sx}
      variant="contained"
      disableElevation
      disableRipple
      onClick={onClick}
    >
      Calcular
    </Button>
  );
};

export default CalcBtn;
