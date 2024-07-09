import { object, string, number, date, boolean, array } from "yup";

export const productSchema = object().shape({
  name: string()
    .min(5, "Minimo 5 caracteres")
    .required("Este campo es requerido."),
  //.min(1, "El nombre tiene que tener al menos un carácter")
  // .max(10, "El nombre no puede superar los 10 carácteres"),
  price: number("Solo se admiten valores numéricos")
    .required("Este campo es obligatorio.")
    .positive("El número debe ser positivo.")
    .integer(),
  quantity: number("Sólo se permiten números").positive(
    "El valor debe ser mayor a 0!"
  ),

  description: string().required("Este campo es obligatorio."),
  //height: number().required().positive(),
  //width: number().required().positive(),
  //matWidth: number().required().positive(),
  finish: array().of(string()).required(),
  finishQ: number()?.required().positive(),
  //material: string().required(),
  //descolillado: string().required(),
  // transfer: boolean(),
});

//const product = await productSchema.validate(await fetchProduct());
