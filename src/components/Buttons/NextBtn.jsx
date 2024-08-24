import { Box, Button } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const NextBtn = ({ disabled }) => {
  return (
    <Button>
      <NavigateNextIcon
        disabled={disabled}
        className="arrow-btn"
        sx={{ fontSize: 40 }}
      />
    </Button>
  );
};

export default NextBtn;
