import { Stack, TextField } from "@mui/material";
import AddBtn from "../Buttons/AddBtn";

const CreateProduct = () => {
  return (
    <Stack>
      <TextField label={"Nombre del producto"}></TextField>
      <TextField label={"Precio"}></TextField>
      <AddBtn variant={"prime"} />
    </Stack>
  );
};

export default CreateProduct;
