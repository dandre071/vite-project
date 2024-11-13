import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridColumnHeaderMenu } from "@mui/x-data-grid";
import { useState } from "react";
import { useEffect } from "react";
import {
  Autocomplete,
  Button,
  Chip,
  TextField,
  Typography,
} from "@mui/material";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import EditIcon from "@mui/icons-material/Edit";
import DeleteBtn from "../Buttons/DeleteBtn";
import { Link, useNavigate } from "react-router-dom";
import { AlignCenter } from "lucide-react";
import { colPesos } from "../utils/configs";
import uuid4 from "uuid4";
import { useRegData } from "../../store/regStore";
import { getClassName, getClassNameTable } from "../utils/helpers";
import { useFormik } from "formik";

const key = uuid4();
/* const handleClick = (event, cellValues) => {
  console.log(cellValues.row);
}; */
/* const getReg = (id) => {
  fetch("http://localhost:3000/api/v1/impresosDB/registro/" + id)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
}; */
getClassName();
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
              key={key}
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
    width: 100,
    /*  editable: true, */
    renderCell: (cellValues) => {
      return (
        <Box className={getClassNameTable(cellValues.row.estado)}>
          {cellValues.row.estado}
        </Box>
      );
    },
    cellClassName: "center flex",
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
          <Link
            to={`/registro/${cellValues.row.id}`}
            state={{ from: cellValues.row.id }}
          >
            <VisibilityOutlinedIcon
              className="btn bg-primary"
              // onClick={getReg(cellValues.row.id)}
              onClick={() => {
                // click(cellValues.row.id);
                //navigate("/registro/" + cellValues.row.id);
              }}
              sx={{ fontSize: 30, color: "primary.dark" }}
              id={cellValues.row.id}
            />
          </Link>
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

  const [listByOrder, setListByOrder] = useState("");
  const formik = useFormik({
    initialValues: {
      orderN: null,
    },
  });

  /* const options = jobList || null; */
  const [orders, setOrders] = useState("");
  console.log(jobList);
  const [value, setValue] = useState(orders);
  console.log(value);
  const [inputValue, setInputValue] = useState("");
  console.log(inputValue);
  useEffect(() => {
    fetch("http://localhost:3000/api/v1/impresosDB/registro")
      .then((res) => res.json())
      .then((data) => {
        setJobList(data);
        setOrders(data.map((x) => x.id));
      });
  }, []);
  const getReg = () => {
    fetch("http://localhost:3000/api/v1/impresosDB/registro")
      .then((res) => res.json())
      .then((data) => {
        setJobList(data);
        /*   setOrders(data.map((x) => x.id)); */
      });
  };
  const [filteredJobList, setfilteredJobList] = useState("");
  /* const rows = [{ id: jobList, lastName: "Snow", firstName: "Jon", age: 14 }]; */
  const getRegById = () => {
    fetch(
      "http://localhost:3000/api/v1/impresosDB/registro/" + inputValue &&
        inputValue
    )
      .then((res) => res.json())
      .then((data) => {
        setfilteredJobList(jobList.filter((x) => x.id === value));

        /* setOrders(data.map((x) => x.id)); */
      });
  };
  console.log(value);
  /*  if (inputValue === "") setfilteredJobList(jobList); */
  const getListByOrder = () => {
    if (formik.values.orderN)
      setfilteredJobList(jobList.filter((x) => x.id === value));
    else setfilteredJobList(jobList);
  };
  console.log(formik.values.orderN);
  console.log(filteredJobList);
  /*  console.log(jobList && Object.values(jobList[0])); */
  // console.log(jobList && jobList[0].filter((x) => x.id === 4));
  /* console.log(setReg); */
  return (
    <Box>
      <Box
        sx={{ display: "grid", width: "50%", gridTemplateColumns: "100px 1fr" }}
      >
        <Autocomplete
          name="orderN"
          freeSolo
          /* onClose={() => {
          formik.setValues({ ...formik.values, itemTotalPrice: 0 });
        }} */
          // getOptionLabel={(option) => option.toString() || ""}
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
            console.log(typeof newValue);
          }}
          inputValue={inputValue}
          onInputChange={(event, newInputValue) => {
            setInputValue(newInputValue);
          }}
          options={orders}
          /* fullWidth */
          renderInput={(params) => (
            <TextField {...params} label="Buscar Orden" />
          )}
        />
        <Button onClick={() => getRegById}>Buscar</Button>
      </Box>

      <Box sx={{ height: "auto", width: "auto" }}>
        <DataGrid
          getRowId={(row) => row.id}
          rowHeight={"auto"}
          sx={{
            border: "none",
            justifySelf: "start",
            "&.MuiDataGrid-root": {
              border: "none",
            },
            "& .MuiDataGrid-sortIcon": {
              opacity: "inherit !important",
              width: 20,
            },
          }}
          /* rows={rows} */
          /*  rows={jobList} */
          rows={filteredJobList}
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
    </Box>
  );
}
