import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";

export const BackBtn = ({ className }) => {
  return (
    <ArrowBackIosNewRoundedIcon
      className={className}
      sx={{ fontSize: 40, color: "primary.main" }}
    />
  );
};
