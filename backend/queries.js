export const insertReg =  "INSERT INTO registro (fecha_recibido, fecha_entrega, nombre, nit, telefono, email, trabajo, recibe, realiza, total, abono1, abono2, resta, estado, observaciones, invoice_data,  tipo_cliente, tipo_recibo) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16,$17,$18) RETURNING *";
export const insertProduct =  "INSERT INTO productos (producto, precio) VALUES ($1, $2) RETURNING *"
export const getAllProducts = "SELECT * FROM productos"
export const getAllReg = "SELECT * FROM registro ORDER BY id DESC"
export const getSingleReg= "SELECT * FROM registro WHERE id = $1"
export const updateRecord = "UPDATE registro SET abono2 = $1, resta = $2, estado = $3 WHERE id = $4 RETURNING *"
export const search = `SELECT * FROM registro WHERE LOWER(nombre) LIKE LOWER($1) OR LOWER(recibe) LIKE LOWER($1)`