import { Grid, TextField } from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import { productSchema } from "../Validations";
import { useShoppingCart } from "../../store/shoppingCart";
import FormSelect2 from "../Forms/FormSelect2";
import { options } from "../utils/options";
import PriceCalc from "../PriceCalc.jsx";
import { colPesos } from "../utils/configs.js";
const EditItem = () => {
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
      orientation: "",
    },
    validationSchema: productSchema,

    onSubmit: handlerAdd,
  });
  const addItem = useShoppingCart((state) => state.addItem);
  return (
    <div>
      <Grid container>
        <Grid item sm={4} xs={4}>
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
        <Grid item sm={4} xs={4}>
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
        </Grid>
        <FormSelect2
          value={formik.values.orientation}
          error={formik.errors.orientation}
          helperText={formik.errors.orientation}
          fullWidth
          name="orientation"
          onChange={formik.handleChange}
          options={["", "Vertical", "Horizontal"]}
          label={"Orientación"}
          /* defaultValue={"Sin acabado"} */
        />
        <Grid item sm={12} xs={12} sx={{ pr: 1, pl: 1, pt: 0, pb: 0 }}>
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
        <PriceCalc
          value={formik.values.itemTotalPrice}
          name="itemTotalPrice"
          text={colPesos.format(formik.values.itemTotalPrice)}
          //onClick={totalCalc}
        />
      </Grid>
    </div>
  );
};

export default EditItem;
