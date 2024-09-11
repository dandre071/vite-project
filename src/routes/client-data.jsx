import Box from "@mui/material/Box";
import PersonalData from "../components/pages/PersonalData";
import ModalHeader from "../components/ModalHeader";
import { iconSize, modal } from "../Styles/styles";
import PersonIcon from "@mui/icons-material/Person";
import { AnimatePresence, motion } from "framer-motion";
const ClientData = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 1, x: 50 }}
    >
      <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
        <Box className="modal" sx={modal}>
          <ModalHeader
            children={
              <PersonIcon className="icon" sx={{ fontSize: iconSize }} />
            }
            title={"Información del Cliente"}
          />
          <PersonalData />
        </Box>
      </Box>
    </motion.div>
  );
};

export default ClientData;
