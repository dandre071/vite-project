import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import ClearIcon from "@mui/icons-material/Clear";
import { themeColors } from "../utils/configs";
const DeleteBtn = ({ sx, onClick }) => {
  return (
    <>
      {/* <HighlightOffIcon sx={sx} onClick={onClick} />; */}
      <ClearIcon
        className="delete-btn"
        sx={{ fontSize: 25, fontWeight: 800 }}
        onClick={onClick}
      />
    </>
  );
};

export default DeleteBtn;
