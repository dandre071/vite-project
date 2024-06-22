import { Button } from "@mui/material";

const CalcBtn = ({ onClick }) => {
  return (
    <Button
      sx={{
        height: 50,
        width: 120,
        fontSize: 16,
        color: "white",
        bgcolor: "success.main",
        borderRadius: 2,
        borderStyle: "none",
        scale: 1,
        textTransform: " initial",
        "&:hover": {
          bgcolor: "success.dark",
        },
        /* "&:hover": {
          bgcolor: "white",
          borderStyle: "solid",
          borderColor: "primary.main",
          borderWidth: 2,
          transform: "scale(1.1)",
          transformOrigin: "center",
          transition: "scale 1",
        }, */
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
