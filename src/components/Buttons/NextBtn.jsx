import { Box } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const NextBtn = ({ disabled }) => {
  return (
    <NavigateNextIcon
      disabled={disabled}
      className="arrow-btn"
      sx={{ fontSize: 40 }}
    />
  );
};

export default NextBtn;
