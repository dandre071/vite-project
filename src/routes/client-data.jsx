import Box from "@mui/material/Box";
import PersonalData from "../components/pages/PersonalData";
import { motion } from "framer-motion";
import { Typography } from "@mui/material";
import { getPageTitle } from "../components/utils/helpers";

const ClientData = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 1, x: 50 }}
    >
      <Box className={"page-layout"}>
        <Box>
          
          <PersonalData />
        </Box>
      </Box>
    </motion.div>
  );
};

export default ClientData;
