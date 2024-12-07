import {
  Autocomplete,
  Box,
  Grid,
  Stack,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import FormSelect2 from "../Forms/FormSelect2";
import { useFormik } from "formik";
import { options } from "../utils/options";
import { PersonSchema } from "../Validations";
import { usePersonalData } from "../../store/shoppingCart";
import { fakeUsers } from "../utils/test";
import { useNavigate } from "react-router-dom";
import NextBtn from "../Buttons/NextBtn";
import "../styles/layout.css"
import { getPageTitle } from "../utils/helpers";
import { darkGrey } from "../styles/cssVariables";


const PersonalData = () => {
  const localStore = usePersonalData((state) => state.personalData);
  const addData = usePersonalData((state) => state.addData);
  const users = fakeUsers.map((user) => user.name);
  const navigate = useNavigate();
  let isValid = true;

  const handleSubmit = () => {
    !formik.isValid
      ? () => {
          isValid = false;
          formik.setErrors({
            billType: formik.errors.billType,
            clientType: formik.errors.clientType,
            name: formik.errors.name,
            email: formik.errors.email,
            phone: formik.errors.phone,
          });
        }
      : formik.setErrors({
          billType: "",
          clientType: "",
          name: "",
          email: "",
          phone: "",
        });
    addData(formik.values);

    navigate("/client-data/product-module");
  };

  const formik = useFormik({
    initialValues: {
      billType: "Recibo",
      clientType: "",
      name: "",
      email: "",
      phone: "",
      nit: "",
    },
    validationSchema: PersonSchema,
    onSubmit: handleSubmit,

    validateOnChange: false,
    validateOnBlur: false,
  });

  useEffect(() => {
    const updateState = () => {
      formik.setValues({
        billType: localStore.billType,
        clientType: localStore.clientType,
        name: localStore.name,
        email: localStore.email,
        phone: localStore.phone,
        nit: localStore.nit,
      });
    };
    updateState();
  }, []);

  const handleAutoChange = (event, value) => {
    formik.values.name = value;
    const found = users.filter((user) => user == formik.values.name);
   /*  console.log(found); */
  };
  return (
    <Stack
    className="form-body"
      sx={{
       
      }}
    >
     
        <Box
         className="client-data-container"
        
        >
          <Box sx={{width: '90%', display: 'flex', flexDirection: 'column', justifyContent:'center', alignItems: 'center'}}>
            <Typography sx={{color: "black",
              fontSize: 40,
              fontWeight: 900,
                     
             
              }}>
              {getPageTitle()}
            </Typography>
            <Typography sx={{color: darkGrey,
              fontSize: 18,
              fontWeight: 400,
              textAlign: 'center',
              
   
             
              }}>
              {'Los campos con asterisco (*) son obligatorios.' }
            </Typography></Box>
        
          <div
           
         
            className="client-data-layout"
        
          >
          

              <FormSelect2
              className='recibo'
                required
                value={formik.values.billType}
                error={formik.errors.billType}
                helperText={formik.errors.billType}
                fullWidth
                name="billType"
                onChange={formik.handleChange}
                options={options.billType}
                label={"Tipo de recibo"}
              />
        
            
              <FormSelect2
              className='cliente'
                required
                value={formik.values.clientType}
                error={formik.errors.clientType && formik.errors.clientType}
                helperText={formik.errors.clientType}
                fullWidth
                name="clientType"
                onChange={formik.handleChange}
                options={options.userType}
                label={"Cliente"}
              />
            
        
              <Autocomplete
              className='cliente'
                value={formik.values.name}
                helperText={formik.errors.name}
                error={formik.errors.name}
                freeSolo={true}
                name="name"
                options={users}
                sx={{
                  textTransform: "capitalize",
                }}
                defaultValue={localStore.name}
                renderInput={(params) => (
                  <TextField
                     className='cliente'
                    required
                    error={formik.errors.name}
                    value={formik.values.name}
                    helperText={formik.errors.name}
                    name="name"
                    onChange={formik.handleChange}
                    {...params}
                    label="Nombre / Razón Social"
                    InputProps={{
                      ...params.InputProps,
                    }}
                  />
                )}
              />
   

        
              <TextField
                 className='mail'
                error={formik.touched.email && formik.errors.email}
                helperText={formik.errors.email}
                value={formik.values.email}
                name="email"
                onChange={formik.handleChange}
                fullWidth
                label={"Email"}
                type="email"
              />
    

      
              <TextField
                 className='telefono'
                required
                error={formik.touched.phone && formik.errors.phone}
                helperText={formik.errors.phone}
                value={formik.values.phone}
                name="phone"
                onChange={formik.handleChange}
                fullWidth
                label={"Teléfono"}
                type="text"
              />
       
          </div>
        </Box>
   
      <div
        style={{
          height: 60,
          display: "flex",
          width: "100%",

        }}
      >
        <Grid
          item
         
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "end",
            alignItems: "center",
          }}
        >
          <Tooltip
            componentsProps={{
              tooltip: {
                sx: {
                  bgcolor: "black",
                  "& .MuiTooltip-arrow": {
                    color: "black",
                  },
                },
              },
            }}
            title="Agregar productos"
            placement="bottom"
            arrow
          >
            <span style={{marginTop: 50}}>
              <NextBtn
                style={{ color: "primary.main" }}
                onClick={formik.handleSubmit}
                className={"arrow-btn"}
              />
            </span>
          </Tooltip>
        </Grid>
      </div>
    </Stack>
  );
};

export default PersonalData;
