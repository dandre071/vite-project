import { Box, Button, Grid, InputAdornment, TextField } from "@mui/material";
import { useFormik } from "formik";
import React, { useEffect } from "react";

import { productSchema } from "../components/Validations.js";
import { useShoppingCart } from "../store/shoppingCart.js";
import FormSelect2 from "../components/Forms/FormSelect2.jsx";
import { options } from "../components/utils/options.js";
import PriceCalc from "../components/PriceCalc.jsx";
import { colPesos } from "../components/utils/configs.js";
import { useLocation, useNavigate } from "react-router-dom";
const EditItem = () => {
  const navigate = useNavigate();

  const updateItem = useShoppingCart((state) => state.updateItem);
  const removeItem = useShoppingCart((state) => state.removeItem);
  const cart = useShoppingCart((state) => state.items);
  console.log([cart[0].name]);
  const location = useLocation();
  const id = location.pathname.slice(location.pathname.indexOf(":") + 1);
  const cartItem = cart.filter((item) => item.id === id)[0];
  const index = cart.indexOf(cartItem);
  console.log(cart.indexOf(cartItem));
  const handleUpdate = () => {
    /* removeItem(id); */
    updateItem(formik.values, index, id);
    navigate("/client-data/cart");
    /*  addItem({
      ...formik.values,
      id: uuidv4(), 
    }); */

    /*  formik.resetForm();
    navigate("/client-data/cart"); */
    /*  setOpen(false); */
  };
  const values = {
    id: id,
    /* module: "ManualInput", */
    name: cartItem.name,
    price: cartItem.price,
    quantity: cartItem.quantity,
    description: cartItem.description,
    /*  height: 0,
    width: 0,
    matWidth: 0, */
    finish: cartItem.finish,
    finishQ: cartItem.finishQ,
    /* material: "", */
    /* descolillado: cartItem.descolillado, */
    /* transfer: false, */
    itemTotalPrice: cartItem.itemTotalPrice,
    orientation: cartItem.orientation,
  };
  const handleCancel = () => {
    formik.setValues({ values });
    navigate("/client-data/cart");
  };

  console.log(id);
  const formik = useFormik({
    initialValues: values,
    validationSchema: productSchema,

    /*  onSubmit: handlerAdd, */
  });

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateRows: "80px 1fr",
        borderRadius: 2,
        width: 600,
        height: 450,
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          bgcolor: "white",
          display: "grid",
          justifyContent: "center",
          alignItems: "end",
          color: "primary.dark",
          fontSize: 35,
          fontWeight: 600,
          /*  letterSpacing: 2, */
        }}
      >
        Editar Ítem
      </Box>
      <Grid
        container
        sx={{
          bgcolor: "white",
          placeContent: "center",
        }}
      >
        <Grid
          container
          sx={{
            width: "90%",
            height: "85%",
            /*  bgcolor: "red", */
            gap: 1,
          }}
        >
          <Grid item lg={12}>
            <TextField
              onBlur={formik.handleBlur}
              error={formik.errors.name}
              /*    defaultValue={cartItem.name} */
              /*  helperText={formik.errors.name} */
              value={formik.values.name}
              name="name"
              onChange={formik.handleChange}
              fullWidth
              label={"Producto"}
              type="text"
            />
          </Grid>
          <Grid
            item
            lg={12}
            sx={{
              display: "grid",
              gridTemplateColumns: "25% 15% 30% 1fr",
              gap: 1,
            }}
          >
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
              /*    helperText={formik.errors.price} */
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

            <FormSelect2
              value={formik.values.finish}
              multiple={true}
              error={formik.errors.finish}
              helperText={formik.errors.finish}
              fullWidth
              name="finish"
              onChange={formik.handleChange}
              options={options.acabados}
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
                "Circular",
                "Cuadrado",
                "Ovalado",
              ]}
              label={"Orientación"}
              /* defaultValue={"Sin acabado"} */
            />
          </Grid>
          <Grid item lg={12}>
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
          <Grid
            item
            lg={12}
            sx={{ display: "flex", flexDirection: "row", mt: 2, pb: 2, gap: 3 }}
          >
            <Box sx={{ width: "60%" }}>
              <PriceCalc
                value={formik.values.itemTotalPrice}
                name="itemTotalPrice"
                text={colPesos.format(formik.values.itemTotalPrice)}
                //onClick={totalCalc}
              />
            </Box>
            <Box sx={{ display: "flex", width: "40%", gap: 1 }}>
              <Button
                onClick={handleCancel}
                variant="secondary"
                sx={{ height: 50 }}
              >
                Cancelar
              </Button>
              <Button
                onClick={handleUpdate}
                variant="prime"
                sx={{ height: 50 }}
              >
                Aceptar
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default EditItem;
