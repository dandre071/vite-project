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
      name: inputValue,
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
  const handleClose = () => {
    //resetForm();
    formik.resetForm();
  };
  const formik = useFormik({
    initialValues: {
      type: "Producto",
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
  /* const items = useShoppingCart((state) => state.items); */
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 1, x: 50 }}
    >
      <div
        className="product-module-grid"
        style={{
          /*    backgroundColor: "yellow", */
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
          {formik.values.type !== "Producto" && (
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
          {formik.values.type == "Producto" && (
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
          className="price-bar"
          sx={{
            textAlign: "center",
            fontSize: 24,
            fontWeight: 700,
          }}
        >
          <Box>
            {" "}
            {formik.values.type == "Producto" &&
              `Precio: ${colPesos.format(price)}`}
            {formik.values.type !== "Producto" && (
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
          <PriceCalc
            value={formik.values.itemTotalPrice}
            name="itemTotalPrice"
            text={colPesos.format(formik.values.quantity * price)}
          />
        </Box>
        <Box className="product-details">
          <form onSubmit={formik.handleSubmit}>
            <Grid container spacing={1.5} sx={{ flexGrow: 1 }}>
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
            </Grid>{" "}
          </form>{" "}
        </Box>
        <div className="total-bar" item sm={12} xs={12}>
          {/*  <PriceCalc
            value={formik.values.itemTotalPrice}
            name="itemTotalPrice"
            text={colPesos.format(formik.values.quantity * price)}
          /> */}
          <Box
            sx={{
              display: "grid",
              width: "100%",
              gridTemplateColumns: "1fr auto",
              justifyContent: "end",
              p: 0,
              gap: 1,
              /*      bgcolor: "orange", */
            }}
          >
            <Button onClick={handleClose} variant="secondary">
              {" "}
              <CloseRoundedIcon
                /* className="btn" */

                sx={{ fontSize: 40, color: "white" }}
              />
            </Button>

            <Button
              sx={{ width: "85%", height: "100%", m: 0 }}
              //disabled={!formik.values.itemTotalPrice ? true : false}
              title={"Agregar"}
              variant="prime"
              type="submit"
              onClick={handlerAdd}
              startIcon={<AddShoppingCartIcon />}
            >
              Agregar
            </Button>
          </Box>
        </div>
        <Box
          className="product-btn"
          sx={{
            display: " flex",
            justifyContent: "center",
            alignItems: "center",
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
