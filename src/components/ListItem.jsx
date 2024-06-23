import { Grid, Typography } from "@mui/material";
import DeleteBtn from "./Buttons/DeleteBtn";
import { colPesos } from "./utils/configs";

const ListItem = (price) => {
  return (
    <Grid
      borderRadius={2}
      container
      flexGrow={1}
      sx={{
        height: 90,
        borderRadius: 2,
        bgcolor: "secondary.light",
        alignContent: "center",
      }}
    >
      <Grid
        item
        sm={1}
        sx={{ alignContent: "center", justifyContent: "center" }}
      >
        <Typography variant="h6" sx={{ textAlign: "center" }}>
          1
        </Typography>
      </Grid>
      <Grid
        item
        sm={7}
        sx={{
          bgcolor: "green",
          display: "grid",
          gridTemplateRows: "2fr 1fr",
        }}
      >
        <Grid sx={{ bgcolor: "blue" }}>
          <Typography
            noWrap
            variant="h6"
            sx={{
              alignContent: "end",
              p: 1,
            }}
            style={{
              whiteSpace: "pre-wrap",
              lineHeight: 1,
            }}
          >
            esta es una prueba para ver como se rompe la linea
          </Typography>
        </Grid>
        <Grid sx={{ bgcolor: "pink", p: 1 }}></Grid>
      </Grid>

      <Grid
        item
        sm={3}
        sx={{
          bgcolor: "yellow",
          alignContent: "center",
        }}
        style={{ justifySelf: "center" }}
      >
        <Typography
          variant="p"
          sx={{
            p: 1,
            fontSize: 20,
            fontWeight: 800,
            justifySelf: "center",
          }}
        >
          {`${colPesos.format(233323)}`}
        </Typography>
      </Grid>
      <Grid
        item
        sm={1}
        sx={{ alignContent: "center", justifyContent: "center" }}
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
  );
};

export default ListItem;
