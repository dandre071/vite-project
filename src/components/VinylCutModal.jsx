import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import Modal from "@mui/material/Modal";
import TextAreas from "./TextAreas";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import ModalHeader from "./ModalHeader";
import SelectField from "./SelectField";
import AddBtn from "./Buttons/AddBtn";
import OpenModalBtn from "./OpenModalBtn";
import ModalCard from "./Cards/ModalCard";
import EditNoteOutlinedIcon from "@mui/icons-material/EditNoteOutlined";
import { GiBoxCutter } from "react-icons/gi";
import { customTheme } from "../Hooks/useCustomTheme";
import { Slice } from "lucide-react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  // border: "0px transparent #000 5px",

  // boxShadow: 24,
  p: 4,
};
const VinylCutModal = ({
  text,
  materials,
  choice,
  descolillado,

  colors,
}) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <ModalCard
        title={"Corte en Vinilo"}
        icon={<Slice id="icon" sx={{ fontSize: 20 }} />}
        onClick={handleOpen}
      />

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box borderRadius="10px" sx={style}>
          <Grid container spacing={2} sx={{ flexGrow: 1 }}>
            <Grid item sm={12}>
              {/* <Slice /> */}
              <ModalHeader title={"Corte en vinilo"} />
            </Grid>

            <Grid item sm={8}>
              <SelectField
                fullWidth
                item
                options={materials}
                text={"Material"}
                label={"Material"}
              />
            </Grid>

            <Grid item sm={4}>
              <TextField fullWidth type={"text"} label={"Largo (cm)"} />
            </Grid>

            <Grid item sm={3}>
              <TextField fullWidth type={"number"} label={"Cant"} />
            </Grid>
            <Grid item sm={4}>
              <SelectField
                fullWidth
                item
                options={descolillado}
                text={"Descolillado"}
                label={"Tipo de cliente"}
              />
            </Grid>
            <Grid item sm={5}>
              <SelectField
                item
                options={choice}
                text={"Transportador"}
                label={"Tipo de cliente"}
              />
            </Grid>
            <Grid item sm={4}>
              <Button
                sx={{
                  height: 50,
                  fontSize: 20,
                  color: "white",
                }}
                fullWidth
                type="submit"
                color="success"
                variant="contained"
                disableElevation
              >
                Calcular
              </Button>
            </Grid>

            <Grid item sm={8}>
              <div
                className="price-holder"
                style={{
                  textAlign: "center",
                  fontSize: 25,
                  fontWeight: 700,
                  color: "#ff2c2e",
                }}
              >
                $ 000000
              </div>
            </Grid>

            <Grid item sm={12}>
              <TextAreas label={"Descripción"} description={"Descripción"} />
            </Grid>
            <Grid item sm={12}>
              <AddBtn onClick={handleClose} />
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </div>
  );
};

export default VinylCutModal;
