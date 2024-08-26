import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";

const NextBtn = ({ className }) => {
  return (
    <ArrowForwardIosRoundedIcon
      /*  className="arrow-btn" */
      className={className}
      sx={{ fontSize: 30 }}
    />
  );
};

export default NextBtn;
