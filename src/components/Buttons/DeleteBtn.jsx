import { Trash2 } from "lucide-react";
const DeleteBtn = ({ sx, onClick }) => {
  return (
    <>
      {/* <HighlightOffIcon sx={sx} onClick={onClick} />; */}
      {/*  <ClearIcon
        className="delete-btn"
        sx={{ fontSize: 25, fontWeight: 800 }}
        onClick={onClick}
      /> */}

      <Trash2
        className="delete-btn"
        sx={{ fontSize: 25, fontWeight: 800 }}
        onClick={onClick}
      />
    </>
  );
};

export default DeleteBtn;
