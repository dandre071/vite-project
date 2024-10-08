import { Box } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const NextBtnDisabled = ({ disabled, className }) => {
  return (
    <NavigateNextIcon
      /*  className="arrow-btn" */
      className={className}
      sx={{ fontSize: 40 }}
    />
  );
};

export default NextBtnDisabled;
