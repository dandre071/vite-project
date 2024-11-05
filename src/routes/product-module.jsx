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

import { useShoppingCart } from "../store/shoppingCart";
import NavBtn from "../Hooks/useCartItems";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { brands, devices, shapes, vinylPrice } from "../../public/configs";
import { cutPrice } from "../components/utils/calcs";

import FormSelect2 from "../components/Forms/FormSelect2";
import { useFormik } from "formik";
import { productSchema } from "../components/Validations";
import SearchIcon from "@mui/icons-material/Search";
import { colPesos } from "../components/utils/configs";

import { clientPrices } from "../../public/configs";

import { lists } from "../../public/configs";
import PriceCalc from "../components/PriceCalc";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { workType } from "../../public/configs";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { v4 as uuidv4 } from "uuid";

const ProductModule = () => {
  const addItem = useShoppingCart((state) => state.addItem);
  const [height, setHeight] = useState(0);

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
  const maintainText =
    formik.values.device + formik.values.brand + formik.values.model;
  const productType = formik.values.type;

  const totalCalc = () => {
    formik.setValues({
      ...formik.values,
      itemTotalPrice: formik.values.quantity * formik.values.price,
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
  /*  console.log(inputValue); */
  const getPrice = () => {
    const price = prices[index];
    setPrice(price);
    formik.setValues({
      ...formik.values,
      price: price,
      itemTotalPrice: price * formik.values.quantity,
    });
  };
  /* console.log(prices[index]);
  const maintainText = `${formik.values.device} / ${formik.values.brand} / ${formik.values.model}`;
  console.log(maintainText);
  console.log(formik.values.brand); */

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 1, x: 50 }}
    >
      <div
        className="product-module-grid"
        // className={ formik.values.type !== "Mantenimiento"  ? "product-module-standard"  : "product-module-grid-maintenance"         }
        style={{
          border: "none",
        }}
      >
        {/*start first row*/}
        <Box className="standard-product">
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
            label={"Tipo de Producto"}
            defaultValue={"Producto"}
          />
          <Box
            sx={{
              display: "grid",
              gap: 1,
              gridTemplateColumns: "1fr",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {productType === "Producto manual" && (
              <TextField
                onBlur={formik.handleBlur}
                error={formik.errors.name}
                value={formik.values.name}
                name="name"
                onChange={formik.handleChange}
                fullWidth
                label={"Producto"}
                type="text"
              />
            )}

            {productType === "Mantenimiento" && (
              <FormSelect2
                value={formik.values.device}
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
            )}
            {productType === "Corte en vinilo" && (
              <FormSelect2
                value={formik.values.device}
                fullWidth
                name="material"
                onChange={(e) => {
                  formik.setValues({
                    ...formik.values,
                    device: e.target.value,
                    name: formik.values.material,
                  });
                }}
                options={devices}
                label={"Material"}
                defaultValue={""}
              />
            )}

            {productType === "Producto estándar" && (
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: "1fr 40px",
                  gap: 1,
                  placeItems: "center",
                }}
              >
                <Autocomplete
                  name="name"
                  onClose={() => {
                    formik.setValues({ ...formik.values, itemTotalPrice: 0 });
                  }}
                  /* freeSolo */
                  value={value}
                  onChange={(event, newValue) => {
                    setValue(newValue);
                    console.log(typeof value);
                  }}
                  inputValue={inputValue}
                  onInputChange={(event, newInputValue) => {
                    setInputValue(newInputValue);
                  }}
                  options={options && options.map((x) => x.producto)}
                  fullWidth
                  renderInput={(params) => (
                    <TextField {...params} label="Buscar producto" />
                  )}
                />
                <Box
                  className="btn"
                  sx={{
                    bgcolor: "primary.main",
                    width: 45,
                    height: 45,
                    borderRadius: "50%",
                    display: "grid",
                    placeItems: "center",
                  }}
                >
                  <SearchIcon sx={{ color: "white" }} onClick={getPrice} />
                </Box>
              </Box>
            )}
          </Box>
        </Box>
        {/*end first row*/}
        {/*start second row*/}
        <Box sx={{ display: "flex", gap: 1 }}>
          <TextField
            sx={{ width: 100 }}
            fullWidth={false}
            className="cant"
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
          {productType === "Producto estándar" && (
            <Box
              sx={{
                display: "grid",
                height: "80%",
                width: "40%",
                gridTemplateColumns: "repeat(2, 1fr)",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box sx={{}}>
                <Typography
                  sx={{
                    color: "black",

                    fontSize: 16,
                    lineHeight: 1,
                    textAlign: "left",
                    fontWeight: 500,
                  }}
                >
                  Precio:
                </Typography>{" "}
              </Box>

              <Typography
                sx={{
                  fontWeight: 700,
                  color: "primary.dark",
                  display: "flex",

                  textAlign: "end",
                  fontSize: 26,
                }}
              >
                {colPesos.format(price)}
              </Typography>
            </Box>
          )}
          {productType !== "Producto estándar" && (
            <Box
              sx={{
                display: "grid",
                height: "80%",
                width: "40%",
                gridTemplateColumns: "repeat(2, 1fr)",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <TextField
                label="Precio"
                name="price"
                type="number"
                onChange={formik.handleChange}
                sx={{ width: 200 }}
              ></TextField>
            </Box>
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
        {/*end second row*/}
        {/*start third row*/}
        {productType === "Mantenimiento" && (
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: 1,
            }}
          >
            <FormSelect2
              value={formik.values.brand}
              fullWidth
              name="brand"
              onChange={formik.handleChange}
              options={brands}
              label={"Marca"}
              defaultValue={""}
            />
            <TextField
              onChange={formik.handleChange}
              value={formik.values.model}
              name="model"
              label={"Modelo"}
            />
          </Box>
        )}
        {/*end third row*/}
        {/*start fourth row*/}
        <Box sx={{ display: "flex", gap: 2 }}>
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
            fullWidth
            name="orientation"
            onChange={formik.handleChange}
            options={shapes}
            label={"Orientación/Forma"}
            defaultValue={"Sin acabado"}
          />
        </Box>
        {/*end fourth row*/}
        <Box className="product-details">
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
              variant="secondary-outlined"
              className="btn"
            >
              {" "}
              <CloseRoundedIcon
                /* */

                sx={{ fontSize: 40, color: "secondary.main" }}
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
