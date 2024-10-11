import { Box, Divider, Typography } from "@mui/material";

const ModalHeader = ({ title, children }) => {
  return (
    <>
      <Typography
        className="m-header-title"
        variant="h5"
        //color={"primary.main"}

        fontWeight={600}
        sx={{ fontSize: 28 }}
      >
        {title}
      </Typography>
    </>
  );
};

export default ModalHeader;
