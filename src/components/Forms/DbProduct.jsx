import Box from "@mui/material/Box";
import {
  Autocomplete,
  Button,
  InputAdornment,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import Modal from "@mui/material/Modal";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import ModalHeader from "../ModalHeader.jsx";
import { useEffect, useState } from "react";
import FormSelect2 from "./FormSelect2.jsx";
import { styleConf } from "../utils/configs.js";
import { useShoppingCart } from "../../store/shoppingCart.js";
import { colPesos } from "../utils/configs.js";
import PriceCalc from "../PriceCalc.jsx";
import { v4 as uuidv4 } from "uuid";
import { productSchema } from "../Validations.js";
import { useFormik } from "formik";
import { customTheme } from "../../Hooks/useCustomTheme.jsx";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import ModalCard from "../Cards/ModalCard.jsx";
import useUsers from "../../Hooks/useUsers.js";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import EditNoteIcon from "@mui/icons-material/EditNote";
/* import ProductLimit from "./ProductLImit.jsx"; */
import KeyboardAltOutlinedIcon from "@mui/icons-material/KeyboardAltOutlined";
import SearchIcon from "@mui/icons-material/Search";

const module = "ManualInput";

const DbProduct = ({ text, acabado }) => {
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

  const formik = useFormik({
    initialValues: {
      id: "",
      module: "DB",
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
      orientation: "",
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

  const users = useUsers();
  const [productList, setProductList] = useState(null);
  const [price, setPrice] = useState(null);
  useEffect(() => {
    const getProductList = async () => {
      await fetch("http://localhost:3000/api/v1/impresosDB/")
        .then((res) => res.json())
        .then((data) => {
          setProductList(data);
        });
    };
    getProductList();
  }, []);
  const options = productList || null;

  const [value, setValue] = useState(options);
  const [inputValue, setInputValue] = useState("");

  const prices = productList ? productList.map((x) => x.precio) : 0;
  const products = productList ? productList.map((x) => x.producto) : "";
  const index = products.indexOf(value);
  console.log(inputValue);
  const getPrice = () => {
    const price = prices[index];
    setPrice(price);
  };
  console.log(prices[index]);
  const items = useShoppingCart((state) => state.items);
  return (
    <Box>
      <ModalCard
        title={"Configurar manualmente"}
        onClick={handleOpen}
        icon={
          <KeyboardAltOutlinedIcon
            className="modal-icon"
            sx={{ fontSize: 60 }}
          />
        }
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
            className="product-modal"
            sx={{
              ...styleConf,
              width: 550,
            }}
          >
            <div
              style={{ width: "80%", justifySelf: "center", alignSelf: "end" }}
            >
              <ModalHeader title={"Buscar en la base de datos"} />
            </div>

            <Box
              sx={{
                p: customTheme.p[5],
                pt: customTheme.p[0],
                pb: customTheme.p[1],
                borderTop: `2px solid ${customTheme.palette.background.dark}`,
                borderBottom: `2px solid ${customTheme.palette.background.dark}`,
                //bgcolor: "blue",
              }}
            >
              <form onSubmit={formik.handleSubmit}>
                <Grid container spacing={1.5} sx={{ flexGrow: 1 }}>
                  <Grid container spacing={2} sx={{ alignItems: "center" }}>
                    <Grid
                      item
                      sm={12}
                      sx={{
                        display: "grid",
                        gridTemplateColumns: "1fr 40px",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: 1,
                      }}
                    >
                      <Autocomplete
                        freeSolo
                        value={value}
                        onChange={(event, newValue) => {
                          setValue(newValue);
                          console.log(typeof value);
                        }}
                        inputValue={inputValue}
                        onInputChange={(event, newInputValue) => {
                          setInputValue(newInputValue);
                        }}
                        on
                        id="controllable-states-demo"
                        options={options && options.map((x) => x.producto)}
                        fullWidth
                        renderInput={(params) => (
                          <TextField {...params} label="Productos" />
                        )}
                      />
                      <Box
                        sx={{
                          bgcolor: "primary.main",
                          width: 40,
                          height: 40,
                          borderRadius: "50%",
                          display: "grid",
                          placeItems: "center",
                        }}
                      >
                        <SearchIcon
                          className="btn circle"
                          sx={{ color: "white" }}
                          onClick={getPrice}
                        />
                      </Box>
                    </Grid>

                    <Grid item sm={4} style={{ textAlign: "right" }}>
                      <div>Precio:</div>
                    </Grid>
                    <Grid item sm={5}>
                      <Box
                        className="price-holder"
                        sx={{
                          textAlign: "right",
                          fontSize: 25,
                          fontWeight: 700,
                          color: "secondary",
                        }}
                        color={"primary"}
                      >
                        {value !== null && ` ${colPesos.format(price)}`}
                      </Box>
                    </Grid>
                  </Grid>
                  {/* <Grid item sm={8} xs={8}>
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
                      value={formik.values.price}
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
                  </Grid> */}
                  <Grid item sm={4} xs={4}>
                    <TextField
                      error={formik.errors.quantity}
                      helperText={formik.errors.quantity}
                      value={formik.values.quantity}
                      name="quantity"
                      fullWidth
                      label={"Cantidad"}
                      type="number"
                      defaultValue={1}
                      onChange={(e) => {
                        formik.setValues({
                          ...formik.values,
                          quantity: e.target.value,
                          itemTotalPrice: e.target.value * price,
                        });
                      }}
                    />
                  </Grid>

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

                      <FormSelect2
                        value={formik.values.orientation}
                        error={formik.errors.orientation}
                        helperText={formik.errors.orientation}
                        fullWidth
                        name="orientation"
                        onChange={formik.handleChange}
                        options={[
                          "",
                          "Vertical",
                          "Horizontal",
                          "Cuadrado",
                          "Circular",
                          "Ovalado",
                        ]}
                        label={"Orientación/Forma"}
                        defaultValue={"Sin acabado"}
                      />

                      {(formik.values.finish.includes == "Ojales" ||
                        formik.values.finish == "Bolsillos") && (
                        <TextField
                          sx={{
                            color: "black",
                            width: "45%",
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

                  <Grid item sm={12} xs={12} sx={{}}>
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
                    />
                  </Grid>
                  <Grid item sm={12} xs={12}>
                    <PriceCalc
                      value={formik.values.itemTotalPrice}
                      name="itemTotalPrice"
                      text={colPesos.format(formik.values.quantity * price)}
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
                alignItems: "center",
              }}
            >
              {items.length < 8 ? (
                <div
                  style={{
                    width: "70%",
                    height: "80%",
                    display: "grid",
                    gridTemplateColumns: "repeat(2,1fr)",
                    justifyContent: "center",
                    alignItems: "center",
                    paddingBottom: "10px",
                  }}
                >
                  <CloseRoundedIcon
                    className="btn"
                    onClick={handleClose}
                    sx={{ fontSize: 50, color: "secondary.main" }}
                  />
                  <Button
                    sx={{ width: "100%", height: "100%" }}
                    //disabled={!formik.values.itemTotalPrice ? true : false}
                    title={"Agregar"}
                    variant="prime"
                    type="submit"
                    onClick={handlerAdd}
                    startIcon={<AddShoppingCartIcon />}
                  >
                    Agregar
                  </Button>
                </div>
              ) : (
                <ProductLimit open={true} />
              )}
            </Grid>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

export default DbProduct;
