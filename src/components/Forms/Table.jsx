import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { useState } from "react";
import { useEffect } from "react";
import { Button, Chip } from "@mui/material";
const handleClick = (event, cellValues) => {
  console.log(cellValues.row);
};
const columns = [
  { field: "id", headerName: "ID", width: 50 },
  {
    field: "fecha_recibido",
    headerName: "Recepción",
    width: 90,
    /*    editable: true, */
  },
  {
    field: "fecha_entrega",
    headerName: "Entrega",
    width: 90,
    /*  editable: true, */
  },
  {
    field: "nombre",
    headerName: "Nombre",
    /*  type: "number", */
    width: 150,
    /*  editable: true, */
  },

  {
    field: "trabajo",
    headerName: "Trabajo",
    /*  type: "number", */
    width: 200,
    /*  editable: true, */
  },
  {
    field: "recibe",
    headerName: "Recibe",
    /*  type: "number", */
    width: 90,
    /*  editable: true, */
  },
  {
    field: "realiza",
    headerName: "Realiza",
    /*  type: "number", */
    width: 90,
    /*  editable: true, */
  },
  {
    field: "total",
    headerName: "Total",
    type: "number",
    width: 90,
    /*  editable: true, */
  },
  {
    field: "abono1",
    headerName: "Abono1",
    type: "number",
    width: 90,
    /*  editable: true, */
    valueGetter: (value, row) => {
      return row.abono1 + parseInt(row.abono2);
      console.log(parseInt(row.abono2) + row.abono1);
    },
  },

  {
    field: "resta",
    headerName: "Resta",
    /*  type: "number", */
    width: 90,
    /*  editable: true, */
  },
  {
    field: "estado",
    headerName: "Estado",
    /*  type: "number", */
    width: 90,
    /*  editable: true, */
    renderCell: (cellValues) => {
      return (
        <Box
          className={
            cellValues.row.estado === "en espera" ? "status-wait" : "status-ok"
          }
        >
          {cellValues.row.estado}
        </Box>
      );
    },
    /* cellClassName: "status-bg", */
  },
  {
    field: "Print",
    renderCell: (cellValues) => {
      return (
        <Button
          variant="contained"
          color="primary"
          onClick={(event) => {
            handleClick(event, cellValues);
          }}
        >
          Print
        </Button>
      );
    },
  },
  /*  {
    field: "observaciones",
    headerName: "Observaciones",
     type: "number",
    width: 200,
    editable: true, 
  }, */
  /*   {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (value, row) => `${row.firstName || ""} ${row.lastName || ""}`,
  }, */
];

export default function Table() {
  const [jobList, setJobList] = useState(null);
  useEffect(() => {
    fetch("http://localhost:3000/api/v1/impresosDB/registro")
      .then((res) => res.json())
      .then((data) => {
        setJobList(data);
        console.log(data.map((x) => x.id));
      });
  }, []);
  const rows = [{ id: jobList, lastName: "Snow", firstName: "Jon", age: 14 }];
  return (
    <Box sx={{ height: "auto", width: "100%" }}>
      <DataGrid
        sx={{ border: "none" }}
        /* rows={rows} */
        rows={jobList}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        pageSizeOptions={[10]}
        /*   checkboxSelection */
        disableRowSelectionOnClick
      />
    </Box>
  );
}
