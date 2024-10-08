import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import { Box, Button } from "@mui/material";

const NextBtn = ({ className, onClick, pointer, props }) => {
  return (
    <Box {...props} sx={{ pointerEvents: pointer }} onClick={onClick}>
      <ArrowForwardIosRoundedIcon
        /*  className="arrow-btn" */
        className={className}
        sx={{ fontSize: 40, pointerEvents: pointer, color: "primary.main" }}
      />
    </Box>
  );
};

export default NextBtn;
