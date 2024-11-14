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
import { array } from "yup";
import CircularProgress from "@mui/material/CircularProgress";
const key = uuid4();

const width = 1300;
getClassName();
const columns = [
  {
    align: "center",
    headerAlign: "center",
    headerClassName: "table-header",
    field: "id",

    headerName: "Orden",
    width: `${width * 0.047}` /* headerClassName:  headerAlign:  */,
    cellClassName: "bold",
  },
  {
    align: "center",
    headerAlign: "center",
    headerClassName: "table-header",
    field: "fecha_recibido",
    headerName: "Recepción",
    width: `${width * 0.071}`,
    /*    editable: true, */
  },
  {
    align: "center",
    headerAlign: "center",
    headerClassName: "table-header",
    field: "fecha_entrega",
    headerName: "Entrega",
    width: `${width * 0.07}`,
    /*  editable: true, */
  },
  {
    /*  align: "center",
    headerAlign: "center", */
    headerClassName: "table-header",
    field: "nombre",
    headerName: "Cliente",

    /*  type: "number", */
    width: `${width * 0.197}`,
    /*  editable: true, */
    cellClassName: "text-transform bold",
  },

  {
    /* align: "center",
    headerAlign: "center", */
    headerClassName: "table-header",
    field: "trabajo",
    headerName: "Trabajo",
    /*   type: "number", */
    width: `${width * 0.213}`,
    /*   editable: true, */
    /* renderCell: (cellValues) => {
      return <p>{cellValues[0]}</p>;
    }, */
    filterable: false,
    sortable: false,
    hideable: false,
    /* disableColumnMenu: true, */
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
    width: `${width * 0.071}`,
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
    width: `${width * 0.071}`,
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
    width: `${width * 0.071}`,
    /*  editable: true, */
    valueFormatter: (value) => colPesos.format(value),
    cellClassName: "fw-800",
  },

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
        <Box className="success-out-bg fw-800 center">
          <Typography
            sx={{ fontSize: 12, fontWeight: 800, color: "success.main" }}
          >
            PAGADO
          </Typography>
        </Box>
      ) : (
        <Box
          className="error-out-bg fw-800 center"
          sx={{ fontSize: 14, fontWeight: 800, color: "white" }}
        >
          <Typography sx={{ fontSize: 14, fontWeight: 800, color: "red" }}>
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
    width: `${width * 0.079}`,
    /*  editable: true, */
    renderCell: (cellValues) => {
      return (
        <Box className={getClassNameTable(cellValues.row.estado)}>
          <Typography sx={{ fontSize: 12, fontWeight: 800 }}>
            {" "}
            {cellValues.row.estado}
          </Typography>
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
    width: `${width * 0.036}`,

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
              sx={{ fontSize: 25, color: "primary.dark", display: "flex" }}
              id={cellValues.row.id}
            />
          </Link>
        </Box>
      );
    },
    cellClassName: "center",
  },
];

export default function Table() {
  const [jobList, setJobList] = useState([]);

  const [listByOrder, setListByOrder] = useState("");
  const formik = useFormik({
    initialValues: {
      orderN: "",
    },
  });

  const [orders, setOrders] = useState([]);

  const [value, setValue] = useState(orders);
  const [inputValue, setInputValue] = useState("");
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
      });
  };

  const getRegById = () => {
    fetch(
      "http://localhost:3000/api/v1/impresosDB/registro/" +
        formik.values.orderN && formik.values.orderN
    )
      .then((res) => res.json())
      .then((data) => {
        setJobList(data);
        console.log(data);
      });
  };

  return (
    <Box sx={{ height: "100vh" /*  backgroundColor: "red" */ }}>
      <Box
        sx={{ display: "grid", width: "50%", gridTemplateColumns: "100px 1fr" }}
      >
        <Autocomplete
          name="orderN"
          freeSolo
          disableClearable
          /* onClose={() => {
          formik.setValues({ ...formik.values, itemTotalPrice: 0 });
        }} */
          getOptionLabel={(option) => option.toString() || ""}
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          inputValue={inputValue}
          onInputChange={(event, newInputValue) => {
            setInputValue(newInputValue);
          }}
          options={orders}
          /* fullWidth */
          renderInput={(params) => (
            <TextField
              name="orderN"
              onChange={formik.handleChange}
              {...params}
              label="Buscar Orden"
            />
          )}
        />
        <Button onClick={getRegById}>Buscar</Button>
      </Box>

      <Box sx={{ width: width }}>
        <DataGrid
          /*  loading={loading} */
          /* components={{
            LoadingOverlay: CircularProgress,
          }} */
          /*    loading */
          slotProps={{
            loadingOverlay: {
              variant: "linear-progress",
              noRowsVariant: "skeleton",
            },
          }}
          getRowId={(row) => row.id}
          rowHeight={"auto"}
          sx={{
            width: "100%",
            border: "none",
            justifySelf: "start",
            "&.MuiDataGrid-root": {
              border: "none",
              overflow: "hidden",
            },
            "& .MuiDataGrid-iconButtonContainer": {
              display: "none",
            },
          }}
          /* rows={rows} */
          rows={jobList}
          /*     rows={filteredJobList} */
          disableColumnMenu
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
