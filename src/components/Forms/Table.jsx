import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridColumnHeaderMenu } from "@mui/x-data-grid";
import { useState } from "react";
import { useEffect } from "react";
import { Button, Chip, Typography } from "@mui/material";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import EditIcon from "@mui/icons-material/Edit";
import DeleteBtn from "../Buttons/DeleteBtn";
import { useNavigate } from "react-router-dom";
import { AlignCenter } from "lucide-react";
import { colPesos } from "../utils/configs";
const handleClick = (event, cellValues) => {
  console.log(cellValues.row);
};
const getReg = (id) => {
  fetch("http://localhost:3000/api/v1/impresosDB/registro/" + id)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
};
const columns = [
  {
    align: "center",
    headerAlign: "center",
    headerClassName: "table-header",
    field: "id",

    headerName: "Orden",
    width: 60 /* headerClassName:  headerAlign:  */,
  },
  {
    align: "center",
    headerAlign: "center",
    headerClassName: "table-header",
    field: "fecha_recibido",
    headerName: "Recepción",
    width: 90,
    /*    editable: true, */
  },
  {
    align: "center",
    headerAlign: "center",
    headerClassName: "table-header",
    field: "fecha_entrega",
    headerName: "Entrega",
    width: 90,
    /*  editable: true, */
  },
  {
    /*  align: "center",
    headerAlign: "center", */
    headerClassName: "table-header",
    field: "nombre",
    headerName: "Cliente",
    /*  type: "number", */
    width: 200,
    /*  editable: true, */
    cellClassName: "text-transform",
  },

  {
    /* align: "center",
    headerAlign: "center", */
    headerClassName: "table-header",
    field: "trabajo",
    headerName: "Trabajo",
    /*   type: "number", */
    width: 270,
    /*   editable: true, */
    /* renderCell: (cellValues) => {
      return <p>{cellValues[0]}</p>;
    }, */
    renderCell: (cellValues) => {
      const val = cellValues.row.trabajo;
      /*   return val; */
      /*  return val[0]; */
      /*  return Array.from(val).join("\n"); */
      return (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          {val.map((x) => (
            <Typography
              sx={{
                fontSize: 13,
                /*   borderBottom: "1px solid #f2f2f2", */
                p: 0.2,
                height: "100%",
              }}
              key={cellValues.row.id}
            >
              {`${val.indexOf(x) + 1}. ${x}`}
            </Typography>
          ))}
        </Box>
      );
    },
    cellClassName: "text-transform",
  },
  {
    align: "center",
    headerAlign: "center",
    headerClassName: "table-header",
    field: "recibe",
    headerName: "Recibe",
    /*  type: "number", */
    width: 90,
    /*  editable: true, */
    cellClassName: "text-transform",
  },
  {
    align: "center",
    headerAlign: "center",
    headerClassName: "table-header",
    field: "realiza",
    headerName: "Realiza",
    /*  type: "number", */
    width: 90,
    /*  editable: true, */
    cellClassName: "text-transform",
  },
  {
    align: "center",
    headerAlign: "center",
    headerClassName: "table-header",
    field: "total",
    headerName: "Total",
    type: "number",
    width: 90,
    /*  editable: true, */
    valueFormatter: (value) => colPesos.format(value),
    cellClassName: "fw-800",
  },
  /* {
    headerClassName: "table-header",
    field: "abono1",
    headerName: "Abono",
    type: "number",
    width: 90,
    valueFormatter: (value) => `$${value}`,
  
    valueGetter: (value, row) => {
      return row.abono1 + parseInt(row.abono2);
      console.log(parseInt(row.abono2) + row.abono1);
    },
  }, */

  {
    align: "center",
    headerAlign: "center",
    headerClassName: "table-header",
    field: "resta",
    headerName: "Resta",
    /*  type: "number", */
    valueFormatter: (value) => `$${value}`,
    width: 90,
    renderCell: (cellValues) => {
      return parseInt(cellValues.row.resta) === 0 ? (
        <Box className="success-bg fw-800 center">
          <Typography sx={{ fontSize: 14, fontWeight: 800, color: "white" }}>
            PAGADO
          </Typography>
        </Box>
      ) : (
        <Box
          className="error-bg fw-800 center"
          sx={{ fontSize: 14, fontWeight: 800, color: "white" }}
        >
          <Typography sx={{ fontSize: 14, fontWeight: 800, color: "white" }}>
            {" "}
            {colPesos.format(cellValues.row.resta)}
          </Typography>
        </Box>
      );
    },
    cellClassName: "center",
    /* cellClassName: `${
      field.value > 0 ? "error-text fw-800" : "success-text fw-800"
    }`, */
    /*  editable: true, */
  },
  {
    align: "center",
    headerAlign: "center",
    headerClassName: "table-header",
    field: "estado",
    headerName: "Estado",
    /*  type: "number", */
    width: 90,
    /*  editable: true, */
    renderCell: (cellValues) => {
      return (
        <Box
          className={
            cellValues.row.estado === "en espera" ? "status-wait" : "success-bg"
          }
        >
          {cellValues.row.estado}
        </Box>
      );
    },
    cellClassName: "center",
  },
  {
    align: "center",
    headerAlign: "center",
    headerClassName: "table-header",
    field: " ",
    width: 60,

    renderCell: (cellValues, row) => {
      const navigate = useNavigate();
      return (
        <Box
          sx={{
            display: "flex",

            justifyContent: "space-evenly",
            alignItems: "center",
            justifySelf: "end",
          }}
        >
          {/* <EditIcon
            className="btn"
           
            sx={{ fontSize: 24, color: "primary.main" }}
          /> */}
          <VisibilityOutlinedIcon
            className="btn bg-primary"
            // onClick={getReg(cellValues.row.id)}
            onClick={() => navigate("/editar-registro/" + cellValues.row.id)}
            sx={{ fontSize: 30, color: "primary.dark" }}
          />
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
    <Box sx={{ height: "auto", width: "auto" }}>
      <DataGrid
        rowHeight={"auto"}
        sx={{ border: "none", justifySelf: "start" }}
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
