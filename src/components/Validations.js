import { object, string, number, date, boolean } from "yup";

export const productSchema = object().shape({
  name: string("Invalid email address").required(),
  //.min(1, "El nombre tiene que tener al menos un carácter")
  // .max(10, "El nombre no puede superar los 10 carácteres"),
  price: number().required().positive().integer(),
  quantity: number().required().positive().integer(),
  description: string(),
  //height: number().required().positive(),
  //width: number().required().positive(),
  //matWidth: number().required().positive(),
  finish: string().required(),
  finishQ: number()?.required().positive(),
  //material: string().required(),
  //descolillado: string().required(),
  // transfer: boolean(),
});

//const product = await productSchema.validate(await fetchProduct());
