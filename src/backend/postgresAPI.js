import { Pool } from "pg";

export const client = new Pool({
  user: "postgres",
  password: "Onepiece.07",
  host: "localhost",
  port: 5432,
  database: "impresosDB",
});

/* client.connect().then(() => {
  console.log("Connected to PostgreSQL database");

  // Execute SQL queries here

 client.query("SELECT * FROM vinilos", (err, result) => {
      if (err) {
        console.error("Error executing query", err);
      } else {
        console.log("Query result:", result.rows);
      }

      // Close the connection when done
      client
        .end()
        .then(() => {
          console.log("Connection to PostgreSQL closed");
        })
        .catch((err) => {
          console.error("Error closing connection", err);
        });
    });
  })
  .catch((err) => {
    console.error("Error connecting to PostgreSQL database", err); 
});*/
