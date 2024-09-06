import Box from "@mui/material/Box";
import {
  Button,
  InputAdornment,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import Modal from "@mui/material/Modal";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import ModalHeader from "../ModalHeader";
import { useState } from "react";
import FormSelect2 from "../Forms/FormSelect2.jsx";
import { styleConf, themeColors } from "../utils/configs.js";
import Alert from "@mui/material/Alert";
import { useShoppingCart } from "../../store/shoppingCart.js";
import { colPesos } from "../utils/configs.js";
import PriceCalc from "../PriceCalc.jsx";
import { v4 as uuidv4 } from "uuid";
import { productSchema } from "../Validations.js";
import { useFormik } from "formik";
import { ThemeProvider } from "styled-components";
import { customTheme } from "../../Hooks/useCustomTheme.jsx";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { AddBoxOutlined, ShoppingBag } from "@mui/icons-material";
import ModalCard from "../Cards/ModalCard.jsx";
import EditNoteOutlinedIcon from "@mui/icons-material/EditNoteOutlined";
import InfoIcon from "@mui/icons-material/Info";
import { formatNumber } from "../utils/helpers.js";
import { useUsersList } from "../../store/lists.js";
import useUsers from "../../Hooks/useUsers.js";
import { ShoppingCart } from "lucide-react";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
const module = "ManualInput";

const ManualInput2 = ({ text, acabado }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    //resetForm();
    formik.resetForm();
    setOpen(false);
  };

  const handlerAdd = (e) => {
    addItem({
      ...formik.values,
      id: uuidv4(),
    });
    formik.resetForm();
    setOpen(false);
  };
  //const [disabled, setDisabled] = useState(!formik.errors);

  const initialState = {
    id: "",
    module: "ManualInput",
    name: "",
    price: null,
    quantity: 1,
    description: "",
    height: 0,
    width: 0,
    matWidth: 0,
    finish: "Sin acabado",
    finishQ: 1,
    material: "",
    descolillado: "",
    transfer: false,
    itemTotalPrice: 0,
  };
  const styleParams = { radius: 20, padd: 6 };
  //use Zustand store
  const addItem = useShoppingCart((state) => state.addItem);
  //use product hook
  const disable = () => {
    if (formik.errors) {
      return true;
    }
    const onChange = () => {};
    return;
  };
  const formik = useFormik({
    initialValues: {
      id: "",
      module: "ManualInput",
      name: "",
      price: null,
      quantity: 1,
      description: "",
      height: 0,
      width: 0,
      matWidth: 0,
      finish: [],
      finishQ: 1,
      material: "",
      descolillado: "",
      transfer: false,
      itemTotalPrice: 0,
    },
    validationSchema: productSchema,

    onSubmit: handlerAdd,
  });
  const errors = formik.errors;
  const totalCalc = () => {
    formik.setValues({
      ...formik.values,
      itemTotalPrice: formik.values.quantity * formik.values.price,
    });
  };
  /* const totalCalc = () => {
    formik.setValues({
      ...formik.values,
      itemTotalPrice: formik.values.quantity * formik.values.price,
    });
  }; */

  // formatNumber(formik.values.price);
  const users = useUsers();
  // console.log(users);
  const items = useShoppingCart((state) => state.items);
  return (
    <Box>
      <ModalCard
        title={"Producto Directo"}
        onClick={handleOpen}
        icon={<ShoppingCart id="icon" sx={{ fontSize: 20 }} />}
      />
      <Modal
        disableEscapeKeyDown
        //hideBackdrop

        open={open}
        //onClose={handleClose}
        disableBackdropClick
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Box
            sx={{
              ...styleConf,
              width: "auto",
              bgcolor: "white",
              display: "flex",
              flexDirection: "column",
              flexGrow: 1,
              flexWrap: "wrap",
              alignContent: "center",
              justifyContent: "center",
              pt: 1,
              pb: 1,
              borderRadius: customTheme.shape.borderRadius,
            }}
          >
            <CloseRoundedIcon
              className="close-btn arrow-btn"
              onClick={handleClose}
            />
            <ModalHeader title={"Configuración Manual"} />

            <Box
              sx={{
                p: customTheme.p[5],
                pt: customTheme.p[0],
                pb: customTheme.p[1],
                width: customTheme.width[6],
                borderRadius: 3,
                bgcolor: "white",
              }}
            >
              <form onSubmit={formik.handleSubmit}>
                <Grid container spacing={1.5} sx={{ flexGrow: 1 }}>
                  <Grid item sm={12} xs={12}>
                    <TextField
                      onBlur={formik.handleBlur}
                      error={formik.errors.name}
                      helperText={formik.errors.name}
                      value={formik.values.name}
                      name="name"
                      onChange={formik.handleChange}
                      fullWidth
                      label={"Producto"}
                      type="text"
                    />
                    {/* {formik.errors.name && (
                        <Tooltip
                          title={formik.errors.name}
                          arrow
                          sx={{ position: "absolute", top: -100 }}
                        >
                          <InfoIcon
                            sx={{ fontSize: 25, color: "error.main" }}
                          />
                        </Tooltip>
                      )} */}
                  </Grid>
                  <Grid item sm={8} xs={8}>
                    <TextField
                      InputProps={{
                        startAdornment: (
                          <InputAdornment
                            position="start"
                            InputProps={{ fontSize: 40 }}
                          >
                            $
                          </InputAdornment>
                        ),
                      }}
                      error={formik.errors.price}
                      helperText={formik.errors.price}
                      value={formik.values.price}
                      //onChange={formik.handleChange}
                      onChange={(e) => {
                        formik.setValues({
                          ...formik.values,
                          price: e.target.value,
                          itemTotalPrice:
                            e.target.value * formik.values.quantity,
                        });
                      }}
                      name="price"
                      fullWidth
                      label={"Precio"}
                      type="number"
                    />
                  </Grid>
                  <Grid item sm={4} xs={4}>
                    <TextField
                      error={formik.errors.quantity}
                      helperText={formik.errors.quantity}
                      value={formik.values.quantity}
                      name="quantity"
                      fullWidth
                      label={"Cantidad"}
                      type="number"
                      onChange={(e) => {
                        formik.setValues({
                          ...formik.values,
                          quantity: e.target.value,
                          itemTotalPrice: e.target.value * formik.values.price,
                        });
                      }}
                    />
                  </Grid>

                  {formik.values.price > 0 && (
                    <Grid item sm={12} xs={12}>
                      {/* <PriceCalc
                          disabled={
                            formik.errors.price ||
                            formik.errors.quantity ||
                            !formik.values.price
                              ? true
                              : false
                          }
                          value={formik.values.itemTotalPrice}
                          name={"itemTotalPrice"}
                          text={`${colPesos.format(
                            formik.values.itemTotalPrice
                          )}`}
                          onClick={totalCalc}
                        /> */}
                      {/*disabled={
                            formik.errors.price ||
                            formik.errors.quantity ||
                            !formik.values.price
                              ? true
                              : false
                          }*/}
                      <PriceCalc
                        value={formik.values.itemTotalPrice}
                        name="itemTotalPrice"
                        text={colPesos.format(formik.values.itemTotalPrice)}
                        //onClick={totalCalc}
                      />
                    </Grid>
                  )}

                  <Grid item sm={12} xs={12}>
                    <Box
                      sx={{
                        display: "flex",
                        gap: 1.2,
                        justifyContent: "center",
                        alignItems: "center",
                        m: 0,
                      }}
                    >
                      <FormSelect2
                        value={formik.values.finish}
                        multiple={true}
                        error={formik.errors.finish}
                        helperText={formik.errors.finish}
                        fullWidth
                        name="finish"
                        onChange={formik.handleChange}
                        options={acabado}
                        label={"Acabado"}
                        defaultValue={"Sin acabado"}
                        renderValue={(selected) => selected.join(", ")}
                      />

                      {(formik.values.finish == "Ojales" ||
                        formik.values.finish == "Bolsillos") && (
                        <TextField
                          sx={{
                            color: themeColors.darkText,
                            width: "49%",
                            borderRadius: 2,
                          }}
                          fullWidth
                          type={"number"}
                          label={"Cantidad"}
                          defaultValue={1}
                          value={formik.values.finishQ}
                          name="finishQ"
                          onChange={formik.handleChange}
                        />
                      )}
                    </Box>
                  </Grid>
                  {/*Total price module*/}
                  <Grid
                    item
                    sm={12}
                    xs={12}
                    sx={{ pr: 1, pl: 1, pt: 0, pb: 0 }}
                  >
                    <TextField
                      error={formik.errors.description}
                      helperText={formik.errors.description}
                      value={formik.values.description}
                      name="description"
                      fullWidth
                      label={"Descripción"}
                      type="text"
                      onChange={formik.handleChange}
                      minRows={2}
                      multiline
                      sx={{ pb: 3 }}
                    />
                  </Grid>
                </Grid>{" "}
              </form>{" "}
            </Box>
            <Grid
              sm={12}
              xs={12}
              sx={{
                display: "flex",
                justifyContent: "center",
                borderTop: `2px solid ${customTheme.palette.background.dark}`,
                pt: 2,
                pb: 3,
              }}
            >
              {items.length < 7 ? (
                <Button
                  sx={{ width: "80%" }}
                  //disabled={!formik.values.itemTotalPrice ? true : false}
                  title={"Agregar"}
                  variant="prime"
                  type="submit"
                  onClick={handlerAdd}
                  startIcon={<AddShoppingCartIcon />}
                >
                  Agregar
                </Button>
              ) : (
                <Typography>Límite de productos alcanzado!</Typography>
              )}
            </Grid>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

export default ManualInput2;
