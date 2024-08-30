import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";

const NextBtn = ({ className, onClick }) => {
  return (
    <ArrowForwardIosRoundedIcon
      /*  className="arrow-btn" */
      className={className}
      sx={{ fontSize: 30 }}
      onClick={onClick}
    />
  );
};

export default NextBtn;
