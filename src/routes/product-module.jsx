import {
  Autocomplete,
  Box,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import AutoProductModal from "../components/AutoProductModal";
import VinylCutModal from "../components/VinylCutModal";
import ManualInput2 from "../components/modals/manualInput copy";

import { modal } from "../Styles/styles";
import ModalHeader from "../components/ModalHeader";
import { useShoppingCart } from "../store/shoppingCart";
import NavBtn from "../Hooks/useCartItems";
import { iconSize } from "../Styles/styles";
import AddShoppingCartRoundedIcon from "@mui/icons-material/AddShoppingCartRounded";
import ProductLimit from "../components/modals/ProductLImit";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { vinylPrice } from "../../public/configs";
import { cutPrice } from "../components/utils/calcs";
import DbProduct from "../components/Forms/DbProduct";
import FormSelect2 from "../components/Forms/FormSelect2";
import { useFormik } from "formik";
import { productSchema } from "../components/Validations";
import SearchIcon from "@mui/icons-material/Search";
import { colPesos } from "../components/utils/configs";
import { customTheme } from "../Hooks/useCustomTheme";
import { clientPrices } from "../../public/configs";
/* import config from "../../public/config.json"; */
import { lists } from "../../public/configs";
import PriceCalc from "../components/PriceCalc";

const configs = clientPrices;
console.log(clientPrices);
console.log(lists.acabados);
cutPrice("Particular", 60, "Vinilo");
const ProductModule = () => {
  const items = useShoppingCart((state) => state.items);
  const cart = useShoppingCart();

  const [height, setHeight] = useState(0);
  const handleHeight = () => setHeight(cartHeight);
  const handlerAdd = (e) => {
    addItem({
      ...formik.values,
      id: uuidv4(),
    });
    formik.resetForm();
    setOpen(false);
  };
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

  /* const users = useUsers(); */
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
  /* const items = useShoppingCart((state) => state.items); */
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 1, x: 50 }}
    >
      <Box className={""} sx={{}}>
        <div
          className="form-container"
          style={{
            width: 700,
            backgroundColor: "red",
            border: "none",
          }}
        >
          <Box className="product-module-grid">
            <Box sx={{}}>
              <FormSelect2
                options={["Corte en vinilo", "Producto", "Mantenimiento"]}
                label={"Acabado"}
                defaultValue={"Sin acabado"}
              />
            </Box>

            <Box>
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: "1fr auto 80px",
                  gap: 2,
                  justifyContent: "center",
                  alignItems: "center",
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
                <TextField
                  error={formik.errors.quantity}
                  helperText={formik.errors.quantity}
                  value={formik.values.quantity}
                  name="quantity"
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
              </Box>
            </Box>

            <Box
              className="price-holder"
              sx={{
                textAlign: "center",
                fontSize: 24,
                fontWeight: 700,
                color: "secondary",
              }}
              color={"primary"}
            >
              {value !== null && `Precio: ${colPesos.format(price)}`}
            </Box>
          </Box>
          {/* <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: 10,
            }}
          >
            <DbProduct
              choice={options.choice}
              text={"DB"}
              acabado={options.acabados}
            />
            <AutoProductModal
              text={"Auto"}
              matSize={options.materialWidth}
              material={options.materials}
              choice={options.choice}
              options={options.acabados}
            />
            <VinylCutModal
              text={"Corte en vinilo"}
              materials={Object.keys(vinylPrice)}
              choice={options.choice}
              descolillado={options.descolillado}
              colors={{ colors }}
            />
            <ManualInput2
              choice={options.choice}
              text={"Manual input"}
              acabado={options.acabados}
            />
          </div> */}
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
                      options={lists.acabados}
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
          <Box
            sx={{
              display: " flex",
              justifyContent: "center",
              pb: 0,
              mt: 3,
              minWidth: 700,
            }}
          >
            <NavBtn
              nextText={"Compras"}
              backText={"Datos del cliente"}
              className={"arrow-btn"}
              pathBack={"/client-data"}
              pathNext={"/client-data/cart"}
            />
          </Box>{" "}
        </div>
      </Box>
    </motion.div>
  );
};

export default ProductModule;
