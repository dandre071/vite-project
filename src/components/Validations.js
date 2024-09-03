import { object, string, number, date, boolean, array } from "yup";
const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const mailRegExp =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const requiredMessage = "Campo obligatorio.";
export const productSchema = object().shape({
  name: string()
    .min(5, "Minimo 5 caracteres")
    .max(40, "Se ha superado el máximo de caracteres!")
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

  description: string() /* required("Este campo es obligatorio.") */,
  //height: number().required().positive(),
  //width: number().required().positive(),
  //matWidth: number().required().positive(),
  finish: /* array().of(string()) */ string().required(),
  finishQ: number()?.required().positive(),
  //material: string().required(),
  //descolillado: string().required(),
  // transfer: boolean(),
});

export const PersonSchema = object().shape({
  billType: string().required("Por favor ingrese un nombre."),
  clientType: string().required(),
  name: string().required("Por favor ingrese un nombre."),

  // .min(5, "too short"),
  /* .min(5, "Mínimo 5 caracteres") */
  /* .required("Este campo es obligatorio."), */
  email: string().matches(mailRegExp, "Email no válido"),

  phone: string()
    .required(requiredMessage)
    .matches(phoneRegExp, "Número no válido")
    .min(10, "Número muy corto")
    .max(10, "Número muy largo"),
  //nit: string().required("Este campo es obligatorio."),
  // receives: string(),
});
export const PaymentSchema = object().shape({
  payment: number().required(requiredMessage),
  receives: string().required(requiredMessage),
  delivery: string().required(requiredMessage),
});
