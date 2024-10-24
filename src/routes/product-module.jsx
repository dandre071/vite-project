import {
  Autocomplete,
  Box,
  Button,
  Grid,
  InputAdornment,
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
import { brands, devices, shapes, vinylPrice } from "../../public/configs";
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
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { workType } from "../../public/configs";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { v4 as uuidv4 } from "uuid";
const configs = clientPrices;
console.log(clientPrices);
console.log(lists.acabados);
cutPrice("Particular", 60, "Vinilo");
const ProductModule = () => {
  const items = useShoppingCart((state) => state.items);
  const cart = useShoppingCart();
  const addItem = useShoppingCart((state) => state.addItem);
  const [height, setHeight] = useState(0);
  const handleHeight = () => setHeight(cartHeight);
  const handlerAdd = (e) => {
    addItem({
      ...formik.values,
      name: inputValue || formik.values.name || maintainText,
      id: uuidv4(),
    });
    formik.resetForm();
    formik.setValues({
      ...formik.values,
      type: e.target.value,
      quantity: 1,
      name: "",
      price: null,
      finish: [],
      orientation: "",
      description: "",
    });
  };
  const handleClose = (e) => {
    formik.setValues({
      ...formik.values,
      type: e.target.value,
      quantity: 1,
      name: "",
      price: null,
      finish: [],
      orientation: "",
      description: "",
    });
  };
  const formik = useFormik({
    initialValues: {
      type: "Producto estándar",
      id: "",
      module: "DB",
      name: "",
      price: null,
      quantity: 1,
      description: "",
      height: 0,
      width: 0,
      matWidth: 0,
      finish: ["Sin acabado"],
      finishQ: 1,
      material: "",
      descolillado: "",
      transfer: false,
      itemTotalPrice: 0,
      orientation: "",
      model: "",
      brand: "",
      device: "",
    },
    validationSchema: productSchema,

    onSubmit: handlerAdd,
  });

  const productType = formik.values.type;
  const errors = formik.errors;
  const totalCalc = () => {
    formik.setValues({
      ...formik.values,
      itemTotalPrice: formik.values.quantity * formik.values.price,
    });
  };

  const handleDeviceChange = (e) => {
    formik.setValues({
      ...formik.values,

      name: `${formik.values.device} / ${formik.values.brand} / ${formik.values.model}`,
    });
  };
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
  const [type, setType] = useState("");
  const prices = productList ? productList.map((x) => x.precio) : 0;
  const products = productList ? productList.map((x) => x.producto) : "";
  const index = products.indexOf(value);
  console.log(inputValue);
  const getPrice = () => {
    const price = prices[index];
    setPrice(price);
    formik.setValues({
      ...formik.values,
      price: price,
      itemTotalPrice: price * formik.values.quantity,
    });
  };
  console.log(prices[index]);
  const maintainText = `${formik.values.device} / ${formik.values.brand} / ${formik.values.model}`;
  console.log(maintainText);
  console.log(formik.values.brand);

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 1, x: 50 }}
    >
      <div
        className="product-module-grid"
        style={{
          border: "none",
        }}
      >
        <Box className={"type"}>
          <FormSelect2
            name={"type"}
            value={formik.values.type}
            onChange={(e) => {
              formik.handleChange;
              formik.setValues({
                ...formik.values,
                type: e.target.value,
                quantity: 1,
                name: "",
                price: null,
                finish: [],
                orientation: "",
                description: "",
              });
              setPrice(0);
              setValue("");
            }}
            fullWidth
            options={workType}
            label={""}
            defaultValue={"Producto"}
          />
        </Box>
        <Box
          className="product-bar"
          sx={{
            alignSelf: "center",
            justifySelf: "center",

            display: "grid",
            gridTemplateColumns: "1fr auto",
            gap: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {productType !== "Producto estándar" && (
            <TextField
              onBlur={formik.handleBlur}
              error={formik.errors.name}
              // helperText={formik.errors.name}
              value={formik.values.name}
              name="name"
              onChange={formik.handleChange}
              fullWidth
              label={"Producto"}
              type="text"
            />
          )}
          {productType === "Mantenimiento" && (
            <Box className="grid-3">
              <FormSelect2
                value={formik.values.device}
                /*   error={formik.errors.device}
                helperText={formik.errors.device} */
                fullWidth
                name="device"
                onChange={(e) => {
                  formik.setValues({
                    ...formik.values,
                    device: e.target.value,
                    name: formik.values.device,
                  });
                }}
                options={devices}
                label={"Equipo"}
                defaultValue={""}
              />
              <FormSelect2
                value={formik.values.brand}
                /*  error={formik.errors.brand}
                helperText={formik.errors.brand} */
                fullWidth
                name="brand"
                onChange={formik.handleChange}
                options={brands}
                label={"Marca"}
                defaultValue={""}
              />
              <TextField
                /*  error={formik.errors.model}
                helperText={formik.errors.model} */
                onChange={formik.handleChange}
                value={formik.values.model}
                name="model"
                label={"Modelo"}
              />
            </Box>
          )}
          {productType == "Producto estándar" && (
            <>
              <Autocomplete
                name="name"
                onClose={() => {
                  formik.setValues({ ...formik.values, itemTotalPrice: 0 });
                }}
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
            </>
          )}
        </Box>
        <Box
          className={
            productType === "Mantenimiento" ? "maintain-product" : "price-bar"
          }
          sx={{
            textAlign: "center",
            fontSize: 24,
            fontWeight: 700,
          }}
        >
          <Box>
            {" "}
            {productType == "Producto estándar" &&
              `Precio: ${colPesos.format(price)}`}
            {productType !== "Producto estándar" && (
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
                // helperText={formik.errors.price}
                value={formik.values.price}
                //onChange={formik.handleChange}
                onChange={(e) => {
                  formik.setValues({
                    ...formik.values,
                    price: e.target.value,
                    itemTotalPrice: e.target.value * formik.values.quantity,
                  });
                }}
                name="price"
                fullWidth
                label={"Precio"}
                type="number"
              />
            )}
          </Box>
          {productType === "Mantenimiento" && (
            <TextField
              style={{ width: "100%" }}
              /*  error={formik.errors.quantity}
              helperText={formik.errors.quantity} */
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
          )}

          <PriceCalc
            value={formik.values.itemTotalPrice}
            name="itemTotalPrice"
            text={
              formik.values.type == "Producto estándar"
                ? colPesos.format(formik.values.quantity * price)
                : colPesos.format(formik.values.price * formik.values.quantity)
            }
          />
        </Box>
        <Box className="product-details">
          <form onSubmit={formik.handleSubmit}>
            <Grid container spacing={1.5} sx={{ flexGrow: 1 }}>
              <Grid item sm={12} xs={12}>
                <Box
                  className={
                    formik.values.type !== "Mantenimiento"
                      ? "standard-product"
                      : "none"
                  }
                  sx={{}}
                >
                  <TextField
                    /*  error={formik.errors.quantity}
                    helperText={formik.errors.quantity} */
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
                  <FormSelect2
                    value={formik.values.finish}
                    multiple={true}
                    /*  error={formik.errors.finish}
                    helperText={formik.errors.finish} */
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
                    /* error={formik.errors.orientation}
                    helperText={formik.errors.orientation} */
                    fullWidth
                    name="orientation"
                    onChange={formik.handleChange}
                    options={shapes}
                    label={"Orientación/Forma"}
                    defaultValue={"Sin acabado"}
                  />

                  {/* {(formik.values.finish.includes == "Ojales" ||
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
                  )} */}
                </Box>
              </Grid>

              <Grid item sm={12} xs={12} sx={{}}>
                <TextField
                  /*  error={formik.errors.description}
                  helperText={formik.errors.description} */
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
            </Grid>{" "}
          </form>{" "}
        </Box>
        <div className="total-bar" item sm={12} xs={12}>
          <Box
            sx={{
              display: "flex",
              width: "100%",

              justifyContent: "end",
              p: 0,
              gap: 1,
              /*      bgcolor: "orange", */
            }}
          >
            <Button
              sx={{ height: 60, width: 100 }}
              onClick={handleClose}
              variant="secondary"
              className="btn"
            >
              {" "}
              <CloseRoundedIcon
                /* */

                sx={{ fontSize: 40, color: "white" }}
              />
            </Button>

            <Button
              sx={{ height: 60, width: 100 }}
              variant="prime"
              className="btn"
              onClick={handlerAdd}
            >
              <AddShoppingCartIcon sx={{ fontSize: 40, color: "white" }} />
            </Button>
          </Box>
        </div>
        <Box
          className="product-btn"
          sx={{
            display: " flex",
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
    </motion.div>
  );
};

export default ProductModule;
