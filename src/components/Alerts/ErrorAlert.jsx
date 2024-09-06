import { Alert, AlertTitle, Box, Collapse, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { HandPlatter } from "lucide-react";

const ErrorAlert = ({ handleAlertOpen, handleAlertClose, open }) => {
  <Box sx={{ width: "100%" }}>
    <Collapse in={open}>
      <Alert
        //severity="warning"
        action={
          <IconButton
            aria-label="close"
            color="inherit"
            size="small"
            onClick={handleAlertClose}
          >
            <CloseIcon fontSize="inherit" />
          </IconButton>
        }
        sx={{ mb: 2 }}
      >
        <AlertTitle>Error</AlertTitle>
        Click the close icon to see the Collapse transition in action!
      </Alert>
    </Collapse>
  </Box>;
};

export default ErrorAlert;
