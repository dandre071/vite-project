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
      <Grid2
        container
        lg={12}
        sm={12}
        sx={{ /* bgcolor: "yellow",  */ justifyContent: "center" }}
      >
        <Grid2
          item
          lg={9}
          md={12}
          sm={12}
          xs={12}
          sx={{
            height: "60vh",
            /* width: "100vw", */
            justifyContent: "center",
            bgcolor: "white",
            display: "grid",
            borderRadius: 2,
            overflow: "hidden",
            gridTemplateRows: "150px 1fr",
          }}
        >
          <ModalHeader
            style={{ height: "100%" }}
            title={"Información del Cliente"}
          />
          {/*  <div className={"modal-header-icon"}>
              <PersonIcon className="icon" sx={{ fontSize: iconSize }} />
            </div>
          </ModalHeader>  */}
          {/* <Typography>Información del cliente</Typography> */}

          <PersonalData />
        </Grid2>
      </Grid2>
    </motion.div>
  );
};

export default ClientData;
