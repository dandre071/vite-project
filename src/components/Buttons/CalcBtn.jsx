import { Button } from "@mui/material";

const CalcBtn = ({ onClick }) => {
  return (
    <Button
      sx={{
        height: 50,
        fontSize: 16,
        color: "primary.main",
        bgcolor: "primary.light",
        borderRadius: 3,
        borderStyle: "none",
        scale: 1,
        "&:hover": {
          bgcolor: "white",
          borderStyle: "solid",
          borderColor: "primary.main",
          borderWidth: 2,
          scale: 1.5,
        },
      }}
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
