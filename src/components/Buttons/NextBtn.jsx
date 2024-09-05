import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import { Box, Button } from "@mui/material";

const NextBtn = ({ className, onClick, pointer }) => {
  return (
    <Box sx={{ pointerEvents: pointer }} onClick={onClick}>
      <ArrowForwardIosRoundedIcon
        /*  className="arrow-btn" */
        className={className}
        sx={{ fontSize: 30, pointerEvents: pointer }}
      />
    </Box>
  );
};

export default NextBtn;
