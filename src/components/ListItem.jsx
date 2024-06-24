import { Box, Divider, Grid, Typography } from "@mui/material";
import DeleteBtn from "./Buttons/DeleteBtn";
import { colPesos } from "./utils/configs";
import { themeColors } from "./utils/configs";
const ListItem = (price) => {
  return (
    <Box>
      <Grid
        borderRadius={2}
        container
        sx={{
          width: 600,
          height: 80,
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
              lineHeight: 1,
              display: "grid",
              color: themeColors.darkSecondary,
              fontSize: 14,
            }}
            sx={{}}
          >
            esta es una prueba para ver como se rompe la linea
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
            alignContent: "center",
            justifyContent: "center",
            borderRightStyle: "solid",
            borderRightWidth: 2,
            borderColor: "primary.main",
          }}
        >
          <Box
            sx={{
              bgcolor: "primary.main",
              color: "primary.light",
              width: "80%",
              borderRadius: 1.5,
            }}
          >
            <Typography variant="h6" sx={{ textAlign: "center", fontSize: 18 }}>
              1
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          sm={3}
          sx={{
            display: "grid",

            alignContent: "center",
            justifyContent: "end",
          }}
        >
          <Divider orientation="vertical" width={2} />
          <Typography
            variant="p"
            sx={{
              fontSize: 18,
              fontWeight: 800,
            }}
          >
            {`${colPesos.format(233323)}`}
          </Typography>
        </Grid>
        <Grid
          item
          sx={{
            alignContent: "center",
            justifyContent: "center",
            display: "grid",
            position: "relative",
            left: 25,
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
        </Grid>
      </Grid>
    </Box>
  );
};

export default ListItem;
