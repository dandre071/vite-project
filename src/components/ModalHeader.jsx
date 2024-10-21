import { Box, Divider, Typography } from "@mui/material";

const ModalHeader = ({ title, children }) => {
  return (
    <div style={{ width: "90%" }}>
      <Typography
        className="m-header-title"
        variant="h5"
        //color={"primary.main"}

        fontWeight={600}
        sx={{ fontSize: 28 }}
      >
        {title}
      </Typography>
    </div>
  );
};

export default ModalHeader;
