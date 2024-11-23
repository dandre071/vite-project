import { endPoints } from "./endPoints";

export const createRegister = () => {
    fetch(endPoints.records, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fecha_recibido: "24/10/2024",
        fecha_entrega: "28/10/2024",
        nombre: "prueba2",
        nit: 1234567890,
        telefono: 3206598822,
        email: "prueba@gmail.com",
        
        trabajo: '{"value1", "value2"}',
        recibe: "diego",
        realiza: "diego",
        total: 12345,
        abono1: 12345,
        abono2: 0,
        resta: 0,
        estado: "asignado",
        observaciones: "fjfdkfjdkjfkdjf",
      }),
    }).then((respuesta) => respuesta.ok);

  };
  