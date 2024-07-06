import { Button } from "@mui/material";

const CalcBtn = ({ onClick, sx, disabled }) => {
  return (
    <Button
      disabled={disabled}
      //sx={sx}
      variant="secondary"
      disableElevation
      disableRipple
      onClick={onClick}
    >
      Calcular
    </Button>
  );
};

export default CalcBtn;
