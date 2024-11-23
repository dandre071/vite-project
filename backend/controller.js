import { pool } from "./db.js";
import { getAllProducts, getAllReg, getSingleReg, insertProduct, insertReg, search, updateRecord } from "./queries.js";


export const getProducts = (req, response) => {
  pool.query(getAllProducts, (error, results) => {
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


export const createProduct = (request, response) => {

  const { producto, precio } = request.body;

  pool.query(
    insertProduct,
 
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
  pool.query(getAllReg, (error, results) => {
    if (error) throw error;
    response.status(200).json(results.rows);
  });
};

export const createRegister = (request, response) => {

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
    insertReg,
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

  pool.query(getSingleReg, [id], (error, results) => {
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
    updateRecord,
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
export const searchByName = (req, response) => {
  const { q } = req.query;
  if (!q) {
    return response
      .status(400)
      .json({ error: 'Query parameter "q" is required' });
  }

  pool.query(
 
   search,
    [`%${q}%`],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
};
export const searchByResp = (req, response) => {
  const { q } = req.query;
  if (!q) {
    return response
      .status(400)
      .json({ error: 'Query parameter "q" is required' });
  }

  pool.query(
 
   `SELECT * FROM registro WHERE LOWER(realiza) LIKE LOWER($1)`,
    [`%${q}%`],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
};
/* export const searchBySeller = (req, response) => {
  const { q } = req.query;
  if (!q) {
    return response
      .status(400)
      .json({ error: 'Query parameter "q" is required' });
  }

  pool.query(
    `SELECT * FROM registro WHERE LOWER(recibe) LIKE LOWER($1)`,
    [`%${q}%`],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
}; */
/* export const selectByStatus = (req, response) => {
  const { q } = req.query;
  if (!q) {
    return response
      .status(400)
      .json({ error: 'Query parameter "q" is required' });
  }

  pool.query(
    `SELECT * FROM registro WHERE LOWER(estado) LIKE LOWER($1)`,
    [`%${q}%`],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
}; */
