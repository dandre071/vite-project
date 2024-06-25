import { Box, Divider, Grid, Typography } from "@mui/material";
import DeleteBtn from "./Buttons/DeleteBtn";
import { colPesos } from "./utils/configs";
import { themeColors } from "./utils/configs";
const ListItem = (price) => {
  return (
    <Box>
      <Box
        sx={{
          position: "relative",
          display: "flex",
        }}
      >
        <Grid
          borderRadius={2}
          container
          sx={{
            width: 550,
            height: 85,
            borderRadius: 2,
            bgcolor: "white",
            alignContent: "center",
            borderStyle: "solid",
            borderWidth: 1,
            borderColor: themeColors.infoDark,
          }}
        >
          <Grid
            item
            sm={7}
            sx={{
              display: "grid",
              // gridTemplateRows: "50px 40px",
              height: " 100%",
              p: 1,
              gap: 0.5,
            }}
          >
            <Box>
              <Typography
                style={{
                  whiteSpace: "pre-wrap",
                  lineHeight: 1,
                  display: "grid",
                  color: themeColors.neutralDark,
                  fontSize: 18,
                  fontWeight: 600,
                  alignContent: "end",
                }}
              >
                esta es una prueba para ver como se rompe la linea fdfdgff
              </Typography>
            </Box>
            <Typography
              style={{
                whiteSpace: "pre-wrap",
                lineHeight: 1.1,
                display: "grid",
                color: themeColors.darkSecondary,
                fontSize: 14,
              }}
              sx={{}}
            >
              esta es una prueba para ver como se rompe la linea ffdfrtrtrtrtr
            </Typography>

            {/* <Grid sx={{ bgcolor: "pink", display: "grid", alignContent: "start" }}>
          <Typography
            style={{
              whiteSpace: "pre-wrap",
              lineHeight: 1,
              display: "grid",
              justifyContent: "end",
              alignItems: "end",
            }}
            sx={{ fontSize: 14 }}
          >
            esta es una prueba para ver como se rompe la linea
          </Typography>
        </Grid> */}
          </Grid>
          <Grid
            item
            sm={1}
            sx={{
              display: "block",
              alignContent: "center",

              /*  borderRightStyle: "solid",
              borderRightWidth: 2,
              borderColor: "primary.main", */
            }}
          >
            <Box
              sx={{
                /*  bgcolor: "primary.main", */
                borderStyle: "solid",
                borderWidth: 1,
                color: "black",
                width: "70%",
                height: 30,
                borderRadius: 1.5,
                alignContent: "center",
                justifyContent: "center",
              }}
            >
              <Typography
                variant="h6"
                sx={{ textAlign: "center", fontSize: 18 }}
              >
                100
              </Typography>
            </Box>
          </Grid>
          <Grid
            item
            sm={4}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              p: 1,
              alignItems: "center",
              justifyContent: "end",
            }}
          >
            {/* <Divider orientation="vertical" width={2} /> */}
            <Typography
              variant="p"
              sx={{
                pr: 2,
                fontSize: 18,
                fontWeight: 600,
                color: "secondary.dark",
              }}
            >
              {`${colPesos.format(10233323)}`}
            </Typography>
            {/* <Box
              sx={{
                bgcolor: "white",
                width: 35,
                height: 35,
                borderRadius: "50%",
              }}
            >
              <DeleteBtn
                sx={{
                  fontSize: 35,

                  "&:hover": {
                    cursor: "pointer",
                  },
                }}
              />
            </Box> */}
          </Grid>
        </Grid>
        <Box
          sx={{
            position: "absolute",
            right: -15,
            top: 25,
            bgcolor: "white",
            width: 35,
            height: 35,
            borderRadius: "50%",
          }}
        >
          <DeleteBtn
            sx={{
              fontSize: 35,

              "&:hover": {
                cursor: "pointer",
              },
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default ListItem;
