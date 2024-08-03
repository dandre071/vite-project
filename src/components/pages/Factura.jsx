import {
  Box,
  Input,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import ReadOnlyText from "../Text/ReadOnlyText";
import { title } from "../../Styles/styles";
import { customTheme } from "../../Hooks/useCustomTheme";
import InvoiceListItem from "../InvoiceListItem";
import { formatPhoneNumber } from "../utils/helpers";
import FormSelect2 from "../Forms/FormSelect2";
import useUsers from "../../Hooks/useUsers";
import supabase from "../../config/supabaseClient";

const Factura = () => {
  const users = useUsers();
  //const userList = users.map((user) => user.users);
  console.log(users.users);
  /* const users = useUsers();
  console.log(users); */
  /* const [user, setUser] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getUsers() {
      let { data, error } = await supabase.from("workers").select("*");
      console.log(data);

      if (data != null) {
        setUser(data);
      }
    }

    getUsers();
  }, []);

  const users = user.map((x) => x["users"]);
  console.log(users); */
  // const users = ["Diego", "Angélica"];
  return (
    <form>
      <Stack
        sx={{
          width: "14cm",
          height: "21cm",
          bgcolor: "white",

          display: "grid",
          gridTemplateRows: "2.5cm 2.5cm 12cm 3.5cm",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/*  <Box
          sx={{
            width: "13cm",

            bgcolor: "purple",
            display: "grid",
            gridTemplateRows: "2.5cm 2.5cm 12cm 3.5cm",
            //gap: 0.5,
          }}
        > */}
        <Stack
          sx={{
            width: "100%",
            height: "100%",
            bgcolor: "red",
            display: "grid",
          }}
        ></Stack>
        <Stack
          sx={{
            display: "grid",
            width: "95%",
            spacing: 1,

            bgcolor: "white",
            justifyContent: "center",
            alignItems: "center",
            padding: 0,

            justifySelf: "center",
            gridTemplateColumns: "50% 25% 25%",
            // border: "1px solid black",
            borderRadius: 2.5,
          }}
        >
          <Stack spacing={0.5} direction={"column"} sx={{}}>
            <Box>
              <Typography
                variant="h6"
                className="invoice-label"
                sx={{
                  width: "98%",
                  marginBottom: -0.5,
                  p: 0,

                  fontSize: 11,
                }}
              >
                Nombre / Razón Social:
              </Typography>
              <Typography
                variant="h6"
                className="invoice-input"
                sx={{
                  width: "98%",
                  marginBottom: -0.5,
                  p: 0,

                  fontSize: 14,
                }}
              >
                Nombre / Razón Social:
              </Typography>
            </Box>

            <Box>
              <Typography
                className="invoice-label"
                sx={{
                  width: "98%",
                  // bgcolor: "red",
                  p: 0,

                  fontSize: 11,
                }}
              >
                Email:
              </Typography>
              <Typography
                className="invoice-input"
                sx={{
                  width: "98%",
                  // bgcolor: "red",
                  p: 0,

                  fontSize: 14,
                }}
              >
                sdsdsdsdsdsd
              </Typography>
            </Box>
          </Stack>
          {/*   <Stack spacing={0.5} direction={"column"} sx={{}}>
            <Box>
              <Typography
                variant="h6"
                className="invoice-label"
                sx={{
                  width: "98%",
                  marginBottom: -0.5,
                  p: 0,

                  fontSize: 11,
                }}
              >
                Nombre / Razón Social:
              </Typography>
              <Input
                disableUnderline
                className="invoice-input"
                fullWidth
                sx={{
                  height: 19,
                  textTransform: "capitalize",
                  // bgcolor: "grey",
                  fontSize: 13,
                  fontWeight: 600,
                  p: 0,
                }}
              />
            </Box>

            <Box>
              <Typography
                className="invoice-input"
                sx={{
                  width: "98%",
                  // bgcolor: "red",
                  p: 0,

                  fontSize: 11,
                }}
              >
                Email:
              </Typography>
              <Input
                disableUnderline
                className="invoice-input"
                fullWidth
                sx={{
                  height: 20,
                  textTransform: "capitalize",
                  // bgcolor: "grey",
                  fontSize: 14,
                  fontWeight: 600,
                  p: 0,
                }}
              />
            </Box>
          </Stack> */}
          <Stack spacing={0.5} direction={"column"} sx={{ width: "90%" }}>
            <Box>
              <Typography
                variant="h6"
                className="invoice-label"
                sx={{
                  width: "98%",
                  marginBottom: -0.5,
                  p: 0,

                  fontSize: 11,
                }}
              >
                NIT:
              </Typography>
              <Input
                disableUnderline
                className="invoice-input"
                fullWidth
                sx={{
                  height: 19,
                  textTransform: "capitalize",
                  // bgcolor: "grey",
                  fontSize: 13,
                  fontWeight: 600,
                  p: 0,
                }}
              />
            </Box>

            <Box>
              <Typography
                className="invoice-label"
                sx={{
                  width: "98%",
                  // bgcolor: "red",
                  p: 0,

                  fontSize: 11,
                }}
              >
                Teléfono:
              </Typography>
              <Input
                disableUnderline
                className="invoice-input"
                fullWidth
                sx={{
                  height: 20,
                  textTransform: "capitalize",
                  // bgcolor: "grey",
                  fontSize: 14,
                  fontWeight: 600,
                  p: 0,
                }}
              />
            </Box>
          </Stack>
          <Stack spacing={0.5} direction={"column"} sx={{ width: "90%" }}>
            <Box>
              <Typography
                variant="h6"
                className="invoice-label"
                sx={{
                  width: "98%",
                  marginBottom: -0.5,
                  p: 0,

                  fontSize: 11,
                }}
              >
                Recibe:
              </Typography>
              {/* <Input
                disableUnderline
                className="invoice-input"
                fullWidth
                sx={{
                  height: 19,
                  textTransform: "capitalize",
                  // bgcolor: "grey",
                  fontSize: 13,
                  fontWeight: 600,
                  p: 0,
                }}
              /> */}
              {/* <Select
                disableUnderline
                variant="standard"
                hiddenLabel
                size="small"
                value={"Diego"}
                fullWidth
                options={"asass"}
              ></Select> */}
              {/*  <FormSelect2
                fullWidth
                variant={"small"}
                name="finish"
              
                options={users}
              ></FormSelect2> */}
            </Box>

            <Box>
              <Typography
                className="invoice-input"
                sx={{
                  width: "98%",
                  // bgcolor: "red",
                  p: 0,

                  fontSize: 11,
                }}
              >
                Realiza:
              </Typography>
              <Input
                disableUnderline
                className="invoice-input"
                fullWidth
                sx={{
                  height: 20,
                  textTransform: "capitalize",
                  // bgcolor: "grey",
                  fontSize: 14,
                  fontWeight: 600,
                  p: 0,
                }}
              />
            </Box>
          </Stack>
          {/*  <Stack
            spacing={1}
            direction={"column"}
            sx={{ width: "100%", bgcolor: "purple" }}
          >
            <TextField
              fullWidth={false}
              variant="filled"
              size="small"
              label={"Nombre / Razón Social"}
              InputProps={{ style: { fontSize: 16 } }}
              sx={{ width: "98%" }}
            />
            <TextField
              fullWidth={false}
              variant="filled"
              size="small"
              label={"Nombre / Razón Social"}
              InputProps={{ style: { fontSize: 16 } }}
              sx={{ width: "98%" }}
            />
          </Stack> */}
        </Stack>
        <Stack
          sx={{
            width: "100%",
            height: "100%",
            bgcolor: "orange",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Stack
            sx={{
              display: "grid",
              gridTemplateColumns: "1cm 7cm 1cm 2.5cm 2.5cm",
              bgcolor: "black",
              width: "100%",
              height: ".8cm",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              sx={{ fontSize: 12, color: "white", justifySelf: "center" }}
            >
              Item
            </Typography>
            <Typography sx={{ fontSize: 12, color: "white" }}>
              Concepto
            </Typography>
            <Typography
              sx={{ fontSize: 12, color: "white", justifySelf: "center" }}
            >
              Cant
            </Typography>
            <Typography
              sx={{ fontSize: 12, color: "white", justifySelf: "right" }}
            >
              Precio
            </Typography>
            <Typography
              sx={{ fontSize: 12, color: "white", justifySelf: "right" }}
            >
              Total
            </Typography>
          </Stack>
        </Stack>
        <Stack sx={{ width: "100%", height: "100%", bgcolor: "blue" }}></Stack>
        {/*  </Box> */}
      </Stack>
    </form>
  );
};

export default Factura;
