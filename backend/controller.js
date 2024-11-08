/* const pool = require("./db"); */

import { pool } from "./db.js";
/* import { queries } from "./queries.js"; */

export const getProducts = (req, response) => {
  pool.query("SELECT * FROM productos", (error, results) => {
    if (error) throw error;
    response.status(200).json(results.rows);
  });
};
/* export const getProductsLastId = (req, response) => {
  pool.query("SELECT MAX(id) * FROM productos", (error, results) => {
    if (error) throw error;
    response.status(200).json(results.rows);
  });
}; */
export const getUsers = (req, response) => {
  pool.query("SELECT * FROM vendedores", (error, results) => {
    if (error) throw error;
    response.status(200).json(results.rows);
  });
};
export const getLaminatePrice = (req, response) => {
  pool.query("SELECT * FROM laminado", (error, results) => {
    if (error) throw error;
    response.status(200).json(results.rows);
  });
};
export const getMaterialPrice = (req, response) => {
  pool.query("SELECT * FROM precio_material", (error, results) => {
    if (error) throw error;
    response.status(200).json(results.rows);
  });
};
export const getVinylPrice = (req, response) => {
  pool.query("SELECT * FROM precio_vinilos", (error, results) => {
    if (error) throw error;
    response.status(200).json(results.rows);
  });
};

export const createProduct = (request, response) => {
  /*  const { id, producto, precio } = request.body; */
  const { producto, precio } = request.body;

  pool.query(
    /*     "INSERT INTO productos (id,producto, precio) VALUES ($1, $2, $3) RETURNING *", */
    "INSERT INTO productos (producto, precio) VALUES ($1, $2) RETURNING *",
    /*  [id, producto, precio], */
    [producto, precio],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(201).send(`User added with ID: ${results.rows[0].id}`);
    }
  );
};
export const getRegister = (req, response) => {
  pool.query("SELECT * FROM registro ORDER BY id DESC", (error, results) => {
    if (error) throw error;
    response.status(200).json(results.rows);
  });
};
export const createRegister = (request, response) => {
  /*  const { id, producto, precio } = request.body; */
  const {
    fecha_recibido,
    fecha_entrega,
    nombre,
    nit,
    telefono,
    email,
    trabajo,
    recibe,
    realiza,
    total,
    abono1,
    abono2,
    resta,
    estado,
    observaciones,
  } = request.body;

  pool.query(
    /*     "INSERT INTO productos (id,producto, precio) VALUES ($1, $2, $3) RETURNING *", */
    "INSERT INTO registro (fecha_recibido, fecha_entrega, nombre, nit, telefono, email, trabajo, recibe, realiza, total, abono1, abono2, resta, estado, observaciones) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15) RETURNING *",
    /*  [id, producto, precio], */
    [
      fecha_recibido,
      fecha_entrega,
      nombre,
      nit,
      telefono,
      email,
      trabajo,
      recibe,
      realiza,
      total,
      abono1,
      abono2,
      resta,
      estado,
      observaciones,
    ],
    (error, results) => {
      if (error) {
        throw error;
      }
      response
        .status(201)
        .send(`Register added with ID: ${results.rows[0].id}`);
    }
  );
};

export const getRegById = (request, response) => {
  const id = parseInt(request.params.id);

  pool.query("SELECT * FROM registro WHERE id = $1", [id], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

export const updateReg = (request, response) => {
  const id = parseInt(request.params.id);

  const { abono2, resta, estado } = request.body;

  pool.query(
    "UPDATE registro SET abono2 = $1, resta = $2, estado = $3 WHERE id = $4 RETURNING *",
    [abono2, resta, estado, id],
    (error) => {
      if (error) {
        throw error;
      }
      response.status(201).send(`Registro modificado en ID: ${id}`);
    }
  );
  /* return res.json(rows[0]); */
};
/* console.log(users); */
/* module.exports = {
  getProducts,
}; */
