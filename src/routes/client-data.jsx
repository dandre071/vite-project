import Box from "@mui/material/Box";
import PersonalData from "../components/pages/PersonalData";
import ModalHeader from "../components/ModalHeader";
import { modal } from "../Styles/styles";
import PersonIcon from "@mui/icons-material/Person";

const ClientData = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
      <Box className="modal" sx={modal}>
        <ModalHeader
          children={<PersonIcon sx={{ fontSize: 60, color: "primary.dark" }} />}
          title={"Información del Cliente"}
        />
        <PersonalData />
      </Box>
    </Box>
  );
};

export default ClientData;
