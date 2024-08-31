import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import { Box } from "@mui/material";

const NextBtn = ({ className, onClick, pointer }) => {
  return (
    <Box sx={{ pointerEvents: pointer }}>
      <ArrowForwardIosRoundedIcon
        /*  className="arrow-btn" */
        className={className}
        sx={{ fontSize: 30, pointerEvents: pointer }}
        onClick={onClick}
      />
    </Box>
  );
};

export default NextBtn;
