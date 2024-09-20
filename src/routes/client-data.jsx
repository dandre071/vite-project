import Box from "@mui/material/Box";
import PersonalData from "../components/pages/PersonalData";
import ModalHeader from "../components/ModalHeader";
import { iconSize, modal } from "../Styles/styles";
import PersonIcon from "@mui/icons-material/Person";
import { AnimatePresence, motion } from "framer-motion";
import { Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
const ClientData = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 1, x: 50 }}
    >
      <Box className={"page-layout"}>
        <Box>
          <Typography className="page-title">Cliente</Typography>
        </Box>
        <Box>
          {" "}
          <PersonalData />
        </Box>
      </Box>
    </motion.div>
  );
};

export default ClientData;
