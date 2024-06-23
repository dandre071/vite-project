import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { themeColors } from "../utils/configs";
const DeleteBtn = ({ sx, onClick }) => {
  return <HighlightOffIcon color="warning" sx={sx} onClick={onClick} />;
};

export default DeleteBtn;
