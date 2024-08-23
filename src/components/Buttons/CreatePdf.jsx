import { Button } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";

const CreatePdf = ({ variant, title, icon }) => {
  return (
    <Button
      fullWidth
      title={title}
      startIcon={icon}
      //disabled={disabled}
      // sx={sx}
      //type="submit"
      variant={variant}
      //color="secondary"
      // disableElevation
      disableRipple
      //onSubmit={onClick}
      //className={customTheme.props.btn}
      //onClick={onSubmit}
    >
      {title}
    </Button>
  );
};

export default CreatePdf;
