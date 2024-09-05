import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import { Box, Button } from "@mui/material";

const NextBtn = ({ className, onClick, pointer }) => {
  return (
    <Box sx={{ pointerEvents: pointer }}>
      <button type="submit" onClick={onClick}>
        <ArrowForwardIosRoundedIcon
          /*  className="arrow-btn" */
          className={className}
          sx={{ fontSize: 30, pointerEvents: pointer }}
        />
      </button>
    </Box>
  );
};

export default NextBtn;
