import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { useState } from "react";
import { useEffect } from "react";
import { Button, Chip } from "@mui/material";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import EditIcon from "@mui/icons-material/Edit";
import DeleteBtn from "../Buttons/DeleteBtn";

const handleClick = (event, cellValues) => {
  console.log(cellValues.row);
};
const columns = [
  { field: "id", headerName: "Orden", width: 60 },
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
    headerName: "Cliente",
    /*  type: "number", */
    width: 150,
    /*  editable: true, */
    cellClassName: "text-transform",
  },

  {
    field: "trabajo",
    headerName: "Trabajo",
    /*   type: "number", */
    width: 200,
    /*   editable: true, */
    /* renderCell: (cellValues) => {
      return <p>{cellValues[0]}</p>;
    }, */
    /*  valueGetter: (value, row) => {
      const val = row.trabajo;

      return val.slice(0, 2);
    }, */
    cellClassName: "text-transform",
  },
  {
    field: "recibe",
    headerName: "Recibe",
    /*  type: "number", */
    width: 90,
    /*  editable: true, */
    cellClassName: "text-transform",
  },
  {
    field: "realiza",
    headerName: "Realiza",
    /*  type: "number", */
    width: 90,
    /*  editable: true, */
    cellClassName: "text-transform",
  },
  {
    field: "total",
    headerName: "Total",
    type: "number",
    width: 90,
    /*  editable: true, */
    valueFormatter: (value) => `$${value}`,
    cellClassName: "fw-800",
  },
  {
    field: "abono1",
    headerName: "Abono1",
    type: "number",
    width: 90,
    valueFormatter: (value) => `$${value}`,
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
    valueFormatter: (value) => `$${value}`,
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
    field: " ",
    width: 80,

    renderCell: (cellValues) => {
      return (
        <Box
          sx={{
            display: "flex",

            justifyContent: "space-evenly",
            alignItems: "center",
            justifySelf: "end",
          }}
        >
          <EditIcon
            className="btn"
            /*  onClick={editClick} */
            sx={{ fontSize: 24, color: "primary.main" }}
          />
          <VisibilityOutlinedIcon sx={{ fontSize: 30 }} />
        </Box>
      );

      /* <Button
          variant="contained"
          color="primary"
          onClick={(event) => {
            handleClick(event, cellValues);
          }}
        >
          Print
        </Button> */
    },
    cellClassName: "center",
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
        rowHeight={45}
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
